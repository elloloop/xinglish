import { LanguageConfig } from '../shared';
import { hindiDictionary } from './hindi/dictionary';
import { hindiVowels } from './hindi/vowels';
import { hindiConsonants } from './hindi/consonants';
import { hindiSpecial } from './hindi/special';

/**
 * Hindi language configuration with Devanagari script
 */
export const hindiConfig: LanguageConfig = {
  code: 'hindi',
  name: 'Hindi',
  scriptName: 'Devanagari',
  virama: '्',
  retainWordFinalVirama: false,
  dictionary: hindiDictionary,
  rules: [...hindiVowels, ...hindiConsonants, ...hindiSpecial],
  unicodeRange: {
    start: 0x0900,
    end: 0x097f,
  },
  rules: [
    // Vowels (स्वर)
    { pattern: 'a', target: 'अ', alternateTarget: '', type: 'vowel', priority: 1 },
    { pattern: 'aa', target: 'आ', alternateTarget: 'ा', type: 'vowel', priority: 2 },
    { pattern: 'A', target: 'आ', alternateTarget: 'ा', type: 'vowel', priority: 2 },
    { pattern: 'i', target: 'इ', alternateTarget: 'ि', type: 'vowel', priority: 1 },
    { pattern: 'ii', target: 'ई', alternateTarget: 'ी', type: 'vowel', priority: 2 },
    { pattern: 'I', target: 'ई', alternateTarget: 'ी', type: 'vowel', priority: 2 },
    { pattern: 'u', target: 'उ', alternateTarget: 'ु', type: 'vowel', priority: 1 },
    { pattern: 'uu', target: 'ऊ', alternateTarget: 'ू', type: 'vowel', priority: 2 },
    { pattern: 'U', target: 'ऊ', alternateTarget: 'ू', type: 'vowel', priority: 2 },
    { pattern: 'e', target: 'ए', alternateTarget: 'े', type: 'vowel', priority: 1 },
    { pattern: 'ai', target: 'ऐ', alternateTarget: 'ै', type: 'vowel', priority: 2 },
    { pattern: 'o', target: 'ओ', alternateTarget: 'ो', type: 'vowel', priority: 1 },
    { pattern: 'au', target: 'औ', alternateTarget: 'ौ', type: 'vowel', priority: 2 },
    { pattern: 'R', target: 'ऋ', alternateTarget: 'ृ', type: 'vowel', priority: 1 },
    { pattern: 'RR', target: 'ॠ', alternateTarget: 'ॄ', type: 'vowel', priority: 2 },

    // Consonants (व्यंजन)
    { pattern: 'k', target: 'क', type: 'consonant', priority: 1 },
    { pattern: 'kh', target: 'ख', type: 'consonant', priority: 2 },
    { pattern: 'g', target: 'ग', type: 'consonant', priority: 1 },
    { pattern: 'gh', target: 'घ', type: 'consonant', priority: 2 },
    { pattern: 'ng', target: 'ङ', type: 'consonant', priority: 2 },
    { pattern: 'ch', target: 'च', type: 'consonant', priority: 2 },
    { pattern: 'chh', target: 'छ', type: 'consonant', priority: 3 },
    { pattern: 'j', target: 'ज', type: 'consonant', priority: 1 },
    { pattern: 'jh', target: 'झ', type: 'consonant', priority: 2 },
    { pattern: 'ny', target: 'ञ', type: 'consonant', priority: 2 },
    { pattern: 'T', target: 'ट', type: 'consonant', priority: 1 },
    { pattern: 'Th', target: 'ठ', type: 'consonant', priority: 2 },
    { pattern: 'D', target: 'ड', type: 'consonant', priority: 1 },
    { pattern: 'Dh', target: 'ढ', type: 'consonant', priority: 2 },
    { pattern: 'N', target: 'ण', type: 'consonant', priority: 1 },
    { pattern: 't', target: 'त', type: 'consonant', priority: 1 },
    { pattern: 'th', target: 'थ', type: 'consonant', priority: 2 },
    { pattern: 'd', target: 'द', type: 'consonant', priority: 1 },
    { pattern: 'dh', target: 'ध', type: 'consonant', priority: 2 },
    { pattern: 'n', target: 'न', type: 'consonant', priority: 1 },
    { pattern: 'p', target: 'प', type: 'consonant', priority: 1 },
    { pattern: 'ph', target: 'फ', type: 'consonant', priority: 2 },
    { pattern: 'f', target: 'फ़', type: 'consonant', priority: 1 },
    { pattern: 'b', target: 'ब', type: 'consonant', priority: 1 },
    { pattern: 'bh', target: 'भ', type: 'consonant', priority: 2 },
    { pattern: 'm', target: 'म', type: 'consonant', priority: 1 },
    { pattern: 'y', target: 'य', type: 'consonant', priority: 1 },
    { pattern: 'r', target: 'र', type: 'consonant', priority: 1 },
    { pattern: 'l', target: 'ल', type: 'consonant', priority: 1 },
    { pattern: 'v', target: 'व', type: 'consonant', priority: 1 },
    { pattern: 'w', target: 'व', type: 'consonant', priority: 1 },
    { pattern: 'sh', target: 'श', type: 'consonant', priority: 2 },
    { pattern: 'Sh', target: 'ष', type: 'consonant', priority: 2 },
    { pattern: 's', target: 'स', type: 'consonant', priority: 1 },
    { pattern: 'h', target: 'ह', type: 'consonant', priority: 1 },
    { pattern: 'L', target: 'ळ', type: 'consonant', priority: 1 },
    { pattern: 'ksh', target: 'क्ष', type: 'consonant', priority: 3 },
    { pattern: 'tr', target: 'त्र', type: 'consonant', priority: 2 },
    { pattern: 'gy', target: 'ज्ञ', type: 'consonant', priority: 2 },
    { pattern: 'z', target: 'ज़', type: 'consonant', priority: 1 },

    // Special characters
    { pattern: 'M', target: 'ं', type: 'special', priority: 1 }, // Anusvara
    { pattern: 'H', target: 'ः', type: 'special', priority: 1 }, // Visarga

    // Numbers
    { pattern: '0', target: '०', type: 'special', priority: 1 },
    { pattern: '1', target: '१', type: 'special', priority: 1 },
    { pattern: '2', target: '२', type: 'special', priority: 1 },
    { pattern: '3', target: '३', type: 'special', priority: 1 },
    { pattern: '4', target: '४', type: 'special', priority: 1 },
    { pattern: '5', target: '५', type: 'special', priority: 1 },
    { pattern: '6', target: '६', type: 'special', priority: 1 },
    { pattern: '7', target: '७', type: 'special', priority: 1 },
    { pattern: '8', target: '८', type: 'special', priority: 1 },
    { pattern: '9', target: '९', type: 'special', priority: 1 },

    // Punctuation
    { pattern: '\\.', target: '।', type: 'special', priority: 1 },
    { pattern: '\\|', target: '॥', type: 'special', priority: 1 },
  ],
};
