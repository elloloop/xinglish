# Issue #4: Multi-Language Architecture Implementation

## Problem

The current system is hardcoded for Hindi only. We need a flexible architecture that can support multiple Indian languages with different scripts and phonetic rules.

## Background

Indian languages have diverse characteristics:

- **Indo-Aryan languages**: Hindi, Bengali, Marathi, Gujarati (use Devanagari-like scripts)
- **Dravidian languages**: Telugu, Tamil, Kannada, Malayalam (use different script families)
- **Different phonetic rules**: Each language has unique consonant-vowel combinations

## Architecture Requirements

### 1. Language Registry System

```typescript
interface LanguageRegistry {
  register(language: LanguageConfig): void;
  getLanguage(code: string): LanguageConfig | undefined;
  getAllLanguages(): LanguageConfig[];
  isSupported(code: string): boolean;
}

class DefaultLanguageRegistry implements LanguageRegistry {
  private languages = new Map<string, LanguageConfig>();

  register(language: LanguageConfig): void {
    this.languages.set(language.code, language);
  }

  getLanguage(code: string): LanguageConfig | undefined {
    return this.languages.get(code);
  }

  getAllLanguages(): LanguageConfig[] {
    return Array.from(this.languages.values());
  }

  isSupported(code: string): boolean {
    return this.languages.has(code);
  }
}
```

### 2. Language-Specific Transliteration Strategies

```typescript
interface TransliterationStrategy {
  transliterateWord(word: string, config: LanguageConfig): string;
  analyzeSyllables(word: string, config: LanguageConfig): Syllable[];
  getConfidence(word: string, result: string, config: LanguageConfig): number;
}

class HindiTransliterationStrategy implements TransliterationStrategy {
  // Hindi-specific implementation
}

class TeluguTransliterationStrategy implements TransliterationStrategy {
  // Telugu-specific implementation
}
```

### 3. Strategy Factory

```typescript
class TransliterationStrategyFactory {
  static createStrategy(languageCode: string): TransliterationStrategy {
    switch (languageCode) {
      case 'hindi':
        return new HindiTransliterationStrategy();
      case 'telugu':
        return new TeluguTransliterationStrategy();
      default:
        throw new Error(`Unsupported language: ${languageCode}`);
    }
  }
}
```

### 4. Updated Core Engine

```typescript
export class TransliterationEngine {
  private config: LanguageConfig;
  private strategy: TransliterationStrategy;

  constructor(languageCode: string) {
    this.config = this.getLanguageConfig(languageCode);
    this.strategy = TransliterationStrategyFactory.createStrategy(languageCode);
  }

  transliterate(text: string): TransliterationResult {
    // Use strategy-specific implementation
    return this.strategy.transliterate(text, this.config);
  }
}
```

## Implementation Phases

### Phase 1: Core Architecture

- [ ] Create `LanguageRegistry` interface and implementation
- [ ] Create `TransliterationStrategy` interface
- [ ] Implement strategy factory pattern
- [ ] Refactor core engine to use strategies

### Phase 2: Hindi Strategy

- [ ] Implement `HindiTransliterationStrategy`
- [ ] Migrate existing Hindi logic to new strategy
- [ ] Ensure all Hindi tests pass

### Phase 3: Telugu Strategy

- [ ] Implement `TeluguTransliterationStrategy`
- [ ] Add Telugu language configuration
- [ ] Create Telugu-specific test suite

### Phase 4: Integration

- [ ] Update playground app to support language switching
- [ ] Add language selection UI
- [ ] Test multi-language scenarios

## Benefits

1. **Extensibility**: Easy to add new languages
2. **Maintainability**: Language-specific logic is isolated
3. **Testability**: Each strategy can be tested independently
4. **Performance**: Language-specific optimizations possible
5. **Consistency**: Common interface across all languages

## Dependencies

- Issue #1 (Transliteration Algorithm Overhaul)
- Issue #2 (Hindi Syllable Analysis Implementation)
- Issue #3 (Telugu Language Support Implementation)

## Estimated Effort

- **Phase 1**: 2-3 days
- **Phase 2**: 1-2 days
- **Phase 3**: 2-3 days
- **Phase 4**: 1-2 days
- **Total**: 6-10 days

## Acceptance Criteria

- [ ] Language registry system is functional
- [ ] Strategy pattern is implemented and working
- [ ] Hindi transliteration works exactly as before
- [ ] Telugu transliteration works correctly
- [ ] Language switching works seamlessly
- [ ] Performance is maintained or improved
- [ ] All existing tests pass
- [ ] New multi-language tests pass
