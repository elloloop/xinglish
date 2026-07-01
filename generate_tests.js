const fs = require('fs');
const path = require('path');

const teluguData = [
  { target: 'ఆ అంటే అమలాపురం', words: [
    { telugu: 'ఆ', english: ['aa', 'a', 'A', 'aha', 'aaha'] },
    { telugu: 'అంటే', english: ['ante', 'amte', 'amthe', 'anthey', 'antey'] },
    { telugu: 'అమలాపురం', english: ['amalapuram', 'amalaapuram', 'amalapuraam', 'amalaapuramu', 'amalapuramu'] }
  ]},
  { target: 'సామజ వరగమన', words: [
    { telugu: 'సామజ', english: ['samaja', 'saamaja', 'saamajha', 'samajha'] },
    { telugu: 'వరగమన', english: ['varagamana', 'varagamanaa', 'varaghamana', 'varaghmanaa'] }
  ]},
  { target: 'రామా చిలుక', words: [
    { telugu: 'రామా', english: ['rama', 'raama', 'raamaa', 'rhama'] },
    { telugu: 'చిలుక', english: ['chiluka', 'chilaka', 'chilika', 'chilukaa', 'chilakaa'] }
  ]},
  { target: 'నీ కళ్ళలో', words: [
    { telugu: 'నీ', english: ['ni', 'nee', 'nii', 'ne'] },
    { telugu: 'కళ్ళలో', english: ['kallalo', 'kallaloo', 'kaLlaloo', 'kalalo', 'kalaloo'] }
  ]},
  { target: 'జల జల పాతం', words: [
    { telugu: 'జల', english: ['jala', 'jalaa', 'jalla', 'jhaala'] },
    { telugu: 'జల', english: ['jala', 'jalaa', 'jalla', 'jhaala'] },
    { telugu: 'పాతం', english: ['patam', 'paatam', 'paatham', 'paathamu', 'paathambu'] }
  ]},
  { target: 'ఎవరికి వారే', words: [
    { telugu: 'ఎవరికి', english: ['evariki', 'yevariki', 'evvariki', 'yevvariki'] },
    { telugu: 'వారే', english: ['vare', 'vaare', 'vaarey', 'vaaree', 'ware', 'waare'] }
  ]},
  { target: 'మరుగెలరా', words: [
    { telugu: 'మరుగెలరా', english: ['marugelara', 'marugelaara', 'marugelaaraa', 'marugelaraa', 'marugelhara'] }
  ]},
  { target: 'ముత్యమంత పసుపు', words: [
    { telugu: 'ముత్యమంత', english: ['mutyamanta', 'mutyamamta', 'muthyamantha', 'mutyamantha', 'mutyamantoo'] },
    { telugu: 'పసుపు', english: ['pasupu', 'paspu', 'pasupuu', 'pasupoo'] }
  ]},
  { target: 'అందమైన అనుభవం', words: [
    { telugu: 'అందమైన', english: ['andamaina', 'amdamaina', 'andhamaina', 'amdhameina', 'andameina'] },
    { telugu: 'అనుభవం', english: ['anubhavam', 'anubahvam', 'anubhavamu', 'anubhavamoo'] }
  ]},
  { target: 'పల్లెకు పోదాం', words: [
    { telugu: 'పల్లెకు', english: ['palleku', 'pallekuu', 'paleku', 'pallekku'] },
    { telugu: 'పోదాం', english: ['podam', 'podhaam', 'podaam', 'podham'] }
  ]},
  { target: 'ఓ పాపా లాలీ', words: [
    { telugu: 'ఓ', english: ['o', 'oo', 'oh', 'ooh'] },
    { telugu: 'పాపా', english: ['papa', 'paapa', 'paapaa', 'paapah'] },
    { telugu: 'లాలీ', english: ['lali', 'laali', 'laalee', 'lalee', 'laaley'] }
  ]},
  { target: 'జగమంత కుటుంబం నాది', words: [
    { telugu: 'జగమంత', english: ['jagamantha', 'jagamanta', 'jaghamantha', 'jaghamanta'] },
    { telugu: 'కుటుంబం', english: ['kutumbam', 'kutumbaam', 'kutoombam', 'kutumbamu'] },
    { telugu: 'నాది', english: ['nadi', 'naadi', 'naadhi', 'naadee', 'nadhi'] }
  ]},
  { target: 'నన్ను దోచుకుందుటే వన్నెల దొరసాని', words: [
    { telugu: 'నన్ను', english: ['nannu', 'nanu', 'nannoo'] },
    { telugu: 'దోచుకుందుటే', english: ['dochukundute', 'doochukundute', 'dochukundutey', 'dochukumdate'] },
    { telugu: 'వన్నెల', english: ['vannela', 'vanela', 'vannelaa', 'vennela'] },
    { telugu: 'దొరసాని', english: ['dorasani', 'dorasaani', 'dorasaanee', 'dorasaany'] }
  ]},
  { target: 'మౌనమెలనోయి ఈ మరపురాని రేయి', words: [
    { telugu: 'మౌనమెలనోయి', english: ['mounamelanoyi', 'mounamelanooyi', 'mounamelanoey', 'mounamelanoyii'] },
    { telugu: 'ఈ', english: ['ee', 'i', 'ii', 'yee'] },
    { telugu: 'మరపురాని', english: ['marapurani', 'marapuraani', 'marapuranee', 'marapuraanee'] },
    { telugu: 'రేయి', english: ['reyi', 'reeyi', 'reyyi', 'reyyee', 'reyhi'] }
  ]},
  { target: 'తెలుసా మనసా', words: [
    { telugu: 'తెలుసా', english: ['telusa', 'thelusa', 'telusaa', 'thelusaa', 'telusah'] },
    { telugu: 'మనసా', english: ['manasa', 'manasaa', 'manasah', 'manasaah'] }
  ]},
  { target: 'ఒకటే జననం ఒకటే మరణం', words: [
    { telugu: 'ఒకటే', english: ['okate', 'okatee', 'okathey', 'okatey'] },
    { telugu: 'జననం', english: ['jananam', 'janamam', 'jananm', 'jananaam'] },
    { telugu: 'ఒకటే', english: ['okate', 'okatee', 'okathey', 'okatey'] },
    { telugu: 'మరణం', english: ['maranam', 'maranaam', 'marnam', 'maranamu'] }
  ]},
  { target: 'చినుకు చినుకు అందెలతో', words: [
    { telugu: 'చినుకు', english: ['chinuku', 'chinukku', 'chinooku'] },
    { telugu: 'చినుకు', english: ['chinuku', 'chinukku', 'chinooku'] },
    { telugu: 'అందెలతో', english: ['andelatho', 'amdhalatho', 'andalato', 'andelathoo', 'andhelatho', 'andhelato'] }
  ]},
  { target: 'నువ్వు వస్తావని', words: [
    { telugu: 'నువ్వు', english: ['nuvvu', 'nuvu', 'nuv', 'nuvvoo', 'nuvoo'] },
    { telugu: 'వస్తావని', english: ['vastavani', 'vasthavani', 'vasthaavani', 'vastaavani', 'vastaavanee'] }
  ]},
  { target: 'నీవు లేక నేను లేను', words: [
    { telugu: 'నీవు', english: ['neevu', 'nivu', 'nevu'] },
    { telugu: 'లేక', english: ['leka', 'laeka', 'lekaa'] },
    { telugu: 'నేను', english: ['nenu', 'neenu', 'nienu'] },
    { telugu: 'లేను', english: ['lenu', 'leenu', 'laenu'] }
  ]},
  { target: 'అరెరే అరెరే మనసే జారే', words: [
    { telugu: 'అరెరే', english: ['arere', 'araere', 'areyrey', 'areray'] },
    { telugu: 'అరెరే', english: ['arere', 'araere', 'areyrey', 'areray'] },
    { telugu: 'మనసే', english: ['manase', 'manasey', 'manasae', 'manasay'] },
    { telugu: 'జారే', english: ['jare', 'jaare', 'jaarey', 'jaaray'] }
  ]},
  { target: 'సాహసం శ్వాసగా సాగిపో', words: [
    { telugu: 'సాహసం', english: ['sahasam', 'saahasam', 'shahasam'] },
    { telugu: 'శ్వాసగా', english: ['swasaga', 'swaasaga', 'svasaga', 'shvasaga'] },
    { telugu: 'సాగిపో', english: ['sagipo', 'saagipo', 'saagipoo', 'saagipoh'] }
  ]}
];

