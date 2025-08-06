import React, { useEffect, useRef, useState } from 'react';
import {
  EditorConfig,
  SupportedLanguage,
  TransliterationResult,
} from '@xinglish/shared';
import { TransliterationEditor } from '@xinglish/core';

export interface TransliterationEditorProps extends Omit<EditorConfig, 'onChange'> {
  /** Callback when transliteration result changes */
  onChange?: (result: TransliterationResult) => void;
  /** Initial text value */
  value?: string;
  /** Whether the editor is disabled */
  disabled?: boolean;
  /** CSS class name for the container */
  className?: string;
  /** Style object for the container */
  style?: React.CSSProperties;
}

/**
 * React component for transliteration editor
 */
export function TransliterationEditorComponent({
  language,
  layout,
  showSuggestions = false,
  placeholder,
  onChange,
  value = '',
  disabled = false,
  className,
  style,
}: TransliterationEditorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const editorRef = useRef<TransliterationEditor | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize editor
  useEffect(() => {
    if (containerRef.current && !editorRef.current) {
      const config: EditorConfig = {
        language,
        layout,
        showSuggestions,
        placeholder,
        className,
        onChange,
      };

      editorRef.current = new TransliterationEditor(containerRef.current, config);
      setIsInitialized(true);
    }
  }, [language, layout, showSuggestions, placeholder, className, onChange]);

  // Update editor when props change
  useEffect(() => {
    if (editorRef.current && isInitialized) {
      editorRef.current.updateConfig({
        language,
        layout,
        showSuggestions,
        placeholder,
        className,
      });
    }
  }, [language, layout, showSuggestions, placeholder, className, isInitialized]);

  // Update value
  useEffect(() => {
    if (editorRef.current && isInitialized) {
      const currentValue = editorRef.current.getText();
      if (currentValue !== value) {
        editorRef.current.setText(value);
      }
    }
  }, [value, isInitialized]);

  // Handle disabled state
  useEffect(() => {
    if (containerRef.current) {
      const input = containerRef.current.querySelector('textarea, input') as HTMLTextAreaElement | HTMLInputElement;
      if (input) {
        input.disabled = disabled;
      }
    }
  }, [disabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`xinglish-react-editor ${className || ''}`}
      style={style}
      data-testid="xinglish-react-editor"
    />
  );
}

/**
 * Hook for using transliteration functionality
 */
export function useTransliteration(language: SupportedLanguage) {
  const [result, setResult] = useState<TransliterationResult>({
    original: '',
    transliterated: '',
    mapping: [],
    confidence: 1.0,
  });

  const handleChange = (newResult: TransliterationResult) => {
    setResult(newResult);
  };

  return {
    result,
    handleChange,
  };
}
