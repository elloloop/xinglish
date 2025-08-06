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
  private inputElement: HTMLTextAreaElement | HTMLInputElement;
  private outputElement: HTMLElement;
  private suggestionsElement: HTMLElement | null = null;

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
    // Handle special keys if needed
    if (event.key === 'Tab') {
      event.preventDefault();
      // Insert tab character
      const target = event.target as HTMLTextAreaElement | HTMLInputElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const value = target.value;

      target.value = value.substring(0, start) + '\t' + value.substring(end);
      target.selectionStart = target.selectionEnd = start + 1;

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
   * Update suggestions display
   */
  private updateSuggestions(text: string): void {
    if (!this.suggestionsElement) return;

    const suggestions = this.engine.getSuggestions(text);

    if (suggestions.length === 0) {
      this.suggestionsElement.style.display = 'none';
      return;
    }

    this.suggestionsElement.style.display = 'block';
    this.suggestionsElement.innerHTML = '';

    const title = document.createElement('div');
    title.className = 'xinglish-suggestions-title';
    title.textContent = 'Suggestions:';
    this.suggestionsElement.appendChild(title);

    suggestions.slice(0, 5).forEach((suggestion) => {
      const item = document.createElement('div');
      item.className = 'xinglish-suggestion-item';
      item.textContent = suggestion.text;
      item.title = suggestion.explanation || '';

      item.addEventListener('click', () => {
        this.selectSuggestion(suggestion.text);
      });

      this.suggestionsElement!.appendChild(item);
    });
  }

  /**
   * Select a suggestion
   */
  private selectSuggestion(text: string): void {
    // For now, just append the suggestion to the input
    // In a more sophisticated implementation, this would replace the current word
    const currentValue = this.inputElement.value;
    this.inputElement.value = currentValue + ' ' + text;
    this.inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /**
   * Get the current transliteration result
   */
  getResult(): TransliterationResult {
    return this.engine.transliterate(this.inputElement.value);
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