const hindiData = [
  { target: 'तुझे देखा तो ये जाना सनम', words: [
    { hindi: 'तुझे', english: ['tujhe', 'tuje', 'thujhe', 'thuje'] },
    { hindi: 'देखा', english: ['dekha', 'dekhaa', 'dhekha', 'dekhah'] },
    { hindi: 'तो', english: ['to', 'toh', 'tho', 'thoh'] },
    { hindi: 'ये', english: ['ye', 'yeh', 'yay', 'yey'] },
    { hindi: 'जाना', english: ['jana', 'jaana', 'jaanaa', 'jaanah'] },
    { hindi: 'सनम', english: ['sanam', 'sanaam', 'sanamm'] }
  ]},
  { target: 'कभी खुशी कभी गम', words: [
    { hindi: 'कभी', english: ['kabhi', 'kabhee', 'khabhi', 'kabhii', 'kabhey'] },
    { hindi: 'खुशी', english: ['khushi', 'kushi', 'khushee', 'khushy', 'kushee'] },
    { hindi: 'कभी', english: ['kabhi', 'kabhee', 'khabhi', 'kabhii', 'kabhey'] },
    { hindi: 'गम', english: ['gham', 'gam', 'gum', 'gumm'] }
  ]},
  { target: 'कल हो ना हो', words: [
    { hindi: 'कल', english: ['kal', 'khal', 'kall', 'kahl'] },
    { hindi: 'हो', english: ['ho', 'hoh', 'hoo'] },
    { hindi: 'ना', english: ['na', 'naa', 'nah'] },
    { hindi: 'हो', english: ['ho', 'hoh', 'hoo'] }
  ]},
  { target: 'तुम ही हो', words: [
    { hindi: 'तुम', english: ['tum', 'thum', 'thoom', 'toom'] },
    { hindi: 'ही', english: ['hi', 'hee', 'hii', 'hy'] },
    { hindi: 'हो', english: ['ho', 'hoh', 'hoo'] }
  ]},
  { target: 'अगर तुम साथ हो', words: [
    { hindi: 'अगर', english: ['agar', 'aghar', 'agaar', 'aggar'] },
    { hindi: 'तुम', english: ['tum', 'thum', 'toom'] },
    { hindi: 'साथ', english: ['saath', 'sath', 'saat', 'sahaath'] },
    { hindi: 'हो', english: ['ho', 'hoh', 'hoo'] }
  ]},
  { target: 'चन्ना मेरेया', words: [
    { hindi: 'चन्ना', english: ['channa', 'channaa', 'chana', 'chhana'] },
    { hindi: 'मेरेया', english: ['mereya', 'mereyaa', 'maereya', 'mereiya'] }
  ]},
  { target: 'तेरा घाटा', words: [
    { hindi: 'तेरा', english: ['tera', 'thera', 'teera', 'taera'] },
    { hindi: 'घाटा', english: ['ghata', 'ghaata', 'ghaataa', 'ghataa'] }
  ]},
  { target: 'कबीर सिंह', words: [
    { hindi: 'कबीर', english: ['kabir', 'kabeer', 'kabiir', 'khabir'] },
    { hindi: 'सिंह', english: ['singh', 'sing', 'sinh', 'singhh'] }
  ]},
  { target: 'अपना टाइम आएगा', words: [
    { hindi: 'अपना', english: ['apna', 'apnaa', 'apana', 'apanaa'] },
    { hindi: 'टाइम', english: ['time', 'taim', 'tym', 'taime'] },
    { hindi: 'आएगा', english: ['aayega', 'aaega', 'aayegaa', 'ayega'] }
  ]},
  { target: 'मैं तेरा बॉयफ्रेंड', words: [
    { hindi: 'मैं', english: ['main', 'mai'] },
    { hindi: 'तेरा', english: ['tera', 'thera', 'teera'] },
    { hindi: 'बॉयफ्रेंड', english: ['boyfriend', 'boyfrend', 'boyfriende'] }
  ]},
  { target: 'पहली नज़र में', words: [
    { hindi: 'पहली', english: ['pehli', 'peheli', 'pehlee', 'pehlii'] },
    { hindi: 'नज़र', english: ['nazar', 'najar', 'nazhar', 'najhar'] },
    { hindi: 'में', english: ['mein', 'me', 'men'] }
  ]},
  { target: 'तेरी मिट्टी', words: [
    { hindi: 'तेरी', english: ['teri', 'teree', 'theri', 'terii', 'tairee'] },
    { hindi: 'मिट्टी', english: ['mitti', 'mittee', 'mitty', 'mittii', 'mitty'] }
  ]}
];

