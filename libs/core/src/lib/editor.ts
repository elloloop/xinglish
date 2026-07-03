import {
  EditorConfig,
  EditorLayout,
  SupportedLanguage,
  TransliterationResult,
} from '@elloloop/xinglish-shared';
import { TransliterationEngine } from './core';

/**
 * Vanilla JS editor component for transliteration
 */
export class TransliterationEditor {
  private engine: TransliterationEngine;
  private config: EditorConfig;
  private container: HTMLElement;
  private inputElement!: HTMLTextAreaElement | HTMLInputElement;
  private outputElement!: HTMLElement;
  private suggestionsElement: HTMLElement | null = null;
  private inlineState = {
    active: false,
    englishWord: '',
    startPos: 0,
    nativeWordLength: 0,
    suggestions: [] as string[],
    selectedIndex: 0
  };

  constructor(container: HTMLElement, config: EditorConfig) {
    this.container = container;
    this.config = config;
    this.engine = new TransliterationEngine(config.language);

    this.setupEditor();
    this.render();
  }

  /**
   * Setup the editor DOM structure
   */
  private setupEditor(): void {
    this.container.className = `xinglish-editor ${this.config.className || ''}`;

    // Create input element
    this.inputElement = document.createElement('textarea');
    this.inputElement.className = 'xinglish-input';
    this.inputElement.placeholder =
      this.config.placeholder || 'Type in English...';
    this.inputElement.setAttribute('data-testid', 'xinglish-input');

    // Create output element
    this.outputElement = document.createElement('div');
    this.outputElement.className = 'xinglish-output';
    this.outputElement.setAttribute('data-testid', 'xinglish-output');

    // Create suggestions element if enabled
    if (this.config.showSuggestions) {
      this.suggestionsElement = document.createElement('div');
      this.suggestionsElement.className = 'xinglish-suggestions';
      this.suggestionsElement.setAttribute(
        'data-testid',
        'xinglish-suggestions'
      );
    }

    // Add event listeners
    this.inputElement.addEventListener('input', this.handleInput.bind(this));
    this.inputElement.addEventListener(
      'keydown',
      this.handleKeydown.bind(this)
    );
    this.inputElement.addEventListener('click', () => {
      this.closeInlineSuggestions();
    });
  }

  /**
   * Render the editor based on layout configuration
   */
  private render(): void {
    this.container.innerHTML = '';

    switch (this.config.layout) {
      case 'side-by-side':
        this.renderSideBySide();
        break;
      case 'stacked':
        this.renderStacked();
        break;
      case 'output-only':
        this.renderOutputOnly();
        break;
      case 'inline':
        this.renderInline();
        break;
    }
  }

  /**
   * Render side-by-side layout
   */
  private renderSideBySide(): void {
    const wrapper = document.createElement('div');
    wrapper.className = 'xinglish-side-by-side';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'xinglish-input-container';
    inputContainer.appendChild(this.inputElement);

    const outputContainer = document.createElement('div');
    outputContainer.className = 'xinglish-output-container';
    outputContainer.appendChild(this.outputElement);

    wrapper.appendChild(inputContainer);
    wrapper.appendChild(outputContainer);

    if (this.suggestionsElement) {
      wrapper.appendChild(this.suggestionsElement);
    }

    this.container.appendChild(wrapper);
  }

  /**
   * Render stacked layout
   */
  private renderStacked(): void {
    const wrapper = document.createElement('div');
    wrapper.className = 'xinglish-stacked';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'xinglish-input-container';
    inputContainer.appendChild(this.inputElement);

    const outputContainer = document.createElement('div');
    outputContainer.className = 'xinglish-output-container';
    outputContainer.appendChild(this.outputElement);

    wrapper.appendChild(inputContainer);
    wrapper.appendChild(outputContainer);

    if (this.suggestionsElement) {
      wrapper.appendChild(this.suggestionsElement);
    }

    this.container.appendChild(wrapper);
  }

