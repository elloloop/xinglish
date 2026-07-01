import {
  LanguageConfig,
  PhoneticRule,
  PositionMapping,
  SupportedLanguage,
  TransliterationResult,
  TransliterationSuggestion,
  getLanguageConfig,
} from '@elloloop/xinglish-shared';

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

  private transliterateWord(word: string): {
    text: string;
    confidence: number;
  } {
    const lowerWord = word.toLowerCase();
    if (this.config.dictionary && this.config.dictionary[lowerWord]) {
      return {
        text: this.config.dictionary[lowerWord],
        confidence: 1.0,
      };
    }

    const result: string[] = [];
    let pos = 0;
    let confidence = 1.0;
    let isHalfConsonant = false;

    while (pos < word.length) {
      const match = this.findLongestMatch(word, pos);

      if (match) {
        if (match.type === 'vowel') {
          if (isHalfConsonant) {
            // Remove the virama
            result.pop();
            // Add the dependent vowel sign (matra), if any
            if (match.alternateTarget) {
              result.push(match.alternateTarget);
            }
          } else {
            // Add the independent vowel
            result.push(match.target);
          }
          isHalfConsonant = false;
        } else if (match.type === 'consonant') {
          result.push(match.target);
          result.push(this.config.virama);
          isHalfConsonant = true;
        } else {
          // Special characters (anusvara, visarga, punctuation, numbers)
          result.push(match.target);
          // Assuming special chars don't act as consonants that combine
          isHalfConsonant = false;
        }

        pos += match.pattern.length;
        confidence *= match.priority ? match.priority / 10 : 0.8; // Normalize confidence
      } else {
        // No match found, keep the character as-is
        result.push(word[pos]);
        pos++;
        confidence *= 0.5; // Lower confidence for unmatched characters
        isHalfConsonant = false;
      }
    }

    // Handle word-final virama
    if (isHalfConsonant && !this.config.retainWordFinalVirama) {
      result.pop();
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
        if (rule.wordBoundary) {
          // Check if we are at the end of the word (or followed only by non-alphanumerics)
          const remainingText = text.slice(startPos + rule.pattern.length);
          if (remainingText && /^[a-zA-Z0-9]/.test(remainingText)) {
            continue; // Not a word boundary
          }
        }
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
  getSuggestions(word: string): TransliterationSuggestion[] {
    // We expect `word` to be a single word now, based on the editor update.
    // If multiple words are passed somehow, we'll just process it as one.
    const suggestions = this.findAlternatives(word);
    return suggestions.sort((a, b) => b.confidence - a.confidence);
  }

  /**
   * Find alternative transliterations for a word
   */
  private findAlternatives(word: string): TransliterationSuggestion[] {
    const alternatives: TransliterationSuggestion[] = [];
    const seen = new Set<string>();

    const addSuggestion = (text: string, conf: number, exp: string) => {
      if (!seen.has(text) && text.trim()) {
        seen.add(text);
        alternatives.push({ text, confidence: conf, explanation: exp });
      }
    };

    // 1. The standard transliteration
    const standard = this.transliterateWord(word).text;
    addSuggestion(standard, 1.0, 'Standard transliteration');

    // 2. The original english word
    addSuggestion(word, 0.95, 'Original Latin word');

    // 3. Toggle virama at the end
    if (standard.endsWith(this.config.virama)) {
      addSuggestion(standard.slice(0, -this.config.virama.length), 0.9, 'Without trailing halant/virama');
    } else {
      addSuggestion(standard + this.config.virama, 0.8, 'With trailing halant/virama');
    }

    // 4. Try phonetic variations
    const variations = [
      { from: /v/g, to: 'w' },
      { from: /w/g, to: 'v' },
      { from: /ee/g, to: 'i' },
      { from: /oo/g, to: 'u' },
      { from: /(?<!a)a(?!a)/g, to: 'aa' }, // single 'a' to 'aa'
      { from: /aa/g, to: 'a' },
    ];

    for (const v of variations) {
      if (word.match(v.from)) {
        const altWord = word.replace(v.from, v.to);
        const altTranslit = this.transliterateWord(altWord).text;
        addSuggestion(altTranslit, 0.85, `Alternative spelling (${altWord})`);
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
