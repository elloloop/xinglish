import { LanguageConfig } from '../shared';

/**
 * Hindi language configuration with Devanagari script
 */
export const hindiConfig: LanguageConfig = {
  code: 'hindi',
  name: 'Hindi',
  scriptName: 'Devanagari',
  unicodeRange: {
    start: 0x0900, // Devanagari block start
    end: 0x097f, // Devanagari block end
  },
  rules: [
    // Vowels (स्वर)
    { pattern: 'a', target: 'अ', priority: 1 },
    { pattern: 'aa', target: 'आ', priority: 2 },
    { pattern: 'A', target: 'आ', priority: 2 },
    { pattern: 'i', target: 'इ', priority: 1 },
    { pattern: 'ii', target: 'ई', priority: 2 },
    { pattern: 'I', target: 'ई', priority: 2 },
    { pattern: 'u', target: 'उ', priority: 1 },
    { pattern: 'uu', target: 'ऊ', priority: 2 },
    { pattern: 'U', target: 'ऊ', priority: 2 },
    { pattern: 'e', target: 'ए', priority: 1 },
    { pattern: 'ai', target: 'ऐ', priority: 2 },
    { pattern: 'o', target: 'ओ', priority: 1 },
    { pattern: 'au', target: 'औ', priority: 2 },

    // Consonants (व्यंजन)
    { pattern: 'k', target: 'क', priority: 1 },
    { pattern: 'kh', target: 'ख', priority: 2 },
    { pattern: 'g', target: 'ग', priority: 1 },
    { pattern: 'gh', target: 'घ', priority: 2 },
    { pattern: 'ng', target: 'ङ', priority: 2 },
    { pattern: 'ch', target: 'च', priority: 2 },
    { pattern: 'chh', target: 'छ', priority: 3 },
    { pattern: 'j', target: 'ज', priority: 1 },
    { pattern: 'jh', target: 'झ', priority: 2 },
    { pattern: 'ny', target: 'ञ', priority: 2 },
    { pattern: 't', target: 'त', priority: 1 },
    { pattern: 'th', target: 'थ', priority: 2 },
    { pattern: 'd', target: 'द', priority: 1 },
    { pattern: 'dh', target: 'ध', priority: 2 },
    { pattern: 'n', target: 'न', priority: 1 },
    { pattern: 'p', target: 'प', priority: 1 },
    { pattern: 'ph', target: 'फ', priority: 2 },
    { pattern: 'b', target: 'ब', priority: 1 },
    { pattern: 'bh', target: 'भ', priority: 2 },
    { pattern: 'm', target: 'म', priority: 1 },
    { pattern: 'y', target: 'य', priority: 1 },
    { pattern: 'r', target: 'र', priority: 1 },
    { pattern: 'l', target: 'ल', priority: 1 },
    { pattern: 'v', target: 'व', priority: 1 },
    { pattern: 'w', target: 'व', priority: 1 },
    { pattern: 'sh', target: 'श', priority: 2 },
    { pattern: 's', target: 'स', priority: 1 },
    { pattern: 'h', target: 'ह', priority: 1 },
    { pattern: 'L', target: 'ळ', priority: 1 },
    { pattern: 'ksh', target: 'क्ष', priority: 3 },
    { pattern: 'tr', target: 'त्र', priority: 2 },
    { pattern: 'gy', target: 'ज्ञ', priority: 2 },

    // Vowel signs (मात्रा)
    { pattern: 'aa', target: 'ा', priority: 2 },
    { pattern: 'A', target: 'ा', priority: 2 },
    { pattern: 'i', target: 'ि', priority: 1 },
    { pattern: 'ii', target: 'ी', priority: 2 },
    { pattern: 'I', target: 'ी', priority: 2 },
    { pattern: 'u', target: 'ु', priority: 1 },
    { pattern: 'uu', target: 'ू', priority: 2 },
    { pattern: 'U', target: 'ू', priority: 2 },
    { pattern: 'e', target: 'े', priority: 1 },
    { pattern: 'ai', target: 'ै', priority: 2 },
    { pattern: 'o', target: 'ो', priority: 1 },
    { pattern: 'au', target: 'ौ', priority: 2 },

    // Special characters
    { pattern: 'N', target: 'ं', priority: 1 }, // Anusvara
    { pattern: 'M', target: 'ं', priority: 1 }, // Anusvara
    { pattern: 'H', target: 'ः', priority: 1 }, // Visarga
    { pattern: 'R', target: 'ृ', priority: 1 }, // R-kaar
    { pattern: 'RR', target: 'ॄ', priority: 2 }, // Long R-kaar
    { pattern: 'L', target: 'ॢ', priority: 1 }, // L-kaar
    { pattern: 'LL', target: 'ॣ', priority: 2 }, // Long L-kaar

    // Numbers
    { pattern: '0', target: '०', priority: 1 },
    { pattern: '1', target: '१', priority: 1 },
    { pattern: '2', target: '२', priority: 1 },
    { pattern: '3', target: '३', priority: 1 },
    { pattern: '4', target: '४', priority: 1 },
    { pattern: '5', target: '५', priority: 1 },
    { pattern: '6', target: '६', priority: 1 },
    { pattern: '7', target: '७', priority: 1 },
    { pattern: '8', target: '८', priority: 1 },
    { pattern: '9', target: '९', priority: 1 },

    // Punctuation
    { pattern: '\\.', target: '।', priority: 1 },
    { pattern: '\\|', target: '॥', priority: 1 },
  ],
};
