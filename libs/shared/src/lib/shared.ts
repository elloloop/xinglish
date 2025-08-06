/**
 * Supported Indian languages
 */
export type SupportedLanguage =
  | 'hindi'
  | 'telugu'
  | 'tamil'
  | 'kannada'
  | 'malayalam'
  | 'bengali'
  | 'marathi'
  | 'gujarati';

/**
 * Editor layout modes
 */
export type EditorLayout = 'side-by-side' | 'stacked' | 'output-only';

/**
 * Phonetic mapping rule
 */
export interface PhoneticRule {
  /** Latin input pattern (regex) */
  pattern: string;
  /** Target script character(s) */
  target: string;
  /** Priority for longest match (higher = more specific) */
  priority?: number;
  /** Whether this rule should be applied at word boundaries */
  wordBoundary?: boolean;
}

/**
 * Language configuration
 */
export interface LanguageConfig {
  /** Language code */
  code: SupportedLanguage;
  /** Language name */
  name: string;
  /** Native script name */
  scriptName: string;
  /** Phonetic mapping rules */
  rules: PhoneticRule[];
  /** Unicode range for the script */
  unicodeRange: {
    start: number;
    end: number;
  };
}

/**
 * Transliteration result
 */
export interface TransliterationResult {
  /** Original Latin text */
  original: string;
  /** Transliterated text in target script */
  transliterated: string;
  /** Mapping of positions between original and transliterated */
  mapping: PositionMapping[];
  /** Confidence score (0-1) */
  confidence: number;
}

/**
 * Position mapping between original and transliterated text
 */
export interface PositionMapping {
  /** Start position in original text */
  originalStart: number;
  /** End position in original text */
  originalEnd: number;
  /** Start position in transliterated text */
  transliteratedStart: number;
  /** End position in transliterated text */
  transliteratedEnd: number;
}

/**
 * Editor configuration
 */
export interface EditorConfig {
  /** Target language */
  language: SupportedLanguage;
  /** Layout mode */
  layout: EditorLayout;
  /** Whether to show suggestions */
  showSuggestions?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** CSS class names */
  className?: string;
  /** Callback when text changes */
  onChange?: (result: TransliterationResult) => void;
}

/**
 * Suggestion for ambiguous transliterations
 */
export interface TransliterationSuggestion {
  /** Suggested transliteration */
  text: string;
  /** Confidence score */
  confidence: number;
  /** Explanation for the suggestion */
  explanation?: string;
}
