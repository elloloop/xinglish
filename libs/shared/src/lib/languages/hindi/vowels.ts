import { PhoneticRule } from '../../shared';

export const hindiVowels: PhoneticRule[] = [
  { pattern: 'a', target: 'अ', alternateTarget: '', type: 'vowel', priority: 1 },
  { pattern: 'aa', target: 'आ', alternateTarget: 'ा', type: 'vowel', priority: 2 },
  { pattern: 'i', target: 'इ', alternateTarget: 'ि', type: 'vowel', priority: 1 },
  { pattern: 'ii', target: 'ई', alternateTarget: 'ी', type: 'vowel', priority: 2 },
  { pattern: 'ee', target: 'ई', alternateTarget: 'ी', type: 'vowel', priority: 2 },
  { pattern: 'u', target: 'उ', alternateTarget: 'ु', type: 'vowel', priority: 1 },
  { pattern: 'uu', target: 'ऊ', alternateTarget: 'ू', type: 'vowel', priority: 2 },
  { pattern: 'oo', target: 'ऊ', alternateTarget: 'ू', type: 'vowel', priority: 2 },
  { pattern: 'ri', target: 'ऋ', alternateTarget: 'ृ', type: 'vowel', priority: 2 },
  { pattern: 'e', target: 'ए', alternateTarget: 'े', type: 'vowel', priority: 1 },
  { pattern: 'ai', target: 'ऐ', alternateTarget: 'ै', type: 'vowel', priority: 2 },
  { pattern: 'o', target: 'ओ', alternateTarget: 'ो', type: 'vowel', priority: 1 },
  { pattern: 'au', target: 'औ', alternateTarget: 'ौ', type: 'vowel', priority: 2 },
  { pattern: 'ou', target: 'औ', alternateTarget: 'ौ', type: 'vowel', priority: 2 },
];
