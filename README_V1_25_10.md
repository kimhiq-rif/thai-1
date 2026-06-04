# Thai Trainer v1.25.10

## Share

- Added an icon-only share button in the hero actions.
- Uses the browser Web Share API when available.
- Falls back to copying the app link when native sharing is unavailable.

## Ownership Imprint

- Company name: `kimคcode`
- Added ownership metadata in `app.js`.
- Added ownership metadata in `manifest.webmanifest`.
- Added `data/ownership.json`.
- Added `NOTICE.md`.
- Exported local backup files now include the ownership imprint.

This imprint helps preserve attribution if the project files are copied. It is not legal advice and does not prevent someone from copying client-side code.

## Smoother Writing Board

- Handwriting now uses smoothed points and short quadratic curves instead of raw point-to-point lines.
- The pen line has round joins, round caps, small jitter filtering, and cleaner rendering on touch screens.
