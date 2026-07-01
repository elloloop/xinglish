import { LanguageConfig } from '../shared';
import { teluguVowels } from './telugu/vowels';
import { teluguConsonants } from './telugu/consonants';
import { teluguSpecial } from './telugu/special';
import { teluguDictionary } from './telugu/dictionary';

/**
 * Telugu language configuration
 */
export const teluguConfig: LanguageConfig = {
  code: 'telugu',
  name: 'Telugu',
  scriptName: 'Telugu',
  virama: '్',
  retainWordFinalVirama: true, // Telugu typically keeps the virama at the end of words lacking vowels
  dictionary: teluguDictionary,
  unicodeRange: {
    start: 0x0c00,
    end: 0x0c7f,
  },
  rules: [
    ...teluguVowels,
    ...teluguConsonants,
    ...teluguSpecial,
  ]
};
