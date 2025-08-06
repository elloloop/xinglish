import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from './core';
import { SupportedLanguage } from '@xinglish/shared';

describe('TransliterationEngine', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('hindi');
  });

  describe('constructor', () => {
    it('should initialize with Hindi language', () => {
      expect(engine).toBeInstanceOf(TransliterationEngine);
      expect(engine.getLanguageConfig().code).toBe('hindi');
    });

    it('should throw error for unsupported language', () => {
      expect(() => {
        new TransliterationEngine('unsupported' as SupportedLanguage);
      }).toThrow('Language configuration not found for: unsupported');
    });
  });

  describe('transliterate', () => {
    it('should transliterate basic Hindi words', () => {
      const result = engine.transliterate('namaste');
      expect(result.transliterated).toContain('नमस्ते');
      expect(result.confidence).toBeGreaterThan(0.5);
    });

    it('should transliterate with spaces', () => {
      const result = engine.transliterate('namaste kaise ho');
      expect(result.transliterated).toContain('नमस्ते');
      expect(result.transliterated).toContain('कैसे');
      expect(result.transliterated).toContain('हो');
    });

    it('should handle empty input', () => {
      const result = engine.transliterate('');
      expect(result.original).toBe('');
      expect(result.transliterated).toBe('');
      expect(result.confidence).toBe(1.0);
    });

    it('should handle whitespace-only input', () => {
      const result = engine.transliterate('   ');
      expect(result.original).toBe('   ');
      expect(result.transliterated).toBe('   ');
      expect(result.confidence).toBe(1.0);
    });

    it('should preserve non-transliteratable characters', () => {
      const result = engine.transliterate('hello123!');
      expect(result.transliterated).toContain('hello');
      expect(result.transliterated).toContain('123');
      expect(result.transliterated).toContain('!');
    });

    it('should create position mappings', () => {
      const result = engine.transliterate('namaste');
      expect(result.mapping).toHaveLength(1);
      expect(result.mapping[0].originalStart).toBe(0);
      expect(result.mapping[0].originalEnd).toBe(7);
    });
  });

  describe('getSuggestions', () => {
    it('should return suggestions for ambiguous words', () => {
      const suggestions = engine.getSuggestions('namaste');
      expect(Array.isArray(suggestions)).toBe(true);
    });

    it('should return empty array for simple words', () => {
      const suggestions = engine.getSuggestions('a');
      expect(suggestions).toHaveLength(0);
    });
  });

  describe('setLanguage', () => {
    it('should change language configuration', () => {
      engine.setLanguage('hindi');
      expect(engine.getLanguageConfig().code).toBe('hindi');
    });
  });

  describe('getLanguageConfig', () => {
    it('should return current language configuration', () => {
      const config = engine.getLanguageConfig();
      expect(config.code).toBe('hindi');
      expect(config.name).toBe('Hindi');
      expect(config.scriptName).toBe('Devanagari');
      expect(Array.isArray(config.rules)).toBe(true);
    });
  });

  describe('confidence calculation', () => {
    it('should return high confidence for well-transliterated text', () => {
      const result = engine.transliterate('namaste');
      expect(result.confidence).toBeGreaterThan(0.7);
    });

    it('should return lower confidence for mixed text', () => {
      const result = engine.transliterate('namaste123xyz');
      expect(result.confidence).toBeLessThan(0.9);
    });
  });
});
