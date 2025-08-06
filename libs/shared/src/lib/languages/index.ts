import { LanguageConfig, SupportedLanguage } from '../shared';
import { hindiConfig } from './hindi';

/**
 * Registry of all supported language configurations
 */
export const languageRegistry: Record<SupportedLanguage, LanguageConfig> = {
  hindi: hindiConfig,
  // TODO: Add other language configurations
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
 * Get all supported language codes
 */
export function getSupportedLanguages(): SupportedLanguage[] {
  return Object.keys(languageRegistry) as SupportedLanguage[];
}

/**
 * Check if a language is supported
 */
export function isLanguageSupported(code: string): code is SupportedLanguage {
  return code in languageRegistry;
}
