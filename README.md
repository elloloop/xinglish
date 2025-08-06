# Xinglish – Phonetic Transliteration Toolkit for Indian Languages

🚀 **Xinglish** is a monorepo-based phonetic transliteration framework that allows users to type Indian languages using English letters (like Hinglish, Tinglish, Tanglish) and renders the native script in real time. It is designed to support multiple Indian scripts and offers UI components for React, Angular, and vanilla web use.

## 🧩 Key Features

### Transliteration Engine

- Core engine that maps English-typed phonetic syllables to Indian script characters
- Rule-based system using configurable mapping tables per language
- Longest-match tokenization for accurate transliteration
- Support for major Indian languages: Hindi, Telugu, Tamil, Kannada, Malayalam, Bengali, Marathi, Gujarati, and more

### Editor UI Components

Framework-agnostic text editor with configurable layout modes:

- **Side-by-side input/output** - Input and output displayed side by side
- **Stacked input/output** - Output displayed below input
- **Output-only mode** - Real-time transliteration display
- Built in vanilla JS/TS, with wrappers for React and Angular

### Multi-Language Support

Each language has its own phonetic-to-script mapping configuration, making it easy to add new languages.

## 🏗️ Nx Monorepo Structure

```
apps/
  playground/              → Demo app to test the editor (uses React)
libs/
  core/                    → Transliteration engine (framework-agnostic)
  react/                   → React wrapper for the editor
  angular/                 → Angular wrapper
  shared/                  → Shared utilities (mappings, test data, types)
```

Each library will be published as `@xinglish/<package-name>` on npm.

## 🧠 Engine Design

The transliteration engine uses:

- **Longest-match tokenization** of Latin input
- **Unicode character mapping** for target scripts
- **Language-specific configuration files** for easy extension
- **Dictionary-based fallback** for better ambiguity handling (planned)
- **Suggestion engine** for alternate transliterations (planned)

## ⚙️ Tech Stack

- **Monorepo Tooling**: Nx (TypeScript-first)
- **UI Layers**: Vanilla JS, React, Angular
- **Build Tooling**: Nx + Rollup for library packages
- **Playground**: Vite + React for live testing
- **Testing**: Vitest

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Development

```bash
# Start the playground app
nx serve playground

# Build all libraries
nx build core
nx build shared
nx build react
nx build angular

# Run tests
nx test core
nx test shared
nx test react
nx test angular
```

### Building for Production

```bash
# Build all packages
nx run-many --target=build --all

# Build specific package
nx build core
```

## 📦 Package Publishing

Each library can be published independently:

```bash
# Publish core engine
nx publish core

# Publish React wrapper
nx publish react

# Publish Angular wrapper
nx publish angular

# Publish shared utilities
nx publish shared
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🗺️ Roadmap

- [ ] Core transliteration engine with Hindi support
- [ ] React editor component
- [ ] Angular editor component
- [ ] Vanilla JS editor component
- [ ] Additional language support (Telugu, Tamil, etc.)
- [ ] Dictionary-based fallback system
- [ ] Suggestion engine
- [ ] Performance optimizations
- [ ] Documentation and examples
