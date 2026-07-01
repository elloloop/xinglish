import { LanguageConfig } from '../shared';

/**
 * Telugu language configuration
 */
export const teluguConfig: LanguageConfig = {
  code: 'telugu',
  name: 'Telugu',
  scriptName: 'Telugu',
  virama: '్',
  retainWordFinalVirama: true, // Telugu typically keeps the virama at the end of words lacking vowels
  unicodeRange: {
    start: 0x0c00,
    end: 0x0c7f,
  },
  rules: [
    // Vowels
    { pattern: 'a', target: 'అ', alternateTarget: '', type: 'vowel', priority: 1 },
    { pattern: 'aa', target: 'ఆ', alternateTarget: 'ా', type: 'vowel', priority: 2 },
    { pattern: 'A', target: 'ఆ', alternateTarget: 'ా', type: 'vowel', priority: 2 },
    { pattern: 'i', target: 'ఇ', alternateTarget: 'ి', type: 'vowel', priority: 1 },
    { pattern: 'ii', target: 'ఈ', alternateTarget: 'ీ', type: 'vowel', priority: 2 },
    { pattern: 'I', target: 'ఈ', alternateTarget: 'ీ', type: 'vowel', priority: 2 },
    { pattern: 'u', target: 'ఉ', alternateTarget: 'ు', type: 'vowel', priority: 1 },
    { pattern: 'uu', target: 'ఊ', alternateTarget: 'ూ', type: 'vowel', priority: 2 },
    { pattern: 'U', target: 'ఊ', alternateTarget: 'ూ', type: 'vowel', priority: 2 },
    { pattern: 'R', target: 'ఋ', alternateTarget: 'ృ', type: 'vowel', priority: 1 },
    { pattern: 'RR', target: 'ౠ', alternateTarget: 'ౄ', type: 'vowel', priority: 2 },
    { pattern: 'e', target: 'ఎ', alternateTarget: 'ె', type: 'vowel', priority: 1 },
    { pattern: 'E', target: 'ఏ', alternateTarget: 'ే', type: 'vowel', priority: 2 },
    { pattern: 'ai', target: 'ఐ', alternateTarget: 'ై', type: 'vowel', priority: 2 },
    { pattern: 'o', target: 'ఒ', alternateTarget: 'ొ', type: 'vowel', priority: 1 },
    { pattern: 'O', target: 'ఓ', alternateTarget: 'ో', type: 'vowel', priority: 2 },
    { pattern: 'au', target: 'ఔ', alternateTarget: 'ౌ', type: 'vowel', priority: 2 },

    // Consonants
    { pattern: 'k', target: 'క', type: 'consonant', priority: 1 },
    { pattern: 'kh', target: 'ఖ', type: 'consonant', priority: 2 },
    { pattern: 'g', target: 'గ', type: 'consonant', priority: 1 },
    { pattern: 'gh', target: 'ఘ', type: 'consonant', priority: 2 },
    { pattern: 'ng', target: 'ఙ', type: 'consonant', priority: 2 },
    { pattern: 'c', target: 'చ', type: 'consonant', priority: 1 },
    { pattern: 'ch', target: 'చ', type: 'consonant', priority: 2 },
    { pattern: 'Ch', target: 'ఛ', type: 'consonant', priority: 2 },
    { pattern: 'j', target: 'జ', type: 'consonant', priority: 1 },
    { pattern: 'jh', target: 'ఝ', type: 'consonant', priority: 2 },
    { pattern: 'ny', target: 'ఞ', type: 'consonant', priority: 2 },
    { pattern: 'T', target: 'ట', type: 'consonant', priority: 1 },
    { pattern: 'Th', target: 'ఠ', type: 'consonant', priority: 2 },
    { pattern: 'D', target: 'డ', type: 'consonant', priority: 1 },
    { pattern: 'Dh', target: 'ఢ', type: 'consonant', priority: 2 },
    { pattern: 'N', target: 'ణ', type: 'consonant', priority: 1 },
    { pattern: 't', target: 'త', type: 'consonant', priority: 1 },
    { pattern: 'th', target: 'థ', type: 'consonant', priority: 2 },
    { pattern: 'd', target: 'ద', type: 'consonant', priority: 1 },
    { pattern: 'dh', target: 'ధ', type: 'consonant', priority: 2 },
    { pattern: 'n', target: 'న', type: 'consonant', priority: 1 },
    { pattern: 'p', target: 'ప', type: 'consonant', priority: 1 },
    { pattern: 'ph', target: 'ఫ', type: 'consonant', priority: 2 },
    { pattern: 'f', target: 'ఫ', type: 'consonant', priority: 1 },
    { pattern: 'b', target: 'బ', type: 'consonant', priority: 1 },
    { pattern: 'bh', target: 'భ', type: 'consonant', priority: 2 },
    { pattern: 'm', target: 'ం', type: 'special', priority: 5, wordBoundary: true },
    { pattern: 'm', target: 'మ', type: 'consonant', priority: 1 },
    { pattern: 'y', target: 'య', type: 'consonant', priority: 1 },
    { pattern: 'r', target: 'ర', type: 'consonant', priority: 1 },
    { pattern: 'l', target: 'ల', type: 'consonant', priority: 1 },
    { pattern: 'L', target: 'ళ', type: 'consonant', priority: 1 },
    { pattern: 'v', target: 'వ', type: 'consonant', priority: 1 },
    { pattern: 'w', target: 'వ', type: 'consonant', priority: 1 },
    { pattern: 'S', target: 'శ', type: 'consonant', priority: 1 },
    { pattern: 'sh', target: 'ష', type: 'consonant', priority: 2 },
    { pattern: 'Sh', target: 'ష', type: 'consonant', priority: 2 },
    { pattern: 's', target: 'స', type: 'consonant', priority: 1 },
    { pattern: 'h', target: 'హ', type: 'consonant', priority: 1 },
    { pattern: 'ksh', target: 'క్ష', type: 'consonant', priority: 3 },
    { pattern: 'tr', target: 'త్ర', type: 'consonant', priority: 2 },
    { pattern: 'gy', target: 'జ్ఞ', type: 'consonant', priority: 2 },

    // Special
    { pattern: 'M', target: 'ం', type: 'special', priority: 1 }, // Anusvara
    { pattern: 'H', target: 'ః', type: 'special', priority: 1 }, // Visarga
    
    // Numbers
    { pattern: '0', target: '౦', type: 'special', priority: 1 },
    { pattern: '1', target: '౧', type: 'special', priority: 1 },
    { pattern: '2', target: '౨', type: 'special', priority: 1 },
    { pattern: '3', target: '౩', type: 'special', priority: 1 },
    { pattern: '4', target: '౪', type: 'special', priority: 1 },
    { pattern: '5', target: '౫', type: 'special', priority: 1 },
    { pattern: '6', target: '౬', type: 'special', priority: 1 },
    { pattern: '7', target: '౭', type: 'special', priority: 1 },
    { pattern: '8', target: '౮', type: 'special', priority: 1 },
    { pattern: '9', target: '౯', type: 'special', priority: 1 },
  ]
};