  /**
   * Render output-only layout
   */
  private renderOutputOnly(): void {
    const wrapper = document.createElement('div');
    wrapper.className = 'xinglish-output-only';

    const outputContainer = document.createElement('div');
    outputContainer.className = 'xinglish-output-container';
    outputContainer.appendChild(this.outputElement);

    wrapper.appendChild(outputContainer);

    if (this.suggestionsElement) {
      wrapper.appendChild(this.suggestionsElement);
    }

    this.container.appendChild(wrapper);
  }

  /**
   * Render inline layout
   */
  private renderInline(): void {
    const wrapper = document.createElement('div');
    wrapper.className = 'xinglish-inline';

    const inputContainer = document.createElement('div');
    inputContainer.className = 'xinglish-input-container';
    inputContainer.appendChild(this.inputElement);

    wrapper.appendChild(inputContainer);

    if (this.suggestionsElement) {
      wrapper.appendChild(this.suggestionsElement);
    }

    this.container.appendChild(wrapper);
  }

  /**
   * Handle input changes
   */
  private handleInput(event: Event): void {
    const target = event.target as HTMLTextAreaElement | HTMLInputElement;
    const text = target.value;

    const result = this.engine.transliterate(text);
    this.updateOutput(result);

    if (this.config.onChange) {
      this.config.onChange(result);
    }
  }

