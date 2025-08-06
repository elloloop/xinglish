import { LanguageConfig, SupportedLanguage } from '../shared';
import { hindiConfig } from './hindi';

/**
 * Registry of supported language configurations
 * Only includes languages that have been fully implemented
 */
export const languageRegistry: Partial<Record<SupportedLanguage, LanguageConfig>> = {
  hindi: hindiConfig,
  // TODO: Add other language configurations as they are implemented
  // telugu: teluguConfig,
  // tamil: tamilConfig,
  // kannada: kannadaConfig,
  // malayalam: malayalamConfig,
  // bengali: bengaliConfig,
  // marathi: marathiConfig,
  // gujarati: gujaratiConfig,
};

/**
 * Get language configuration by code
 */
export function getLanguageConfig(code: SupportedLanguage): LanguageConfig {
  const config = languageRegistry[code];
  if (!config) {
    throw new Error(`Language configuration not found for: ${code}`);
  }
  return config;
}

/**
 * Get all implemented language codes
 */
export function getImplementedLanguages(): SupportedLanguage[] {
  return Object.keys(languageRegistry) as SupportedLanguage[];
}

/**
 * Get all supported language codes (including planned ones)
 */
export function getAllSupportedLanguages(): SupportedLanguage[] {
  return ['hindi', 'telugu', 'tamil', 'kannada', 'malayalam', 'bengali', 'marathi', 'gujarati'];
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(code: string): code is SupportedLanguage {
  return code in languageRegistry;
}
