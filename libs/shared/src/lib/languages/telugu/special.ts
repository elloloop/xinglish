import { TransliterationRule } from '../../shared';

export const teluguSpecial: TransliterationRule[] = [
  // Special Characters
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
];
