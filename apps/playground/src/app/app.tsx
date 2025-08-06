import React, { useState } from 'react';
import { TransliterationEditorComponent, useTransliteration } from '@elloloop/xinglish-react';
import { SupportedLanguage, EditorLayout, TransliterationResult } from '@elloloop/xinglish-shared';
import './app.module.css';

export function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>('hindi');
  const [selectedLayout, setSelectedLayout] = useState<EditorLayout>('side-by-side');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [result, setResult] = useState<TransliterationResult | null>(null);

  const handleResultChange = (newResult: TransliterationResult) => {
    setResult(newResult);
  };

  const sampleTexts = {
    hindi: 'namaste, kaise ho aap?',
    // TODO: Add sample texts for other languages when implemented
  };

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

  const layouts: { value: EditorLayout; name: string }[] = [
    { value: 'side-by-side', name: 'Side by Side' },
    { value: 'stacked', name: 'Stacked' },
    { value: 'output-only', name: 'Output Only' },
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Xinglish - Phonetic Transliteration Toolkit</h1>
        <p>Type Indian languages using English letters and see them in native script</p>
      </header>

      <main className="app-main">
        <div className="controls">
          <div className="control-group">
            <label htmlFor="language-select">Language:</label>
            <select
              id="language-select"
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as SupportedLanguage)}
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="layout-select">Layout:</label>
            <select
              id="layout-select"
              value={selectedLayout}
              onChange={(e) => setSelectedLayout(e.target.value as EditorLayout)}
            >
              {layouts.map((layout) => (
                <option key={layout.value} value={layout.value}>
                  {layout.name}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label>
              <input
                type="checkbox"
                checked={showSuggestions}
                onChange={(e) => setShowSuggestions(e.target.checked)}
              />
              Show Suggestions
            </label>
          </div>
        </div>

        <div className="sample-text">
          <p>
            <strong>Try typing:</strong> {sampleTexts[selectedLanguage]}
          </p>
        </div>

        <div className="editor-container">
          <TransliterationEditorComponent
            language={selectedLanguage}
            layout={selectedLayout}
            showSuggestions={showSuggestions}
            placeholder={`Type in English to see ${languages.find(l => l.code === selectedLanguage)?.name}...`}
            onChange={handleResultChange}
            className="demo-editor"
          />
        </div>

        {result && (
          <div className="result-info">
            <h3>Transliteration Result:</h3>
            <div className="result-details">
              <div>
                <strong>Original:</strong> {result.original}
              </div>
              <div>
                <strong>Transliterated:</strong> {result.transliterated}
              </div>
              <div>
                <strong>Confidence:</strong> {(result.confidence * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>
          Built with ❤️ using Nx, React, and TypeScript. 
          <br />
          Support for more Indian languages coming soon!
        </p>
      </footer>
    </div>
  );
}

export default App;