  /**
   * Handle keydown events
   */
  private handleKeydown(event: KeyboardEvent): void {
    const target = event.target as HTMLTextAreaElement | HTMLInputElement;
    const start = target.selectionStart;
    const end = target.selectionEnd;
    const value = target.value;

    if (this.config.layout === 'inline') {
      const isPrintableKey = event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
      
      if (this.inlineState.active) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          this.inlineState.selectedIndex = Math.min(this.inlineState.selectedIndex + 1, this.inlineState.suggestions.length - 1);
          this.renderInlineSuggestions();
          return;
        }
        if (event.key === 'ArrowUp') {
          event.preventDefault();
          this.inlineState.selectedIndex = Math.max(this.inlineState.selectedIndex - 1, 0);
          this.renderInlineSuggestions();
          return;
        }
        if (event.key === 'Enter') {
          if (this.inlineState.suggestions.length > 0) {
            event.preventDefault();
            this.commitInlineSuggestion();
          }
          this.closeInlineSuggestions();
          return;
        }
        if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
          this.closeInlineSuggestions();
        }
      }

      if (isPrintableKey && event.key !== ' ') {
        if (!this.inlineState.active) {
          this.inlineState.active = true;
          this.inlineState.englishWord = event.key;
          this.inlineState.startPos = start ?? 0;
          this.inlineState.selectedIndex = 0;
          this.updateInlineSuggestionsUI();
          
          event.preventDefault();
          const trans = this.inlineState.suggestions[0] || this.engine.transliterate(this.inlineState.englishWord).transliterated;
          this.inlineState.nativeWordLength = trans.length;
          target.value = value.substring(0, this.inlineState.startPos) + trans + value.substring(end ?? start ?? 0);
          target.selectionStart = target.selectionEnd = this.inlineState.startPos + trans.length;
          target.dispatchEvent(new Event('input', { bubbles: true }));
        } else {
          this.inlineState.englishWord += event.key;
          this.updateInlineSuggestionsUI();
          
          event.preventDefault();
          const trans = this.inlineState.suggestions[0] || this.engine.transliterate(this.inlineState.englishWord).transliterated;
          target.value = value.substring(0, this.inlineState.startPos) + trans + value.substring(this.inlineState.startPos + this.inlineState.nativeWordLength);
          this.inlineState.nativeWordLength = trans.length;
          
          target.selectionStart = target.selectionEnd = this.inlineState.startPos + trans.length;
          target.dispatchEvent(new Event('input', { bubbles: true }));
        }
        return;
      }

      if (event.key === 'Backspace' && this.inlineState.active) {
        if (this.inlineState.englishWord.length > 0) {
          event.preventDefault();
          this.inlineState.englishWord = this.inlineState.englishWord.slice(0, -1);
          
          if (this.inlineState.englishWord.length === 0) {
            target.value = value.substring(0, this.inlineState.startPos) + value.substring(this.inlineState.startPos + this.inlineState.nativeWordLength);
            this.inlineState.nativeWordLength = 0;
            this.closeInlineSuggestions();
            target.selectionStart = target.selectionEnd = this.inlineState.startPos;
          } else {
            this.updateInlineSuggestionsUI();
            const trans = this.inlineState.suggestions[0] || this.engine.transliterate(this.inlineState.englishWord).transliterated;
            target.value = value.substring(0, this.inlineState.startPos) + trans + value.substring(this.inlineState.startPos + this.inlineState.nativeWordLength);
            this.inlineState.nativeWordLength = trans.length;
            target.selectionStart = target.selectionEnd = this.inlineState.startPos + trans.length;
          }
          target.dispatchEvent(new Event('input', { bubbles: true }));
          return;
        }
      }

      if (event.key === ' ') {
        this.closeInlineSuggestions();
      }
    }

    // Handle special keys if needed
    if (event.key === 'Tab') {
      event.preventDefault();
      // Insert tab character
      if (start !== null && end !== null) {
        target.value = value.substring(0, start) + '\t' + value.substring(end);
        target.selectionStart = target.selectionEnd = start + 1;
      }

      // Trigger input event
      target.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  /**
   * Update the output display
   */
  private updateOutput(result: TransliterationResult): void {
    this.outputElement.textContent = result.transliterated;

    // Update suggestions if enabled
    if (this.suggestionsElement && this.config.showSuggestions) {
      this.updateSuggestions(result.original);
    }
  }

  /**
   * Update suggestions display based on cursor position
   */
  private updateSuggestions(originalText: string): void {
    if (!this.suggestionsElement) return;

    // Get the word under cursor
    const cursorPosition = this.inputElement.selectionStart || 0;
    const textBeforeCursor = originalText.substring(0, cursorPosition);
    const textAfterCursor = originalText.substring(cursorPosition);
    
    const wordStart = textBeforeCursor.lastIndexOf(' ') + 1;
    let wordEnd = textAfterCursor.indexOf(' ');
    if (wordEnd === -1) wordEnd = textAfterCursor.length;
    wordEnd += cursorPosition;

    const currentWord = originalText.substring(wordStart, wordEnd).trim();

    if (!currentWord) {
      this.suggestionsElement.style.display = 'none';
      return;
    }

    const suggestions = this.engine.getSuggestions(currentWord);

    if (suggestions.length === 0) {
      this.suggestionsElement.style.display = 'none';
      return;
    }

    this.suggestionsElement.style.display = 'block';
    this.suggestionsElement.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'xinglish-suggestions-title';
    title.textContent = 'Options:';
    this.suggestionsElement.appendChild(title);

    suggestions.slice(0, 5).forEach((suggestion) => {
      const item = document.createElement('div');
      item.className = 'xinglish-suggestion-item';
      item.textContent = suggestion.text;
      item.title = suggestion.explanation || '';

      item.addEventListener('click', () => {
        this.selectSuggestion(suggestion.text, wordStart, wordEnd);
      });

      this.suggestionsElement!.appendChild(item);
    });
  }

  /**
   * Select a suggestion
   */
  private selectSuggestion(text: string, wordStart: number, wordEnd: number): void {
    // Replace the current word with the suggestion
    const currentValue = this.inputElement.value;
    const newValue = currentValue.substring(0, wordStart) + text + currentValue.substring(wordEnd);
    
    this.inputElement.value = newValue;
    this.inputElement.selectionStart = this.inputElement.selectionEnd = wordStart + text.length;
    
    // Focus back to input
    this.inputElement.focus();
    
    // Trigger input event
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    if (this.config.layout === 'inline') {
      this.closeInlineSuggestions();
    }
  }

  /**
   * Helpers for inline mode suggestions
   */
  private closeInlineSuggestions(): void {
    this.inlineState.active = false;
    this.inlineState.englishWord = '';
    this.inlineState.suggestions = [];
    if (this.suggestionsElement) {
      this.suggestionsElement.style.display = 'none';
    }
  }

  private commitInlineSuggestion(): void {
    const text = this.inlineState.suggestions[this.inlineState.selectedIndex];
    if (text) {
      const currentValue = this.inputElement.value;
      const newValue = currentValue.substring(0, this.inlineState.startPos) + text + currentValue.substring(this.inlineState.startPos + this.inlineState.nativeWordLength);
      
      this.inputElement.value = newValue;
      this.inputElement.selectionStart = this.inputElement.selectionEnd = this.inlineState.startPos + text.length;
      this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
    }
  }

  private updateInlineSuggestionsUI(): void {
    if (!this.suggestionsElement || !this.config.showSuggestions) return;
    const suggestions = this.engine.getSuggestions(this.inlineState.englishWord);
    this.inlineState.suggestions = suggestions.map(s => s.text);
    this.inlineState.selectedIndex = 0;
    this.renderInlineSuggestions();
  }

  private renderInlineSuggestions(): void {
    if (!this.suggestionsElement) return;
    if (this.inlineState.suggestions.length === 0) {
      this.suggestionsElement.style.display = 'none';
      return;
    }

    this.suggestionsElement.style.display = 'block';
    // Position absolutely below the cursor
    // (A simple approach for now, usually would require getCaretCoordinates)
    this.suggestionsElement.style.top = '40px'; 
    this.suggestionsElement.style.left = '12px';

    this.suggestionsElement.innerHTML = '';
    const title = document.createElement('div');
    title.className = 'xinglish-suggestions-title';
    title.textContent = 'Suggestions';
    this.suggestionsElement.appendChild(title);

    this.inlineState.suggestions.slice(0, 5).forEach((text, i) => {
      const item = document.createElement('div');
      item.className = 'xinglish-suggestion-item' + (i === this.inlineState.selectedIndex ? ' selected' : '');
      
      // Number the suggestions 1 to 5
      const numberSpan = document.createElement('span');
      numberSpan.style.color = '#999';
      numberSpan.style.marginRight = '8px';
      numberSpan.style.fontSize = '12px';
      numberSpan.textContent = String(i + 1);
      
      const textSpan = document.createElement('span');
      textSpan.textContent = text;
      
      item.appendChild(numberSpan);
      item.appendChild(textSpan);

      item.addEventListener('click', () => {
        this.inlineState.selectedIndex = i;
        this.commitInlineSuggestion();
        this.closeInlineSuggestions();
      });

      this.suggestionsElement!.appendChild(item);
    });
  }

  /**
   * Get the current transliteration result
   */
  getResult(): TransliterationResult {
    return this.engine.transliterate(this.inputElement.value);
  }

  /**
   * Add custom word to dictionary and refresh
   */
  addDictionaryWord(englishWord: string, nativeWord: string): void {
    this.engine.addDictionaryWord(englishWord, nativeWord);
    // trigger a re-transliteration
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /**
   * Set the input text
   */
  setText(text: string): void {
    this.inputElement.value = text;
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /**
   * Get the input text
   */
  getText(): string {
    return this.inputElement.value;
  }

  /**
   * Update the editor configuration
   */
  updateConfig(config: Partial<EditorConfig>): void {
    this.config = { ...this.config, ...config };

    if (config.language) {
      this.engine.setLanguage(config.language);
    }

    if (config.layout) {
      this.render();
    }

    if (config.placeholder) {
      this.inputElement.placeholder = config.placeholder;
    }
  }

  /**
   * Focus the input element
   */
  focus(): void {
    this.inputElement.focus();
  }

  /**
   * Blur the input element
   */
  blur(): void {
    this.inputElement.blur();
  }

  /**
   * Destroy the editor and clean up
   */
  destroy(): void {
    this.container.innerHTML = '';
  }
}
