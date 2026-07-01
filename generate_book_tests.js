const fs = require('fs');
const path = require('path');

const teluguBooksData = [
  { target: 'ఉప్పు కప్పురంబు నొక్క పోలిక నుండు', words: [
    { telugu: 'ఉప్పు', english: ['uppu', 'upu', 'ooppu'] },
    { telugu: 'కప్పురంబు', english: ['kappurambu', 'kapurambu', 'kappurambo'] },
    { telugu: 'నొక్క', english: ['nokka', 'noka'] },
    { telugu: 'పోలిక', english: ['polika', 'poolika'] },
    { telugu: 'నుండు', english: ['nundu', 'numdu'] }
  ]},
  { target: 'ఎప్పుడు సంపద కలిగిన', words: [
    { telugu: 'ఎప్పుడు', english: ['eppudu', 'yeppudu', 'eppoodoo'] },
    { telugu: 'సంపద', english: ['sampada', 'sampadha'] },
    { telugu: 'కలిగిన', english: ['kaligina', 'kalighina'] }
  ]},
  { target: 'విశ్వదాభిరామ వినుర వేమ', words: [
    { telugu: 'విశ్వదాభిరామ', english: ['viswadabhirama', 'vishwadabhirama', 'vishwadaabhiraama'] },
    { telugu: 'వినుర', english: ['vinura', 'vinuura'] },
    { telugu: 'వేమ', english: ['vema', 'vemaa'] }
  ]},
  { target: 'ధర్మో రక్షతి రక్షితః', words: [
    { telugu: 'ధర్మో', english: ['dharmo', 'dharmoo'] },
    { telugu: 'రక్షతి', english: ['rakshati', 'rakshathi'] },
    { telugu: 'రక్షితః', english: ['rakshitah', 'rakshithah'] }
  ]},
  { target: 'కమలములు నీట బాసిన', words: [
    { telugu: 'కమలములు', english: ['kamalamulu', 'kamalamuloo'] },
    { telugu: 'నీట', english: ['neeta', 'nita'] },
    { telugu: 'బాసిన', english: ['basina', 'baasina'] }
  ]},
  { target: 'విద్య నిగూఢ గుప్తమగు విత్తము', words: [
    { telugu: 'విద్య', english: ['vidya', 'vidhya'] },
    { telugu: 'నిగూఢ', english: ['nigudha', 'niguudha', 'nighudha'] },
    { telugu: 'గుప్తమగు', english: ['guptamagu', 'gupthamagu'] },
    { telugu: 'విత్తము', english: ['vittamu', 'vitamu'] }
  ]}
];

const hindiBooksData = [
  { target: 'काल करे सो आज कर', words: [
    { hindi: 'काल', english: ['kaal', 'kal'] },
    { hindi: 'करे', english: ['kare', 'karey'] },
    { hindi: 'सो', english: ['so', 'soo'] },
    { hindi: 'आज', english: ['aaj', 'aj'] },
    { hindi: 'कर', english: ['kar'] }
  ]},
  { target: 'दुख में सुमिरन सब करे', words: [
    { hindi: 'दुख', english: ['dukh', 'dukha'] },
    { hindi: 'में', english: ['mein', 'me'] },
    { hindi: 'सुमिरन', english: ['sumiran', 'soomiran'] },
    { hindi: 'सब', english: ['sab', 'sub'] },
    { hindi: 'करे', english: ['kare', 'karey'] }
  ]},
  { target: 'बड़ा हुआ तो क्या हुआ', words: [
    { hindi: 'बड़ा', english: ['bada', 'badaa'] },
    { hindi: 'हुआ', english: ['hua', 'huaa'] },
    { hindi: 'तो', english: ['to', 'toh'] },
    { hindi: 'क्या', english: ['kya', 'kyaa'] },
    { hindi: 'हुआ', english: ['hua', 'huaa'] }
  ]},
  { target: 'गुरु गोबिंद दोऊ खड़े', words: [
    { hindi: 'गुरु', english: ['guru', 'guroo'] },
    { hindi: 'गोबिंद', english: ['gobind', 'gobimd'] },
    { hindi: 'दोऊ', english: ['dou', 'douu'] },
    { hindi: 'खड़े', english: ['khade', 'khadey'] }
  ]},
  { target: 'रघुकुल रीत सदा चली आई', words: [
    { hindi: 'रघुकुल', english: ['raghukul', 'raghukool'] },
    { hindi: 'रीत', english: ['reet', 'rit'] },
    { hindi: 'सदा', english: ['sada', 'sadaa'] },
    { hindi: 'चली', english: ['chali', 'chalee'] },
    { hindi: 'आई', english: ['aayi', 'aai', 'aayi'] }
  ]},
  { target: 'सत्यमेव जयते', words: [
    { hindi: 'सत्यमेव', english: ['satyameva', 'satyamev'] },
    { hindi: 'जयते', english: ['jayate', 'jaytey', 'jayatey'] }
  ]}
];

function buildTestFile(langData, langId, desc, outputPath) {
  let testArray = [];
  let testCasesCount = 0;
  
  for (const book of langData) {
    let currentCombos = [[]];
    for (const wordObj of book.words) {
      const nextCombos = [];
      const uniqEng = [...new Set(wordObj.english)];
      for (const e of uniqEng) {
        for (const c of currentCombos) {
          nextCombos.push([...c, e]);
        }
      }
      currentCombos = nextCombos;
    }
    
    testCasesCount += currentCombos.length;
    for (const combo of currentCombos) {
      testArray.push({ input: combo.join(' '), target: book.target });
    }
  }
  
  const content = `import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from '../core';

describe('${desc}', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('${langId}');
  });

  const testCases = ${JSON.stringify(testArray, null, 2)};

  it.each(testCases)(
    'translates "%s" to "%s"',
    ({ input, target }) => {
      const result = engine.transliterate(input);
      expect(result.transliterated).toBe(target);
    }
  );
  
  it('should have generated at least ${testCasesCount} tests', () => {
    expect(testCases.length).toBe(${testCasesCount});
  });
});
`;
  fs.writeFileSync(outputPath, content);
  return testCasesCount;
}

const tCount = buildTestFile(teluguBooksData, 'telugu', 'Telugu Books Quotes Transliteration', path.join(__dirname, 'libs/core/src/lib/tests/telugu-books.spec.ts'));
const hCount = buildTestFile(hindiBooksData, 'hindi', 'Hindi Books Quotes Transliteration', path.join(__dirname, 'libs/core/src/lib/tests/hindi-books.spec.ts'));

console.log('Telugu Book Tests Generated:', tCount);
console.log('Hindi Book Tests Generated:', hCount);
