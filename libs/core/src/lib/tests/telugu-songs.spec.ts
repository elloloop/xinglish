import { describe, it, expect, beforeEach } from 'vitest';
import { TransliterationEngine } from '../core';

describe('Telugu Famous Songs Pallavi Transliteration', () => {
  let engine: TransliterationEngine;

  beforeEach(() => {
    engine = new TransliterationEngine('telugu');
  });

  const testCases = [
  {
    "input": "aa ante amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a ante amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A ante amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha ante amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha ante amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amte amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amte amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amte amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amte amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amte amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amthe amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amthe amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amthe amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amthe amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amthe amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa anthey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a anthey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A anthey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha anthey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha anthey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa antey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a antey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A antey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha antey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha antey amalapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa ante amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a ante amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A ante amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha ante amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha ante amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amte amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amte amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amte amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amte amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amte amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amthe amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amthe amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amthe amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amthe amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amthe amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa anthey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a anthey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A anthey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha anthey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha anthey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa antey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a antey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A antey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha antey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha antey amalaapuram",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa ante amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a ante amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A ante amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha ante amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha ante amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amte amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amte amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amte amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amte amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amte amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amthe amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amthe amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amthe amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amthe amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amthe amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa anthey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a anthey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A anthey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha anthey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha anthey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa antey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a antey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A antey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha antey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha antey amalapuraam",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa ante amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a ante amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A ante amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha ante amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha ante amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amte amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amte amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amte amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amte amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amte amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amthe amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amthe amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amthe amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amthe amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amthe amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa anthey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a anthey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A anthey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha anthey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha anthey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa antey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a antey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A antey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha antey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha antey amalaapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa ante amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a ante amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A ante amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha ante amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha ante amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amte amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amte amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amte amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amte amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amte amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa amthe amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a amthe amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A amthe amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha amthe amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha amthe amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa anthey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a anthey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A anthey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha anthey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha anthey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aa antey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "a antey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "A antey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aha antey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "aaha antey amalapuramu",
    "target": "ఆ అంటే అమలాపురం"
  },
  {
    "input": "samaja varagamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamaja varagamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamajha varagamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samajha varagamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samaja varagamanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamaja varagamanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamajha varagamanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samajha varagamanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samaja varaghamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamaja varaghamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamajha varaghamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samajha varaghamana",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samaja varaghmanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamaja varaghmanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "saamajha varaghmanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "samajha varaghmanaa",
    "target": "సామజ వరగమన"
  },
  {
    "input": "rama chiluka",
    "target": "రామా చిలుక"
  },
  {
    "input": "raama chiluka",
    "target": "రామా చిలుక"
  },
  {
    "input": "raamaa chiluka",
    "target": "రామా చిలుక"
  },
  {
    "input": "rhama chiluka",
    "target": "రామా చిలుక"
  },
  {
    "input": "rama chilaka",
    "target": "రామా చిలుక"
  },
  {
    "input": "raama chilaka",
    "target": "రామా చిలుక"
  },
  {
    "input": "raamaa chilaka",
    "target": "రామా చిలుక"
  },
  {
    "input": "rhama chilaka",
    "target": "రామా చిలుక"
  },
  {
    "input": "rama chilika",
    "target": "రామా చిలుక"
  },
  {
    "input": "raama chilika",
    "target": "రామా చిలుక"
  },
  {
    "input": "raamaa chilika",
    "target": "రామా చిలుక"
  },
  {
    "input": "rhama chilika",
    "target": "రామా చిలుక"
  },
  {
    "input": "rama chilukaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "raama chilukaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "raamaa chilukaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "rhama chilukaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "rama chilakaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "raama chilakaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "raamaa chilakaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "rhama chilakaa",
    "target": "రామా చిలుక"
  },
  {
    "input": "ni kallalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nee kallalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nii kallalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ne kallalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ni kallaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nee kallaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nii kallaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ne kallaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ni kaLlaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nee kaLlaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nii kaLlaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ne kaLlaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ni kalalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nee kalalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nii kalalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ne kalalo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ni kalaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nee kalaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "nii kalaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "ne kalaloo",
    "target": "నీ కళ్ళలో"
  },
  {
    "input": "jala jala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalaa patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalaa patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalaa patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalaa patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalla patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalla patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalla patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalla patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jhaala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jhaala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jhaala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jhaala patam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalaa paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalaa paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalaa paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalaa paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalla paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalla paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalla paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalla paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jhaala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jhaala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jhaala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jhaala paatam",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalaa paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalaa paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalaa paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalaa paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalla paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalla paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalla paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalla paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jhaala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jhaala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jhaala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jhaala paatham",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalaa paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalaa paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalaa paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalaa paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalla paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalla paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalla paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalla paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jhaala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jhaala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jhaala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jhaala paathamu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalaa paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalaa paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalaa paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalaa paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jalla paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jalla paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jalla paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jalla paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jala jhaala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalaa jhaala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jalla jhaala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "jhaala jhaala paathambu",
    "target": "జల జల పాతం"
  },
  {
    "input": "evariki vare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki vare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki vare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki vare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evariki vaare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki vaare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki vaare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki vaare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evariki vaarey",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki vaarey",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki vaarey",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki vaarey",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evariki vaaree",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki vaaree",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki vaaree",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki vaaree",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evariki ware",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki ware",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki ware",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki ware",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evariki waare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevariki waare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "evvariki waare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "yevvariki waare",
    "target": "ఎవరికి వారే"
  },
  {
    "input": "marugelara",
    "target": "మరుగెలరా"
  },
  {
    "input": "marugelaara",
    "target": "మరుగెలరా"
  },
  {
    "input": "marugelaaraa",
    "target": "మరుగెలరా"
  },
  {
    "input": "marugelaraa",
    "target": "మరుగెలరా"
  },
  {
    "input": "marugelhara",
    "target": "మరుగెలరా"
  },
  {
    "input": "mutyamanta pasupu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamamta pasupu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "muthyamantha pasupu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantha pasupu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantoo pasupu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamanta paspu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamamta paspu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "muthyamantha paspu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantha paspu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantoo paspu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamanta pasupuu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamamta pasupuu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "muthyamantha pasupuu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantha pasupuu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantoo pasupuu",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamanta pasupoo",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamamta pasupoo",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "muthyamantha pasupoo",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantha pasupoo",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "mutyamantoo pasupoo",
    "target": "ముత్యమంత పసుపు"
  },
  {
    "input": "andamaina anubhavam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdamaina anubhavam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andhamaina anubhavam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdhameina anubhavam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andameina anubhavam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andamaina anubahvam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdamaina anubahvam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andhamaina anubahvam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdhameina anubahvam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andameina anubahvam",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andamaina anubhavamu",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdamaina anubhavamu",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andhamaina anubhavamu",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdhameina anubhavamu",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andameina anubhavamu",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andamaina anubhavamoo",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdamaina anubhavamoo",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andhamaina anubhavamoo",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "amdhameina anubhavamoo",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "andameina anubhavamoo",
    "target": "అందమైన అనుభవం"
  },
  {
    "input": "palleku podam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekuu podam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "paleku podam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekku podam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "palleku podhaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekuu podhaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "paleku podhaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekku podhaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "palleku podaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekuu podaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "paleku podaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekku podaam",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "palleku podham",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekuu podham",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "paleku podham",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "pallekku podham",
    "target": "పల్లెకు పోదాం"
  },
  {
    "input": "o papa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo papa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh papa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh papa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapaa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapaa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapaa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapaa lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapah lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapah lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapah lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapah lali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o papa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo papa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh papa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh papa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapaa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapaa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapaa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapaa laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapah laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapah laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapah laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapah laali",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o papa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo papa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh papa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh papa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapaa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapaa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapaa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapaa laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapah laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapah laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapah laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapah laalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o papa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo papa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh papa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh papa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapaa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapaa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapaa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapaa lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapah lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapah lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapah lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapah lalee",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o papa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo papa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh papa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh papa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapaa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapaa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapaa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapaa laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "o paapah laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oo paapah laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "oh paapah laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "ooh paapah laaley",
    "target": "ఓ పాపా లాలీ"
  },
  {
    "input": "jagamantha kutumbam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbaam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbaam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbaam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbaam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutoombam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutoombam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutoombam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutoombam nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbamu nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbamu nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbamu nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbamu nadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbaam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbaam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbaam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbaam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutoombam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutoombam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutoombam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutoombam naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbamu naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbamu naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbamu naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbamu naadi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbaam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbaam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbaam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbaam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutoombam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutoombam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutoombam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutoombam naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbamu naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbamu naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbamu naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbamu naadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbaam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbaam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbaam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbaam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutoombam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutoombam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutoombam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutoombam naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbamu naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbamu naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbamu naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbamu naadee",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbaam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbaam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbaam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbaam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutoombam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutoombam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutoombam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutoombam nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamantha kutumbamu nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jagamanta kutumbamu nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamantha kutumbamu nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "jaghamanta kutumbamu nadhi",
    "target": "జగమంత కుటుంబం నాది"
  },
  {
    "input": "nannu dochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vanela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannelaa dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vennela dorasani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vanela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannelaa dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vennela dorasaani",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vanela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannelaa dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vennela dorasaanee",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vanela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vannelaa dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu doochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu doochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo doochukundute vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukundutey vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukundutey vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukundutey vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannu dochukumdate vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nanu dochukumdate vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "nannoo dochukumdate vennela dorasaany",
    "target": "నన్ను దోచుకుందుటే వన్నెల దొరసాని"
  },
  {
    "input": "mounamelanoyi ee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapurani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraani reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuranee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraanee reyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapurani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraani reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuranee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraanee reeyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapurani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraani reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuranee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraanee reyyi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapurani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraani reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuranee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraanee reyyee",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapurani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraani reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuranee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi i marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi i marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey i marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii i marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi ii marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi ii marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey ii marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii ii marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyi yee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanooyi yee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoey yee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "mounamelanoyii yee marapuraanee reyhi",
    "target": "మౌనమెలనోయి ఈ మరపురాని రేయి"
  },
  {
    "input": "telusa manasa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusa manasa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusaa manasa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusaa manasa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusah manasa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusa manasaa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusa manasaa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusaa manasaa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusaa manasaa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusah manasaa",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusa manasah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusa manasah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusaa manasah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusaa manasah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusah manasah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusa manasaah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusa manasaah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusaa manasaah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "thelusaa manasaah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "telusah manasaah",
    "target": "తెలుసా మనసా"
  },
  {
    "input": "okate jananam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okate maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatee maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okathey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatey maranam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okate maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatee maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okathey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatey maranaam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okate marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatee marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okathey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatey marnam",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okate maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatee maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okathey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate janamam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee janamam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey janamam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey janamam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananm okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananm okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananm okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananm okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okate jananaam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatee jananaam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okathey jananaam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "okatey jananaam okatey maranamu",
    "target": "ఒకటే జననం ఒకటే మరణం"
  },
  {
    "input": "chinuku chinuku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku andelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinuku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku amdhalatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinuku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku andalato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinuku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku andelathoo",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinuku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku andhelatho",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinuku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinuku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinuku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinukku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinukku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinukku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinuku chinooku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinukku chinooku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "chinooku chinooku andhelato",
    "target": "చినుకు చినుకు అందెలతో"
  },
  {
    "input": "nuvvu vastavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvu vastavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuv vastavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvoo vastavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvoo vastavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvu vasthavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvu vasthavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuv vasthavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvoo vasthavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvoo vasthavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvu vasthaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvu vasthaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuv vasthaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvoo vasthaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvoo vasthaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvu vastaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvu vastaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuv vastaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvoo vastaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvoo vastaavani",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvu vastaavanee",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvu vastaavanee",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuv vastaavanee",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvvoo vastaavanee",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "nuvoo vastaavanee",
    "target": "నువ్వు వస్తావని"
  },
  {
    "input": "neevu leka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa neenu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nienu lenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa neenu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nienu leenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa neenu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu leka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu leka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu leka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu laeka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu laeka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu laeka nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "neevu lekaa nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nivu lekaa nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "nevu lekaa nienu laenu",
    "target": "నీవు లేక నేను లేను"
  },
  {
    "input": "arere arere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manase jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasey jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasae jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasay jare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manase jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasey jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasae jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasay jaare",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manase jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasey jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasae jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasay jaarey",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manase jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasey jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasae jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere arere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere arere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey arere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray arere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere araere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere araere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey araere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray araere manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areyrey manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areyrey manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areyrey manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areyrey manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "arere areray manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "araere areray manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areyrey areray manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "areray areray manasay jaaray",
    "target": "అరెరే అరెరే మనసే జారే"
  },
  {
    "input": "sahasam swasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swaasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swaasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swaasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam svasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam svasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam svasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam shvasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam shvasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam shvasaga sagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swaasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swaasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swaasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam svasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam svasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam svasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam shvasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam shvasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam shvasaga saagipo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swaasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swaasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swaasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam svasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam svasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam svasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam shvasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam shvasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam shvasaga saagipoo",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam swaasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam swaasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam swaasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam svasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam svasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam svasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "sahasam shvasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "saahasam shvasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  },
  {
    "input": "shahasam shvasaga saagipoh",
    "target": "సాహసం శ్వాసగా సాగిపో"
  }
];

  it.each(testCases)(
    'translates "%s" to "%s"',
    ({ input, target }) => {
      const result = engine.transliterate(input);
      expect(result.transliterated).toBe(target);
    }
  );
  
  it('should have generated at least 1758 tests', () => {
    expect(testCases.length).toBe(1758);
  });
});
