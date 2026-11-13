# Instructor naming map — decision record (2026-11-13)

**Official name (Josue, 6:00 AM ET Nov 13, 2026):** **MNQ Professor**

This is the single official name on English and Spanish pages. It replaces Professor, Moose, Teaching Avatar, Avatar Docente, and Profesor Virtual. Spanish pages use "MNQ Professor" too (not a translated persona name).

Applied on draft PR #7 (`fix/university-es-presentation-readiness`) after rebasing onto `main` `85248678`. Candidate/prototype HTML, voice-file README, and media filenames were **not** renamed (see leftovers). No unrelated use of the word "professor" was found on live curriculum pages.

## What was renamed (user-facing)

| File | Change |
|---|---|
| `index.html` | "Teaching Avatar" and ES "Avatar bilingüe" → "MNQ Professor" |
| `platform.html` | Visible title, captions, alt text, version blurb, EN/ES i18n strings, lesson copy, and matching `VOICE_MAP` keys: Moose / the Professor / el Profesor → "MNQ Professor" |
| `phase-1/index.html` | Nav "Teaching Avatar · Simulator" → "MNQ Professor · Simulator" |
| `phase-1/module-8-simulation.html` | "Teaching Avatar" link text → "MNQ Professor" |
| `phase-1/es/index.html` | "Avatar Docente · Simulador" → "MNQ Professor · Simulador" |
| `phase-1/es/module-8-simulation.html` | "Profesor Virtual" link text → "MNQ Professor" |

## Judgment calls

1. **"Avatar bilingüe"** on the homepage ES entry (`Español · Avatar bilingüe y simulador`) is not in the five-name list verbatim, but it is the Spanish label for the same product. Renamed to "MNQ Professor" so one official name is used. Josue can override the wording.
2. **Dual-name blurbs** such as "the Professor, Moose in human form" / "el Profesor, Moose en forma humana" were collapsed to "MNQ Professor" rather than left as "MNQ Professor, MNQ Professor in human form".
3. **Recorded audio still says "Moose."** `VOICE_MAP` keys were updated to match the new on-page transcripts so lookups still hit the same `voice/*.mp3` files. The spoken greeting videos (`professor-greeting-v2-EN.mp4`, `professor-greeting-v2-ES.mp4`) and the mp3s themselves were not re-recorded. Until new clips are approved, students will hear "Moose" while reading "MNQ Professor". **Needs a founder decision** on re-recording.
4. **Candidate / prototype HTML** (`avatar-prototype-candidate-2026-11-01.html`, `platform-library-candidate-2026-11-01.html`, `platform-voice-candidate-2026-11-02.html`, `platform-voice2-candidate-2026-11-02.html`) still use the old names. They are dated concept files, not the live Phase I / platform pages, and were left unchanged on purpose.
5. **`voice/README.txt`** still says "Professor voice clips" / "the Professor greeting videos". Internal production note, not a student-facing page. Left unchanged.
6. **Filenames and code identifiers left unchanged:** `professor-greeting-v2-EN.mp4`, `professor-greeting-v2-ES.mp4`, CSS class `mooseCap`, element ids `profAvatar` / `profGreeting`. These are not visible copy.
7. **Generic animal example left unchanged:** the DeepAI prompt `'a friendly cartoon moose in a wizard hat, reading a book.'` is not the product persona (lowercase "moose").
8. **"Comentarios del instructor" / "Ask your instructor"** and similar generic "instructor" wording were left as-is — they are role descriptions, not the persona's name.
9. No live-page use of "professor" / "profesor" as a generic academic word was found that needed to be kept. All live-page "Professor" / "Profesor" hits were the persona.

## Intentional leftovers (old names still present)

| Location | Why left |
|---|---|
| `M&Q University — Integrated Platform (single HTML file).html` title | Bounce page (noindex, instant redirect to platform.html). Title left as "Teaching Avatar (moved)" so PR #6's favicon `<link>` on the adjacent line still merges cleanly in both orders. |
| `*-candidate-*.html` (4 files) | Archived concept prototypes, not live nav targets |
| `voice/README.txt` | Internal note about recordings |
| `professor-greeting-v2-EN.mp4` / `professor-greeting-v2-ES.mp4` (filenames + spoken audio) | Asset names; audio still says Moose until re-recorded |
| `voice/*.mp3` (spoken audio) | Same — transcripts on the page changed, audio did not |
| CSS `mooseCap`, ids `profAvatar` / `profGreeting` | Non-visible identifiers |

This document previously catalogued 76 matching lines before the official name was chosen. It is now the decision record for the rename applied on this branch, not a "do not apply" catalog.
