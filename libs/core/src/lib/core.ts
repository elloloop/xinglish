import {
  LanguageConfig,
  PhoneticRule,
  PositionMapping,
  SupportedLanguage,
  TransliterationResult,
  TransliterationSuggestion,
  getLanguageConfig,
} from '@xinglish/shared';

/**
 * Core transliteration engine
 */
export class TransliterationEngine {
  private config: LanguageConfig;
  private rules: PhoneticRule[];
  private ruleMap: Map<string, PhoneticRule[]>;

  constructor(language: SupportedLanguage) {
    this.config = getLanguageConfig(language);
    this.rules = this.config.rules;
    this.ruleMap = this.buildRuleMap();
  }

  /**
   * Build a map of rules indexed by their first character for faster lookup
   */
  private buildRuleMap(): Map<string, PhoneticRule[]> {
    const map = new Map<string, PhoneticRule[]>();

    for (const rule of this.rules) {
      const firstChar = rule.pattern.charAt(0);
      if (!map.has(firstChar)) {
        map.set(firstChar, []);
      }
      map.get(firstChar)!.push(rule);
    }

    // Sort rules by priority (highest first) and length (longest first)
    for (const rules of map.values()) {
      rules.sort((a, b) => {
        const priorityDiff = (b.priority || 0) - (a.priority || 0);
        if (priorityDiff !== 0) return priorityDiff;
        return b.pattern.length - a.pattern.length;
      });
    }

    return map;
  }

  /**
   * Transliterate Latin text to target script
   */
  transliterate(text: string): TransliterationResult {
    if (!text.trim()) {
      return {
        original: text,
        transliterated: text,
        mapping: [],
        confidence: 1.0,
      };
    }

    const words = text.split(/\s+/);
    const result: string[] = [];
    const mapping: PositionMapping[] = [];
    let transliteratedPos = 0;
    let originalPos = 0;

    for (const word of words) {
      const wordResult = this.transliterateWord(word);
      result.push(wordResult.text);

      // Add mapping for this word
      mapping.push({
        originalStart: originalPos,
        originalEnd: originalPos + word.length,
        transliteratedStart: transliteratedPos,
        transliteratedEnd: transliteratedPos + wordResult.text.length,
      });

      transliteratedPos += wordResult.text.length;
      originalPos += word.length + 1; // +1 for space
    }

    return {
      original: text,
      transliterated: result.join(' '),
      mapping,
      confidence: this.calculateConfidence(text, result.join(' ')),
    };
  }

  /**
   * Transliterate a single word
   */
  private transliterateWord(word: string): {
    text: string;
    confidence: number;
  } {
    const result: string[] = [];
    let pos = 0;
    let confidence = 1.0;

    while (pos < word.length) {
      const match = this.findLongestMatch(word, pos);

      if (match) {
        result.push(match.target);
        pos += match.pattern.length;
        confidence *= match.priority ? match.priority / 10 : 0.8; // Normalize confidence
      } else {
        // No match found, keep the character as-is
        result.push(word[pos]);
        pos++;
        confidence *= 0.5; // Lower confidence for unmatched characters
      }
    }

    return {
      text: result.join(''),
      confidence: Math.min(confidence, 1.0),
    };
  }

  /**
   * Find the longest matching rule starting at the given position
   */
  private findLongestMatch(
    text: string,
    startPos: number
  ): PhoneticRule | null {
    const firstChar = text[startPos];
    const candidates = this.ruleMap.get(firstChar) || [];

    for (const rule of candidates) {
      const pattern = new RegExp(`^${rule.pattern}`, 'i');
      const match = text.slice(startPos).match(pattern);

      if (match) {
        return rule;
      }
    }

    return null;
  }

  /**
   * Calculate confidence score for the transliteration
   */
  private calculateConfidence(
    original: string,
    transliterated: string
  ): number {
    // Simple confidence calculation based on character coverage
    const originalLength = original.replace(/\s/g, '').length;
    const transliteratedLength = transliterated.replace(/\s/g, '').length;

    if (originalLength === 0) return 1.0;

    // Base confidence on how much of the original was transliterated
    const coverage = Math.min(transliteratedLength / originalLength, 1.0);

    // Boost confidence if the transliterated text contains target script characters
    const targetScriptChars = this.countTargetScriptChars(transliterated);
    const scriptRatio = targetScriptChars / transliteratedLength;

    return Math.min(coverage * 0.7 + scriptRatio * 0.3, 1.0);
  }

  /**
   * Count characters that belong to the target script
   */
  private countTargetScriptChars(text: string): number {
    let count = 0;
    for (const char of text) {
      const code = char.charCodeAt(0);
      if (
        code >= this.config.unicodeRange.start &&
        code <= this.config.unicodeRange.end
      ) {
        count++;
      }
    }
    return count;
  }

  /**
   * Get suggestions for ambiguous transliterations
   */
  getSuggestions(text: string): TransliterationSuggestion[] {
    const suggestions: TransliterationSuggestion[] = [];

    // Find words that might have multiple interpretations
    const words = text.split(/\s+/);

    for (const word of words) {
      const alternatives = this.findAlternatives(word);
      if (alternatives.length > 1) {
        suggestions.push(...alternatives);
      }
    }

    return suggestions.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Find alternative transliterations for a word
   */
  private findAlternatives(word: string): TransliterationSuggestion[] {
    const alternatives: TransliterationSuggestion[] = [];
    const seen = new Set<string>();

    // Try different rule combinations
    for (let i = 0; i < this.rules.length; i++) {
      for (let j = i + 1; j < this.rules.length; j++) {
        const rule1 = this.rules[i];
        const rule2 = this.rules[j];

        // Check if these rules could be combined
        if (rule1.pattern + rule2.pattern === word) {
          const combined = rule1.target + rule2.target;
          if (!seen.has(combined)) {
            seen.add(combined);
            alternatives.push({
              text: combined,
              confidence: 0.8,
              explanation: `Combination of ${rule1.pattern} + ${rule2.pattern}`,
            });
          }
        }
      }
    }

    return alternatives;
  }

  /**
   * Get the current language configuration
   */
  getLanguageConfig(): LanguageConfig {
    return this.config;
  }

  /**
   * Update the language configuration
   */
  setLanguage(language: SupportedLanguage): void {
    this.config = getLanguageConfig(language);
    this.rules = this.config.rules;
    this.ruleMap = this.buildRuleMap();
  }
}
