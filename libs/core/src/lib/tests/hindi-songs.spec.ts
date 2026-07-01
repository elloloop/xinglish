import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from '../core';

describe('Hindi Famous Songs Pallavi Transliteration', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('hindi');
  });

  const testCases = [
  {
    "input": "tujhe dekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaana sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanaa sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanah sanam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaana sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanaa sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanah sanaam",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaana sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanaa sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh ye jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yeh jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yay jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah to yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah toh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah tho yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhaa thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhaa thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhaa thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhaa thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dhekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dhekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dhekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dhekha thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tujhe dekhah thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "tuje dekhah thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thujhe dekhah thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "thuje dekhah thoh yey jaanah sanamm",
    "target": "तुझे देखा तो ये जाना सनम"
  },
  {
    "input": "kabhi khushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhee gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee khabhi gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhii gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhey gham",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhee gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee khabhi gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhii gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhey gam",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhee gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee khabhi gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhii gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhey gum",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhee gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee khabhi gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhii gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushi kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi khushy kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee khushy kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi khushy kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii khushy kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey khushy kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhi kushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhee kushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "khabhi kushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhii kushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kabhey kushee kabhey gumm",
    "target": "कभी खुशी कभी गम"
  },
  {
    "input": "kal ho na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo na ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo naa ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo nah ho",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo na hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo naa hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo nah hoh",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo na hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo naa hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal ho nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal ho nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall ho nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl ho nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoh nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoh nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoh nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoh nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kal hoo nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "khal hoo nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kall hoo nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "kahl hoo nah hoo",
    "target": "कल हो ना हो"
  },
  {
    "input": "tum hi ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hi ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hi ho",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hi ho",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hee ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hee ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hee ho",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hee ho",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hii ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hii ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hii ho",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hii ho",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hy ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hy ho",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hy ho",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hy ho",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hi hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hi hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hi hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hi hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hee hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hee hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hee hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hee hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hii hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hii hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hii hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hii hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hy hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hy hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hy hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hy hoh",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hi hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hi hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hi hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hi hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hee hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hee hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hee hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hee hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hii hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hii hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hii hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hii hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "tum hy hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thum hy hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "thoom hy hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "toom hy hoo",
    "target": "तुम ही हो"
  },
  {
    "input": "agar tum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saat ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sahaath ho",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saat hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sahaath hoh",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom saat hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar tum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar tum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar tum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar tum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar thum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar thum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar thum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar thum sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agar toom sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aghar toom sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "agaar toom sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "aggar toom sahaath hoo",
    "target": "अगर तुम साथ हो"
  },
  {
    "input": "channa mereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channaa mereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chana mereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chhana mereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channa mereyaa",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channaa mereyaa",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chana mereyaa",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chhana mereyaa",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channa maereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channaa maereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chana maereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chhana maereya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channa mereiya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "channaa mereiya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chana mereiya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "chhana mereiya",
    "target": "चन्ना मेरेया"
  },
  {
    "input": "tera ghata",
    "target": "तेरा घाटा"
  },
  {
    "input": "thera ghata",
    "target": "तेरा घाटा"
  },
  {
    "input": "teera ghata",
    "target": "तेरा घाटा"
  },
  {
    "input": "taera ghata",
    "target": "तेरा घाटा"
  },
  {
    "input": "tera ghaata",
    "target": "तेरा घाटा"
  },
  {
    "input": "thera ghaata",
    "target": "तेरा घाटा"
  },
  {
    "input": "teera ghaata",
    "target": "तेरा घाटा"
  },
  {
    "input": "taera ghaata",
    "target": "तेरा घाटा"
  },
  {
    "input": "tera ghaataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "thera ghaataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "teera ghaataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "taera ghaataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "tera ghataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "thera ghataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "teera ghataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "taera ghataa",
    "target": "तेरा घाटा"
  },
  {
    "input": "kabir singh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabeer singh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabiir singh",
    "target": "कबीर सिंह"
  },
  {
    "input": "khabir singh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabir sing",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabeer sing",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabiir sing",
    "target": "कबीर सिंह"
  },
  {
    "input": "khabir sing",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabir sinh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabeer sinh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabiir sinh",
    "target": "कबीर सिंह"
  },
  {
    "input": "khabir sinh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabir singhh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabeer singhh",
    "target": "कबीर सिंह"
  },
  {
    "input": "kabiir singhh",
    "target": "कबीर सिंह"
  },
  {
    "input": "khabir singhh",
    "target": "कबीर सिंह"
  },
  {
    "input": "apna time aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa time aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana time aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa time aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taim aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taim aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taim aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taim aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna tym aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa tym aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana tym aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa tym aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taime aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taime aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taime aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taime aayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna time aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa time aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana time aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa time aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taim aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taim aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taim aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taim aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna tym aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa tym aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana tym aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa tym aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taime aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taime aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taime aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taime aaega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna time aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa time aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana time aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa time aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taim aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taim aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taim aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taim aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna tym aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa tym aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana tym aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa tym aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taime aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taime aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taime aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taime aayegaa",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna time ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa time ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana time ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa time ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taim ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taim ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taim ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taim ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna tym ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa tym ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana tym ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa tym ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apna taime ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apnaa taime ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apana taime ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "apanaa taime ayega",
    "target": "अपना टाइम आएगा"
  },
  {
    "input": "main tera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai tera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main thera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai thera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main teera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai teera boyfriend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main tera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai tera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main thera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai thera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main teera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai teera boyfrend",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main tera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai tera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main thera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai thera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "main teera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "mai teera boyfriende",
    "target": "मैं तेरा बॉयफ्रेंड"
  },
  {
    "input": "pehli nazar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli nazhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najhar mein",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli nazar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli nazhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najhar me",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli nazar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli nazhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli nazhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee nazhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii nazhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehli najhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "peheli najhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlee najhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "pehlii najhar men",
    "target": "पहली नज़र में"
  },
  {
    "input": "teri mitti",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teree mitti",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "theri mitti",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "terii mitti",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "tairee mitti",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teri mittee",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teree mittee",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "theri mittee",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "terii mittee",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "tairee mittee",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teri mitty",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teree mitty",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "theri mitty",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "terii mitty",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "tairee mitty",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teri mittii",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "teree mittii",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "theri mittii",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "terii mittii",
    "target": "तेरी मिट्टी"
  },
  {
    "input": "tairee mittii",
    "target": "तेरी मिट्टी"
  }
];

  it.each(testCases)(
    'translates "%s" to "%s"',
    ({ input, target }) => {
      const result = engine.transliterate(input);
      expect(result.transliterated).toBe(target);
    }
  );
  
  it('should have generated at least 4070 tests', () => {
    expect(testCases.length).toBe(4070);
  });
});
