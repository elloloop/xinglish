import { PhoneticRule } from '../../shared';

export const hindiSpecial: PhoneticRule[] = [
  { pattern: 'm', target: 'ं', type: 'special', priority: 1, wordBoundary: true },
  { pattern: 'n', target: 'ं', type: 'special', priority: 1, wordBoundary: true },
  { pattern: 'M', target: 'ं', type: 'special', priority: 1 },
  { pattern: 'H', target: 'ः', type: 'special', priority: 1 },
];
