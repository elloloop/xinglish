import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from '../core';

describe('Hindi Book Quotes Transliteration', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('hindi');
  });

  const testCases = [
  {
    "input": "kaal kare so aaj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal karey so aaj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal kare soo aaj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal karey soo aaj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal kare so aj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal karey so aj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal kare soo aj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "kaal karey soo aj kar",
    "target": "काल करे सो आज कर"
  },
  {
    "input": "dukh mein sumiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein sumiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me sumiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me sumiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein soomiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein soomiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me soomiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me soomiran sab kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein sumiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein sumiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me sumiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me sumiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein soomiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein soomiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me soomiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me soomiran sub kare",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein sumiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein sumiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me sumiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me sumiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein soomiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein soomiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me soomiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me soomiran sab karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein sumiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein sumiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me sumiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me sumiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh mein soomiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha mein soomiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukh me soomiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "dukha me soomiran sub karey",
    "target": "दुख में सुमिरन सब करे"
  },
  {
    "input": "bada hua to kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua to kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa to kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa to kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua toh kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua toh kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa toh kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa toh kya hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua to kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua to kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa to kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa to kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua toh kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua toh kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa toh kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa toh kyaa hua",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua to kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua to kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa to kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa to kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua toh kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua toh kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa toh kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa toh kya huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua to kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua to kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa to kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa to kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada hua toh kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa hua toh kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "bada huaa toh kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "badaa huaa toh kyaa huaa",
    "target": "बड़ा हुआ तो क्या हुआ"
  },
  {
    "input": "guru gobind dou khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobind dou khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobimd dou khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobimd dou khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobind douu khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobind douu khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobimd douu khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobimd douu khade",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobind dou khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobind dou khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobimd dou khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobimd dou khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobind douu khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobind douu khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guru gobimd douu khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "guroo gobimd douu khadey",
    "target": "गुरु गोबिंद दोऊ खड़े"
  },
  {
    "input": "raghukul reet sada chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sada chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sada chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sada chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sadaa chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sadaa chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sadaa chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sadaa chali aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sada chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sada chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sada chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sada chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sadaa chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sadaa chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sadaa chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sadaa chalee aayi",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sada chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sada chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sada chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sada chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sadaa chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sadaa chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sadaa chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sadaa chali aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sada chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sada chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sada chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sada chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul reet sadaa chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool reet sadaa chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukul rit sadaa chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "raghukool rit sadaa chalee aai",
    "target": "रघुकुल रीत सदा चली आई"
  },
  {
    "input": "satyameva jayate",
    "target": "सत्यमेव जयते"
  },
  {
    "input": "satyamev jayate",
    "target": "सत्यमेव जयते"
  },
  {
    "input": "satyameva jaytey",
    "target": "सत्यमेव जयते"
  },
  {
    "input": "satyamev jaytey",
    "target": "सत्यमेव जयते"
  },
  {
    "input": "satyameva jayatey",
    "target": "सत्यमेव जयते"
  },
  {
    "input": "satyamev jayatey",
    "target": "सत्यमेव जयते"
  }
];

  it.each(testCases)(
    'translates "%s" to "%s"',
    ({ input, target }) => {
      const result = engine.transliterate(input);
      expect(result.transliterated).toBe(target);
    }
  );
  
  it('should have generated at least 126 tests', () => {
    expect(testCases.length).toBe(126);
  });
});
