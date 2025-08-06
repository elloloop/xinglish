import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EditorConfig,
  SupportedLanguage,
  TransliterationResult,
} from '@elloloop/xinglish-shared';
import { TransliterationEditor } from '@elloloop/xinglish-core';

@Component({
  selector: 'xinglish-editor',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      #editorContainer
      class="xinglish-angular-editor"
      [class]="className"
      [style]="style"
      data-testid="xinglish-angular-editor"
    ></div>
  `,
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class TransliterationEditorComponent
  implements OnInit, OnDestroy, OnChanges
{
  @Input() language: SupportedLanguage = 'hindi';
  @Input() layout: 'side-by-side' | 'stacked' | 'output-only' = 'side-by-side';
  @Input() showSuggestions = false;
  @Input() placeholder = 'Type in English...';
  @Input() value = '';
  @Input() disabled = false;
  @Input() className = '';
  @Input() style = '';

  @Output() resultChange = new EventEmitter<TransliterationResult>();

  private editor: TransliterationEditor | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.initializeEditor();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.editor) {
      this.updateEditor(changes);
    }
  }

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
      this.editor = null;
    }
  }

  private initializeEditor(): void {
    const container = this.elementRef.nativeElement.querySelector(
      '[data-testid="xinglish-angular-editor"]'
    );
    if (container) {
      const config: EditorConfig = {
        language: this.language,
        layout: this.layout,
        showSuggestions: this.showSuggestions,
        placeholder: this.placeholder,
        className: this.className,
        onChange: (result: TransliterationResult) => {
          this.resultChange.emit(result);
        },
      };

      this.editor = new TransliterationEditor(container, config);

      if (this.value) {
        this.editor.setText(this.value);
      }
    }
  }

  private updateEditor(changes: SimpleChanges): void {
    if (!this.editor) return;

    const configUpdates: Partial<EditorConfig> = {};

    if (changes['language']) {
      configUpdates.language = this.language;
    }

    if (changes['layout']) {
      configUpdates.layout = this.layout;
    }

    if (changes['showSuggestions']) {
      configUpdates.showSuggestions = this.showSuggestions;
    }

    if (changes['placeholder']) {
      configUpdates.placeholder = this.placeholder;
    }

    if (changes['className']) {
      configUpdates.className = this.className;
    }

    if (Object.keys(configUpdates).length > 0) {
      this.editor.updateConfig(configUpdates);
    }

    if (changes['value'] && this.value !== this.editor.getText()) {
      this.editor.setText(this.value);
    }

    if (changes['disabled']) {
      // Handle disabled state through DOM manipulation
      const input =
        this.elementRef.nativeElement.querySelector('textarea, input');
      if (input) {
        input.disabled = this.disabled;
      }
    }
  }

  /**
   * Get the current transliteration result
   */
  getResult(): TransliterationResult | null {
    return this.editor?.getResult() || null;
  }

  /**
   * Set the input text
   */
  setText(text: string): void {
    this.editor?.setText(text);
  }

  /**
   * Get the input text
   */
  getText(): string {
    return this.editor?.getText() || '';
  }

  /**
   * Focus the input element
   */
  focus(): void {
    this.editor?.focus();
  }

  /**
   * Blur the input element
   */
  blur(): void {
    this.editor?.blur();
  }
}
