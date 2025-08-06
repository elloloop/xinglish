# GitHub Packages

The Xinglish packages are published to GitHub Packages under the `@elloloop` organization.

## Available Packages

- `@elloloop/xinglish-core` - Core transliteration engine
- `@elloloop/xinglish-shared` - Shared types and utilities
- `@elloloop/xinglish-react` - React components
- `@elloloop/xinglish-angular` - Angular components

## Installation

### 1. Configure npm for GitHub Packages

Create or update your `.npmrc` file:

```bash
# .npmrc
@elloloop:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

### 2. Set up GitHub Token

You need a GitHub Personal Access Token with `read:packages` scope:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `read:packages` scope
3. Set the token as an environment variable:

```bash
export GITHUB_TOKEN=your_token_here
```

### 3. Install Packages

```bash
# Install core engine
npm install @elloloop/xinglish-core

# Install React components
npm install @elloloop/xinglish-react

# Install Angular components
npm install @elloloop/xinglish-angular

# Install shared utilities
npm install @elloloop/xinglish-shared
```

## Usage

### Core Engine

```javascript
import { TransliterationEngine } from '@elloloop/xinglish-core';

const engine = new TransliterationEngine('hindi');
const result = engine.transliterate('namaste');
console.log(result.transliterated); // नमस्ते
```

### React Component

```jsx
import { TransliterationEditorComponent } from '@elloloop/xinglish-react';

function App() {
  return (
    <TransliterationEditorComponent
      language="hindi"
      layout="side-by-side"
      showSuggestions={true}
      onChange={(result) => console.log(result)}
    />
  );
}
```

### Angular Component

```typescript
import { TransliterationEditorComponent } from '@elloloop/xinglish-angular';

@Component({
  template: `
    <xinglish-editor
      [language]="'hindi'"
      [layout]="'side-by-side'"
      [showSuggestions]="true"
      (resultChange)="onResultChange($event)">
    </xinglish-editor>
  `
})
export class AppComponent {
  onResultChange(result: TransliterationResult) {
    console.log(result);
  }
}
```

## Publishing

To publish new versions:

1. Update version numbers in package.json files
2. Create and push a new tag:

```bash
git tag v0.0.2
git push origin v0.0.2
```

The GitHub Actions workflow will automatically build and publish the packages.

## Troubleshooting

### Authentication Issues

If you encounter authentication issues:

1. Verify your GitHub token has the correct permissions
2. Check that your `.npmrc` file is properly configured
3. Ensure you're using the correct registry URL

### Package Not Found

If packages are not found:

1. Verify the package names are correct (including the `@elloloop` scope)
2. Check that the packages have been published to GitHub Packages
3. Ensure you have access to the repository

## Support

For issues and questions:

- Create an issue on GitHub: https://github.com/elloloop/xinglish/issues
- Check the main README for more information
- Review the PROJECT_STATUS.md for current features and roadmap 