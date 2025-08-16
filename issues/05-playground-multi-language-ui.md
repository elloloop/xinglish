# Issue #5: Playground Multi-Language UI Implementation

## Problem

The current playground app only supports Hindi. We need to update the UI to support language switching between Hindi and Telugu, and prepare for future language additions.

## Current State

```typescript
const languages: { code: SupportedLanguage; name: string }[] = [
  { code: 'hindi', name: 'Hindi (हिंदी)' },
  // TODO: Add other languages when configurations are implemented
  // { code: 'telugu', name: 'Telugu (తెలుగు)' },
  // { code: 'tamil', name: 'Tamil (தமிழ்)' },
  // { code: 'kannada', name: 'Kannada (ಕನ್ನಡ)' },
  // { code: 'malayalam', name: 'Malayalam (മലയാളം)' },
  // { code: 'bengali', name: 'Bengali (বাংলা)' },
  // { code: 'marathi', name: 'Marathi (मराठी)' },
  // { code: 'gujarati', name: 'Gujarati (ગુજરાતી)' },
];
```

## Required Changes

### 1. Language Selection Dropdown

```typescript
const languages: {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
}[] = [
  { code: 'hindi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'telugu', name: 'Telugu', nativeName: 'తెలుగు' },
  // Future languages
  { code: 'tamil', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'kannada', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'malayalam', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'bengali', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'marathi', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'gujarati', name: 'Gujarati', nativeName: 'ગુજરાતી' },
];
```

### 2. Dynamic Sample Text

```typescript
const sampleTexts: Record<SupportedLanguage, string> = {
  hindi: 'namaste, kaise ho aap?',
  telugu: 'namaste, ela unnaru meeru?',
  tamil: 'vanakkam, eppadi irukkeenga?',
  kannada: 'namaste, hegiddiri neevu?',
  malayalam: 'namaskaram, sukhamano?',
  bengali: 'namaskar, kemon achen?',
  marathi: 'namaskar, kase aahat?',
  gujarati: 'namaste, kem cho?',
};
```

### 3. Language-Specific Placeholders

```typescript
const getPlaceholder = (language: SupportedLanguage): string => {
  const languageInfo = languages.find((l) => l.code === language);
  return `Type in English to see ${languageInfo?.name} (${languageInfo?.nativeName})...`;
};
```

### 4. Language Switching Logic

```typescript
const handleLanguageChange = (newLanguage: SupportedLanguage) => {
  setSelectedLanguage(newLanguage);
  // Clear previous results when switching languages
  setResult(null);
  // Update editor language
  // This will require updating the TransliterationEditorComponent props
};
```

### 5. UI Enhancements

- **Language Flag/Icon**: Add visual indicators for each language
- **Native Script Display**: Show language names in their native scripts
- **Quick Language Toggle**: Keyboard shortcut for language switching
- **Language Info Panel**: Show script information and sample text

## Implementation Requirements

### 1. Update Shared Types

```typescript
// libs/shared/src/lib/shared.ts
export type SupportedLanguage =
  | 'hindi'
  | 'telugu'
  | 'tamil'
  | 'kannada'
  | 'malayalam'
  | 'bengali'
  | 'marathi'
  | 'gujarati';
```

### 2. Update React Component Props

```typescript
// libs/react/src/lib/react.tsx
interface TransliterationEditorComponentProps {
  language: SupportedLanguage;
  layout: EditorLayout;
  showSuggestions: boolean;
  placeholder?: string;
  onChange: (result: TransliterationResult) => void;
  className?: string;
}
```

### 3. Update Angular Component

```typescript
// libs/angular/src/lib/angular.ts
@Component({
  selector: 'xinglish-editor',
  inputs: ['language', 'layout', 'showSuggestions'],
  outputs: ['resultChange'],
})
export class TransliterationEditorComponent {
  @Input() language: SupportedLanguage = 'hindi';
  // ... other properties
}
```

### 4. Update Core Engine

```typescript
// libs/core/src/lib/core.ts
export class TransliterationEngine {
  constructor(language: SupportedLanguage) {
    // Support for multiple languages
  }
}
```

## UI/UX Considerations

### 1. Language Selection

- **Dropdown Design**: Clean, searchable dropdown with native script names
- **Visual Hierarchy**: Language name in English + native script
- **Quick Access**: Most used languages at the top

### 2. Sample Text

- **Contextual**: Show relevant sample text for selected language
- **Educational**: Help users understand what to type
- **Localized**: Use culturally appropriate examples

### 3. Responsive Design

- **Mobile Friendly**: Language selector works well on small screens
- **Touch Optimized**: Easy to tap language options
- **Accessibility**: Screen reader support for language names

## Test Cases

### 1. Language Switching

- [ ] Hindi → Telugu → Hindi (round-trip)
- [ ] All supported languages can be selected
- [ ] UI updates correctly for each language

### 2. Sample Text

- [ ] Sample text changes with language selection
- [ ] Placeholder text is language-appropriate
- [ ] Native script names display correctly

### 3. Transliteration

- [ ] Each language produces correct output
- [ ] Language-specific rules are applied
- [ ] Performance is consistent across languages

## Dependencies

- Issue #4 (Multi-Language Architecture Implementation)

## Estimated Effort

- **UI Updates**: 2-3 days
- **Component Updates**: 1-2 days
- **Testing**: 1 day
- **Total**: 4-6 days

## Acceptance Criteria

- [ ] Language dropdown shows Hindi and Telugu options
- [ ] Language switching works seamlessly
- [ ] Sample text updates for each language
- [ ] Placeholder text is language-appropriate
- [ ] Native script names display correctly
- [ ] All existing functionality works with new languages
- [ ] UI is responsive and accessible
- [ ] Performance is maintained
