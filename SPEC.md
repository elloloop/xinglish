# The Xinglish Convention — Indian languages in English script

**Version 0.1 — draft for review by native speakers of each language.**

## The gap this fills

A billion people write Indian languages in English letters every day — in
chats, searches, song titles, shop signs — and there is **no standard for how**.
The systems that exist were built for other jobs:

| system | built for | why it fails everyday use |
|---|---|---|
| ISO 15919 | libraries, scholarship | `ā ī ū ṭ ḍ ṣ ṁ` — unreadable untrained, untypeable on a phone |
| IAST | Sanskrit academia | same diacritics, Sanskrit-first |
| Hunterian | Government of India signage | no diacritics but ad-hoc; applied inconsistently for a century |
| ITRANS / Harvard-Kyoto / Velthuis | ASCII data entry | `aa`, `RR`, `.t`, case-significant — input encodings, ugly to read |
| chat spelling | everyone, daily | works — but every writer invents their own |

Xinglish standardises the last row: the spelling people already converge on,
made consistent — **one convention across all Indian languages**, so `aa`
always means the same sound whether the word is Hindi, Telugu or Tamil.

## Two profiles, one convention

**`xinglish` (the display profile).** How a word is *written to be read*:
no diacritics, no significant capitals, nothing you cannot type on any
keyboard. Lossy **by design** — it writes what an English-literate reader
needs to say the word acceptably, not what a linguist needs to reconstruct
the script. `बतख़ → batakh`, `జుగాడ్ → jugaad`, `బాతు → baatu`.

**`xinglish-input` (the typing profile).** What the transliteration engine in
this repository accepts: the display profile **plus** lossless extensions
(`T`/`D` for retroflex, `R` for ऋ, capital vowels for length) so every script
character stays reachable while typing. Anything valid in the display profile
is valid input; the extensions are never *shown* to a reader.

Rule of thumb: **readers see `xinglish`; keyboards accept `xinglish-input`;
databases that need reversibility store the script itself** — romanization is
a rendering, never the source of truth.

## Principles

1. **Read-first.** If an English-literate reader says the romanized word
   aloud and a native speaker recognises it, the spelling is correct.
2. **Plain keys only.** The 26 lowercase letters. No diacritics, no
   apostrophes for sounds, no meaningful capitals in the display profile.
3. **One convention for every language.** `kh` is the same aspirate in
   Hindi, Bengali and Gujarati; `zh` is ழ wherever Tamil or Malayalam needs
   it. A reader learns the convention once.
4. **Lossy where English is deaf.** English cannot hear dental त versus
   retroflex ट; the display profile writes both `t` and does not pretend
   otherwise. The input profile and the script preserve the difference.
5. **Follow entrenched spellings.** Where a de-facto spelling is universal
   (`namaste`, `chai`, `biryani`, `jugaad`), the convention matches it rather
   than fighting it.

## The display profile

### Vowels

| sound | xinglish | ISO 15919 | devanagari | telugu | tamil | notes |
|---|---|---|---|---|---|---|
| short a | `a` | a | अ | అ | அ | |
| long aa | `aa` | ā | आ | ఆ | ஆ | |
| short i | `i` | i | इ | ఇ | இ | |
| long i | `ee` | ī | ई | ఈ | ஈ | `ee` reads right in English; input also accepts `ii` |
| short u | `u` | u | उ | ఉ | உ | |
| long u | `oo` | ū | ऊ | ఊ | ஊ | input also accepts `uu` |
| short e | `e` | e | — | ఎ | எ | Dravidian short e |
| long e | `e` | ē | ए | ఏ | ஏ | length collapses; context carries it |
| ai | `ai` | ai | ऐ | ఐ | ஐ | |
| short o | `o` | o | — | ఒ | ஒ | |
| long o | `o` | ō | ओ | ఓ | ஓ | |
| au | `au` | au | औ | ఔ | ஔ | |
| vocalic r | `ri` | r̥ | ऋ | ఋ | — | `rishi`, `riddhi` — the entrenched spelling |

### Consonants

| group | xinglish | ISO 15919 | examples |
|---|---|---|---|
| velars | `k kh g gh ng` | k kh g gh ṅ | `khaana`, `ghar` |
| palatals | `ch chh j jh ny` | c ch j jh ñ | `chai`, `chhota`, `jhadi` |
| retroflex | `t th d dh n` | ṭ ṭh ḍ ḍh ṇ | collapsed with dentals — see principle 4 |
| dentals | `t th d dh n` | t th d dh n | `teen`, `dhobi` |
| labials | `p ph b bh m` | p ph b bh m | `phal`; `f` allowed where the sound is genuinely /f/ |
| approximants | `y r l v` | y r l v | `w` accepted for व where entrenched (`pakwan`) |
| sibilants | `sh sh s` | ś ṣ s | श and ष both `sh` |
| aspirate | `h` | h | |
| tamil/malayalam ḻ | `zh` | ḻ | `tamizh`, `kozhikode` — entrenched and distinctive |
| retroflex ḷ | `l` | ḷ | collapsed |
| क्ष ज्ञ | `ksh` `gy` | kṣ jñ | `lakshmi`, `gyaan` |

### Nukta, nasals, and marks

| script | xinglish | example |
|---|---|---|
| क़ ख़ ग़ ज़ फ़ | `q kh g z f` | `batakh` बतख़, `zameen`, `fasal` |
| anusvara before labial | `m` | `pampa` |
| anusvara elsewhere | `n` | `hindi` हिंदी, `bandar` |
| chandrabindu | `n` | `haan` हाँ |
| visarga | `h` | `dukhah` |
| gemination | doubled letter | `pakka`, `amma` |

### Disambiguation

When two vowels meet across a syllable boundary and would read as a digraph,
a hyphen separates them: `a-i` where `ai` would mislead. Used sparingly;
most words never need it.

## Worked examples

| script | xinglish | not | why not |
|---|---|---|---|
| नमस्ते | `namaste` | namastē | no diacritics |
| बतख़ | `batakh` | batakha | no ghost schwa: Hindi drops the final a |
| जुगाड़ | `jugaad` | jugāṛ | entrenched spelling wins |
| चाचा | `chacha` | cācā | `ch`, not ISO `c` |
| బాతు | `baatu` | bātu | `aa`, not ā |
| బాబాయి | `baabaayi` | bābāyi | |
| தமிழ் | `tamizh` | tamiḻ | `zh` is the entrenched marker |
| காலை உணவு | `kaalai unavu` | kālai uṇavu | |
| চা | `cha` | cā | |

Final-vowel handling follows the language, not the script: Hindi deletes the
final inherent a (`batakh`, not `batakha`); Telugu, Tamil, Kannada and
Malayalam keep their final vowels (`baatu`, `unavu`).

## The input profile, in one paragraph

Everything above, plus the lossless extensions this repository's engine
already implements: capital `T Th D Dh N` for retroflex, `R` for ऋ, `ii/uu`
as alternatives to `ee/oo`, capital vowels for length, and per-language rule
tables under `libs/shared/src/lib/languages/`. The engine's job is Latin →
script; this spec's display profile is the recommended script → Latin
rendering, and a `romanize()` implementing it is the natural next library
surface.

## Status and governance

Draft. The tables above cover the sounds shared across the eight supported
languages plus the marks that differ; **each language section must be signed
off by a native speaker before this version is tagged** — the same review
gate the Gloss dictionary applies to its content. Proposed changes are issues
in this repository; the spec is versioned and consumers pin a version.

First consumer: **Gloss** (TinyKite's picture dictionary) stores
`romanization_scheme: "xinglish"` per entry and renders the display profile
beside every Indic headword.
