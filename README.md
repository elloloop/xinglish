# Xinglish

Phonetic transliteration toolkit for Indian languages

[![CI](https://github.com/elloloop/xinglish/workflows/CI/badge.svg)](https://github.com/elloloop/xinglish/actions/workflows/ci.yml)
[![Deploy to GitHub Pages](https://github.com/elloloop/xinglish/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/elloloop/xinglish/actions/workflows/deploy-pages.yml)
[![npm version](https://img.shields.io/npm/v/@elloloop/xinglish-core?label=core)](https://www.npmjs.com/package/@elloloop/xinglish-core)
[![npm version](https://img.shields.io/npm/v/@elloloop/xinglish-react?label=react)](https://www.npmjs.com/package/@elloloop/xinglish-react)
[![npm version](https://img.shields.io/npm/v/@elloloop/xinglish-angular?label=angular)](https://www.npmjs.com/package/@elloloop/xinglish-angular)

## 🚀 Quick Start

### Installation

```bash
# Core library
npm install @elloloop/xinglish-core

# React components
npm install @elloloop/xinglish-react

# Angular components
npm install @elloloop/xinglish-angular
```

### Basic Usage

```typescript
import { TransliterationEngine } from '@elloloop/xinglish-core';

const engine = new TransliterationEngine('hindi');
const result = engine.transliterate('namaste');
console.log(result.transliterated); // नमस्ते
```

## 🎮 Playground

Try out the transliteration features in our interactive playground:
**[Live Demo](https://elloloop.github.io/xinglish/)**

## 📦 Packages

| Package | Description | NPM |
|---------|-------------|-----|
| `@elloloop/xinglish-shared` | Shared types and utilities | [![npm](https://img.shields.io/npm/v/@elloloop/xinglish-shared)](https://www.npmjs.com/package/@elloloop/xinglish-shared) |
| `@elloloop/xinglish-core` | Core transliteration engine | [![npm](https://img.shields.io/npm/v/@elloloop/xinglish-core)](https://www.npmjs.com/package/@elloloop/xinglish-core) |
| `@elloloop/xinglish-react` | React components | [![npm](https://img.shields.io/npm/v/@elloloop/xinglish-react)](https://www.npmjs.com/package/@elloloop/xinglish-react) |
| `@elloloop/xinglish-angular` | Angular components | [![npm](https://img.shields.io/npm/v/@elloloop/xinglish-angular)](https://www.npmjs.com/package/@elloloop/xinglish-angular) |

## 🛠️ Development

### Prerequisites

- Node.js 20+ (see [.nvmrc](.nvmrc))
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/elloloop/xinglish.git
cd xinglish

# Install dependencies
npm install

# Start development server
npm run dev:playground
```

### Available Scripts

```bash
npm run test          # Run all tests
npm run test-ci       # Run CI/CD test suite
npm run lint          # Lint all projects
npm run build         # Build all projects
npm run build:libs    # Build only libraries
```

### Project Structure

```
xinglish/
├── apps/
│   └── playground/          # Interactive demo app
├── libs/
│   ├── shared/             # Shared types and utilities
│   ├── core/               # Core transliteration engine
│   ├── react/              # React components
│   └── angular/            # Angular components
├── .github/
│   └── workflows/          # CI/CD pipelines
└── scripts/
    └── test-ci.sh          # CI/CD test script
```

## 🌐 Supported Languages

Currently supported:
- **Hindi** (Devanagari script)

Planned support:
- Telugu
- Tamil
- Kannada
- Malayalam
- Bengali
- Marathi
- Gujarati

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test-ci`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Documentation](https://elloloop.github.io/xinglish/)
- [Issues](https://github.com/elloloop/xinglish/issues)
- [Discussions](https://github.com/elloloop/xinglish/discussions)
- [CI/CD Setup](CI_CD_SETUP.md)