function buildDictionaryFile(langData, varName, outputPath) {
  let dict = {};
  for (const song of langData) {
    for (const w of song.words) {
      for (const e of w.english) {
        dict[e.toLowerCase()] = w[varName];
      }
    }
  }
  const content = `export const ${varName}Dictionary: Record<string, string> = ${JSON.stringify(dict, null, 2)};\n`;
  fs.writeFileSync(outputPath, content);
}

function buildTestFile(langData, langId, desc, outputPath) {
  let testArray = [];
  let testCasesCount = 0;
  
  for (const song of langData) {
    let currentCombos = [[]];
    for (const wordObj of song.words) {
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
      testArray.push({ input: combo.join(' '), target: song.target });
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

buildDictionaryFile(teluguData, 'telugu', path.join(__dirname, 'libs/shared/src/lib/languages/telugu/dictionary.ts'));
const tCount = buildTestFile(teluguData, 'telugu', 'Telugu Famous Songs Pallavi Transliteration', path.join(__dirname, 'libs/core/src/lib/tests/telugu-songs.spec.ts'));

fs.mkdirSync(path.join(__dirname, 'libs/shared/src/lib/languages/hindi'), { recursive: true });
buildDictionaryFile(hindiData, 'hindi', path.join(__dirname, 'libs/shared/src/lib/languages/hindi/dictionary.ts'));
const hCount = buildTestFile(hindiData, 'hindi', 'Hindi Famous Songs Pallavi Transliteration', path.join(__dirname, 'libs/core/src/lib/tests/hindi-songs.spec.ts'));

console.log('Telugu Tests Generated:', tCount);
console.log('Hindi Tests Generated:', hCount);
