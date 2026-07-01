import { TransliterationRule } from '../../shared';

export const teluguConsonants: TransliterationRule[] = [
  // Ka Varga
  { pattern: 'k', target: 'క', type: 'consonant', priority: 1 },
  { pattern: 'kh', target: 'ఖ', type: 'consonant', priority: 2 },
  { pattern: 'g', target: 'గ', type: 'consonant', priority: 1 },
  { pattern: 'gh', target: 'ఘ', type: 'consonant', priority: 2 },
  { pattern: 'ng', target: 'ఙ', type: 'consonant', priority: 2 },

  // Cha Varga
  { pattern: 'c', target: 'చ', type: 'consonant', priority: 1 },
  { pattern: 'ch', target: 'చ', type: 'consonant', priority: 2 },
  { pattern: 'chh', target: 'ఛ', type: 'consonant', priority: 3 },
  { pattern: 'Ch', target: 'ఛ', type: 'consonant', priority: 2 },
  { pattern: 'j', target: 'జ', type: 'consonant', priority: 1 },
  { pattern: 'jh', target: 'ఝ', type: 'consonant', priority: 2 },
  { pattern: 'ny', target: 'ఞ', type: 'consonant', priority: 2 },

  // Ta Varga (Retroflex)
  { pattern: 'T', target: 'ట', type: 'consonant', priority: 1 },
  { pattern: 'Th', target: 'ఠ', type: 'consonant', priority: 2 },
  { pattern: 'D', target: 'డ', type: 'consonant', priority: 1 },
  { pattern: 'Dh', target: 'ఢ', type: 'consonant', priority: 2 },
  { pattern: 'N', target: 'ణ', type: 'consonant', priority: 1 },

  // Ta Varga (Dental)
  { pattern: 't', target: 'త', type: 'consonant', priority: 1 },
  { pattern: 'th', target: 'థ', type: 'consonant', priority: 2 },
  { pattern: 'd', target: 'ద', type: 'consonant', priority: 1 },
  { pattern: 'dh', target: 'ధ', type: 'consonant', priority: 2 },
  { pattern: 'n', target: 'న', type: 'consonant', priority: 1 },

  // Pa Varga
  { pattern: 'p', target: 'ప', type: 'consonant', priority: 1 },
  { pattern: 'ph', target: 'ఫ', type: 'consonant', priority: 2 },
  { pattern: 'f', target: 'ఫ', type: 'consonant', priority: 1 },
  { pattern: 'b', target: 'బ', type: 'consonant', priority: 1 },
  { pattern: 'bh', target: 'భ', type: 'consonant', priority: 2 },
  { pattern: 'v', target: 'వ', type: 'consonant', priority: 1 },
  { pattern: 'w', target: 'వ', type: 'consonant', priority: 1 },

  // Ya, Ra, La, Va
  { pattern: 'y', target: 'య', type: 'consonant', priority: 1 },
  { pattern: 'r', target: 'ర', type: 'consonant', priority: 1 },
  { pattern: 'l', target: 'ల', type: 'consonant', priority: 1 },
  { pattern: 'L', target: 'ళ', type: 'consonant', priority: 1 },

  // Sha, Sha, Sa, Ha
  { pattern: 'S', target: 'శ', type: 'consonant', priority: 1 },
  { pattern: 'sh', target: 'ష', type: 'consonant', priority: 2 },
  { pattern: 'Sh', target: 'ష', type: 'consonant', priority: 2 },
  { pattern: 's', target: 'స', type: 'consonant', priority: 1 },
  { pattern: 'h', target: 'హ', type: 'consonant', priority: 1 },

  // Compound/Special
  { pattern: 'ksh', target: 'క్ష', type: 'consonant', priority: 3 },
  { pattern: 'tr', target: 'త్ర', type: 'consonant', priority: 2 },
  { pattern: 'gy', target: 'జ్ఞ', type: 'consonant', priority: 2 },
  
  // M specifics
  { pattern: 'm', target: 'ం', type: 'special', priority: 5, wordBoundary: true },
  { pattern: 'm', target: 'మ', type: 'consonant', priority: 1 },
];
