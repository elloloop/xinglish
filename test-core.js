const { TransliterationEngine } = require('./dist/libs/core');

// Test the transliteration engine
const engine = new TransliterationEngine('hindi');

console.log('Testing Hindi transliteration...');

const testCases = [
  'namaste',
  'kaise ho aap',
  'dhanyavaad',
  'swagat hai',
  'hello world'
];

testCases.forEach(text => {
  const result = engine.transliterate(text);
  console.log(`"${text}" -> "${result.transliterated}" (confidence: ${(result.confidence * 100).toFixed(1)}%)`);
});

console.log('\nTesting suggestions...');
const suggestions = engine.getSuggestions('namaste');
console.log('Suggestions for "namaste":', suggestions);

console.log('\nCore engine test completed!'); 