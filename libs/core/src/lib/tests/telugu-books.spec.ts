import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from '../core';

describe('Telugu Book Quotes Transliteration', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('telugu');
  });

  const testCases = [
  {
    "input": "uppu kappurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo nokka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo noka polika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo nokka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo noka poolika nundu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo nokka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo noka polika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo nokka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kapurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kapurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kapurambu noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "uppu kappurambo noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "upu kappurambo noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "ooppu kappurambo noka poolika numdu",
    "target": "ఉప్పు కప్పురంబు నొక్క పోలిక నుండు"
  },
  {
    "input": "eppudu sampada kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "yeppudu sampada kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppoodoo sampada kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppudu sampadha kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "yeppudu sampadha kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppoodoo sampadha kaligina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppudu sampada kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "yeppudu sampada kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppoodoo sampada kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppudu sampadha kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "yeppudu sampadha kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "eppoodoo sampadha kalighina",
    "target": "ఎప్పుడు సంపద కలిగిన"
  },
  {
    "input": "viswadabhirama vinura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadabhirama vinura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadaabhiraama vinura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "viswadabhirama vinuura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadabhirama vinuura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadaabhiraama vinuura vema",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "viswadabhirama vinura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadabhirama vinura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadaabhiraama vinura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "viswadabhirama vinuura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadabhirama vinuura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "vishwadaabhiraama vinuura vemaa",
    "target": "విశ్వదాభిరామ వినుర వేమ"
  },
  {
    "input": "dharmo rakshati rakshitah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmoo rakshati rakshitah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmo rakshathi rakshitah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmoo rakshathi rakshitah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmo rakshati rakshithah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmoo rakshati rakshithah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmo rakshathi rakshithah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "dharmoo rakshathi rakshithah",
    "target": "ధర్మో రక్షతి రక్షితః"
  },
  {
    "input": "kamalamulu neeta basina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamuloo neeta basina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamulu nita basina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamuloo nita basina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamulu neeta baasina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamuloo neeta baasina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamulu nita baasina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "kamalamuloo nita baasina",
    "target": "కమలములు నీట బాసిన"
  },
  {
    "input": "vidya nigudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nigudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya niguudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya niguudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nighudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nighudha guptamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nigudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nigudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya niguudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya niguudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nighudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nighudha gupthamagu vittamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nigudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nigudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya niguudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya niguudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nighudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nighudha guptamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nigudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nigudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya niguudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya niguudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidya nighudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  },
  {
    "input": "vidhya nighudha gupthamagu vitamu",
    "target": "విద్య నిగూఢ గుప్తమగు విత్తము"
  }
];

  it.each(testCases)(
    'translates "%s" to "%s"',
    ({ input, target }) => {
      const result = engine.transliterate(input);
      expect(result.transliterated).toBe(target);
    }
  );
  
  it('should have generated at least 136 tests', () => {
    expect(testCases.length).toBe(136);
  });
});
