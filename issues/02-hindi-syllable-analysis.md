# Issue #2: Hindi Syllable Analysis Implementation

## Problem
The current algorithm cannot break Hindi words into proper syllables, leading to incorrect transliteration.

## Background
Hindi is a syllabic language where:
- Each syllable typically ends with a vowel sound
- Consonants can be combined with vowel signs (matras)
- Some consonants can be combined to form conjuncts (samyuktakshar)

## Required Syllable Patterns
For "namaste" (नमस्ते), the syllables should be:
- `na` → न (consonant + inherent vowel)
- `ma` → म (consonant + inherent vowel)  
- `ste` → स्ते (consonant cluster + vowel sign)

## Implementation Requirements

### 1. Syllable Boundary Detection
```typescript
interface Syllable {
  text: string;
  start: number;
  end: number;
  type: 'consonant-vowel' | 'consonant-cluster-vowel' | 'vowel-only';
}

function analyzeSyllables(word: string): Syllable[]
```

### 2. Hindi Phonetic Rules
- **CV Pattern**: consonant + vowel (e.g., `na` → न)
- **CCV Pattern**: consonant cluster + vowel (e.g., `st` + `e` → स्ते)
- **V Pattern**: vowel only (e.g., `a` → अ)

### 3. Vowel Sign Handling
- `a` (inherent) → no matra
- `i` → ि (before consonant)
- `e` → े (after consonant)
- `o` → ो (after consonant)

## Technical Approach
1. **Pattern Matching**: Use regex patterns to identify syllable boundaries
2. **Lookahead Analysis**: Consider next 2-3 characters to determine syllable type
3. **Rule Priority**: Longer patterns take precedence over shorter ones
4. **Fallback**: Default to character-by-character if no syllable pattern matches

## Test Cases
```typescript
// Basic syllables
"na" → ["na"] → न
"ma" → ["ma"] → म

// Consonant clusters
"st" → ["st"] → स्त
"ksh" → ["ksh"] → क्ष

// Complex words
"namaste" → ["na", "ma", "ste"] → नमस्ते
"kaise" → ["kai", "se"] → कैसे
```

## Dependencies
- Issue #1 (Transliteration Algorithm Overhaul)

## Estimated Effort
- **Development**: 2-3 days
- **Testing**: 1 day
- **Total**: 3-4 days

## Acceptance Criteria
- [ ] Syllable analysis correctly breaks down Hindi words
- [ ] All test cases produce expected syllable divisions
- [ ] Performance impact is minimal (<10ms for typical words)
- [ ] Edge cases (single letters, numbers, punctuation) are handled gracefully
