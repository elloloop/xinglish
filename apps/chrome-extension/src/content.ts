import { TransliterationEngine } from '@elloloop/xinglish-core';

console.log('Xinglish Chrome Extension loaded.');

// We can instantiate the engine right here in the content script
// In a production extension, you might want a more sophisticated UI overlay.
const engine = new TransliterationEngine('hindi');

// Track the currently active element
let activeElement: HTMLInputElement | HTMLTextAreaElement | null = null;
let suggestionsBox: HTMLDivElement | null = null;

function createSuggestionsBox() {
  if (suggestionsBox) return;
  
  suggestionsBox = document.createElement('div');
  suggestionsBox.id = 'xinglish-extension-suggestions';
  suggestionsBox.style.position = 'absolute';
  suggestionsBox.style.background = 'white';
  suggestionsBox.style.border = '1px solid #ccc';
  suggestionsBox.style.borderRadius = '4px';
  suggestionsBox.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
  suggestionsBox.style.zIndex = '999999';
  suggestionsBox.style.display = 'none';
  suggestionsBox.style.padding = '4px';
  suggestionsBox.style.fontFamily = 'sans-serif';
  suggestionsBox.style.fontSize = '14px';
  
  document.body.appendChild(suggestionsBox);
}

function updateSuggestions(word: string, rect: DOMRect) {
  if (!suggestionsBox) createSuggestionsBox();
  
  if (!word.trim()) {
    suggestionsBox!.style.display = 'none';
    return;
  }

  const suggestions = engine.getSuggestions(word);
  if (suggestions.length === 0) {
    suggestionsBox!.style.display = 'none';
    return;
  }

  suggestionsBox!.innerHTML = '';
  suggestions.slice(0, 5).forEach(s => {
    const item = document.createElement('div');
    item.textContent = s.text;
    item.style.padding = '4px 8px';
    item.style.cursor = 'pointer';
    
    item.addEventListener('mouseenter', () => item.style.backgroundColor = '#f0f0f0');
    item.addEventListener('mouseleave', () => item.style.backgroundColor = 'transparent');
    
    item.addEventListener('mousedown', (e) => {
      e.preventDefault(); // Prevent input blur
      replaceActiveWord(s.text);
    });
    
    suggestionsBox!.appendChild(item);
  });
  
  suggestionsBox!.style.display = 'block';
  suggestionsBox!.style.top = `${window.scrollY + rect.bottom + 5}px`;
  suggestionsBox!.style.left = `${window.scrollX + rect.left}px`;
}

function replaceActiveWord(newText: string) {
  if (!activeElement) return;
  
  const val = activeElement.value;
  const cursor = activeElement.selectionStart || 0;
  
  const textBefore = val.substring(0, cursor);
  const textAfter = val.substring(cursor);
  
  const wordStart = textBefore.lastIndexOf(' ') + 1;
  let wordEnd = textAfter.indexOf(' ');
  if (wordEnd === -1) wordEnd = textAfter.length;
  wordEnd += cursor;
  
  activeElement.value = val.substring(0, wordStart) + newText + val.substring(wordEnd);
  activeElement.selectionStart = activeElement.selectionEnd = wordStart + newText.length;
  
  activeElement.dispatchEvent(new Event('input', { bubbles: true }));
  activeElement.focus();
  
  if (suggestionsBox) {
    suggestionsBox.style.display = 'none';
  }
}

document.addEventListener('focusin', (e) => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
    activeElement = target as HTMLInputElement | HTMLTextAreaElement;
  }
});

document.addEventListener('focusout', () => {
  activeElement = null;
  if (suggestionsBox) {
    suggestionsBox.style.display = 'none';
  }
});

document.addEventListener('input', (e) => {
  if (!activeElement) return;
  
  const val = activeElement.value;
  const cursor = activeElement.selectionStart || 0;
  
  const textBefore = val.substring(0, cursor);
  const textAfter = val.substring(cursor);
  
  const wordStart = textBefore.lastIndexOf(' ') + 1;
  let wordEnd = textAfter.indexOf(' ');
  if (wordEnd === -1) wordEnd = textAfter.length;
  wordEnd += cursor;
  
  const currentWord = val.substring(wordStart, wordEnd).trim();
  
  const rect = activeElement.getBoundingClientRect();
  updateSuggestions(currentWord, rect);
});
