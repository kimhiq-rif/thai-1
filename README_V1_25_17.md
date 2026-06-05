# Thai Trainer v1.25.17

## Level Classifier Draft

- Added `tools/level_classifier.js`.
- The classifier can score existing `WORDS` and future new word records.
- It returns `suggestedLevel`, `confidence`, `tags`, and `reason`.
- This version is dry-run only: it does not change the `level` field in `WORDS`.

## How To Run

```bash
node tools/level_classifier.js app.js level-classifier-report
```

## New Word Example

```js
const { classifyNewWord } = require('./tools/level_classifier');
console.log(classifyNewWord({
  thai: 'พูดไทยได้ไหม',
  roman: 'puud thai dai mai',
  hebrew: 'אתה יכול לדבר תאילנדית?',
  english: 'Can you speak Thai?'
}));
```

## Included From v1.25.16

- Alternating recorded voice cheers.
