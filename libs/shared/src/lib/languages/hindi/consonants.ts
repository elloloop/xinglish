import { PhoneticRule } from '../../shared';

export const hindiConsonants: PhoneticRule[] = [
  { pattern: 'k', target: 'क', type: 'consonant', priority: 1 },
  { pattern: 'kh', target: 'ख', type: 'consonant', priority: 2 },
  { pattern: 'g', target: 'ग', type: 'consonant', priority: 1 },
  { pattern: 'gh', target: 'घ', type: 'consonant', priority: 2 },
  { pattern: 'ng', target: 'ङ', type: 'consonant', priority: 2 },
  
  { pattern: 'ch', target: 'च', type: 'consonant', priority: 2 },
  { pattern: 'chh', target: 'छ', type: 'consonant', priority: 3 },
  { pattern: 'j', target: 'ज', type: 'consonant', priority: 1 },
  { pattern: 'jh', target: 'झ', type: 'consonant', priority: 2 },
  { pattern: 'nj', target: 'ञ', type: 'consonant', priority: 2 },
  
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
  { pattern: 'f', target: 'फ़', type: 'consonant', priority: 1 },
  { pattern: 'ph', target: 'फ', type: 'consonant', priority: 2 },
  { pattern: 'b', target: 'ब', type: 'consonant', priority: 1 },
  { pattern: 'bh', target: 'भ', type: 'consonant', priority: 2 },
  { pattern: 'm', target: 'म', type: 'consonant', priority: 1 },
  
  { pattern: 'y', target: 'य', type: 'consonant', priority: 1 },
  { pattern: 'r', target: 'र', type: 'consonant', priority: 1 },
  { pattern: 'l', target: 'ल', type: 'consonant', priority: 1 },
  { pattern: 'v', target: 'व', type: 'consonant', priority: 1 },
  { pattern: 'w', target: 'व', type: 'consonant', priority: 1 },
  
  { pattern: 'sh', target: 'श', type: 'consonant', priority: 2 },
  { pattern: 'shh', target: 'ष', type: 'consonant', priority: 3 },
  { pattern: 's', target: 'स', type: 'consonant', priority: 1 },
  { pattern: 'h', target: 'ह', type: 'consonant', priority: 1 },
  
  { pattern: 'ksh', target: 'क्ष', type: 'consonant', priority: 3 },
  { pattern: 'tr', target: 'त्र', type: 'consonant', priority: 2 },
  { pattern: 'gy', target: 'ज्ञ', type: 'consonant', priority: 2 },
  { pattern: 'shr', target: 'श्र', type: 'consonant', priority: 3 },
];
