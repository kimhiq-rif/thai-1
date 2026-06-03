import csv
import json
import re
import sys
from pathlib import Path

sys.path.insert(0, r"C:\Users\User\Documents\Codex\pydeps_thai")

from pythainlp.tokenize import syllable_tokenize
from pythainlp.tokenize import word_tokenize
from pythainlp.util import thai_word_tone_detector
from pythainlp.util.syllable import tone_detector


ROOT = Path(__file__).resolve().parents[1]
INPUT = ROOT / "data" / "not_drilled_current.json"
OUT_CSV = ROOT / "data" / "tone_autofill_v1_25_5.csv"
OUT_JSON = ROOT / "data" / "tone_autofill_v1_25_5.json"
OUT_UNRESOLVED = ROOT / "data" / "tone_autofill_unresolved_v1_25_5.csv"

TONE_MAP = {"m": "mid", "l": "low", "f": "falling", "h": "high", "r": "rising"}
THAI_RE = re.compile(r"[\u0E00-\u0E7F]+")
MANUAL_TONES = {
    "apkg_029": "low-falling",
    "uv19_0051": "mid-high-rising-rising-rising",
    "uv19_0092": "mid-falling-mid-rising-low-mid",
    "uv19_0097": "rising-falling-rising",
    "uv19_0130": "mid-mid-mid",
    "uv19_0156": "mid",
    "uv19_0158": "low",
    "uv19_0259": "mid-mid",
    "uv19_0243": "rising",
    "uv19_0247": "mid",
    "uv19_0346": "mid-mid-mid",
    "uv19_0367": "low-falling",
    "uv19_0380": "mid-rising-low-low",
}


def clean_thai(value):
    text = str(value or "").replace("ๆ", " ๆ")
    text = re.sub(r"[?!.…+()\[\]{}]", " ", text)
    text = re.sub(r"[/|]", " ", text)
    return re.sub(r"\s+", " ", text).strip()


def roman_expected_count(value):
    text = re.sub(r"\([^)]*\)", " ", str(value or ""))
    text = re.sub(r"[?!.…+]", " ", text)
    raw_parts = [part for part in re.split(r"[\s/]+", text) if part]
    parts = []
    for part in raw_parts:
        # Hyphens can mark syllable breaks, but also diphthong spelling such as neu-a/u-an.
        if re.search(r"^(?:u-an|neu-a|choo-ay)$", part, re.I):
            parts.append(part)
        else:
            parts.extend([p for p in part.split("-") if p])
    return len([part for part in parts if part.lower() not in {"v", "place"}])


def tone_string(detected):
    return "-".join(TONE_MAP[tone] for _, tone in detected if TONE_MAP.get(tone))


def detect_by_syllable(text):
    raw = syllable_tokenize(text, engine="dict")
    syllables = [part for part in raw if THAI_RE.search(part) or part == "ๆ"]
    detected = []
    for syllable in syllables:
        if syllable == "ๆ":
            if detected:
                detected.append((syllable, detected[-1][1]))
            continue
        tone = tone_detector(syllable.replace("หฺ", "ห"))
        detected.append((syllable, tone))
    return detected


def detect_by_words(text):
    detected = []
    for token in word_tokenize(text, engine="newmm"):
        if token == "ๆ":
            if detected:
                detected.append((token, detected[-1][1]))
            continue
        if not THAI_RE.search(token):
            continue
        detected.extend(thai_word_tone_detector(token))
    return [(syllable, tone) for syllable, tone in detected if TONE_MAP.get(tone)]


def detect_full(text):
    return [(syllable, tone) for syllable, tone in thai_word_tone_detector(text) if TONE_MAP.get(tone)]


def choose_detection(item, cleaned):
    item_id = item.get("id", "")
    if item_id in MANUAL_TONES:
        return [], MANUAL_TONES[item_id], "manual_review_exception"

    expected = roman_expected_count(item.get("roman", ""))
    full = detect_full(cleaned)
    syllable = detect_by_syllable(cleaned)
    words = detect_by_words(cleaned)
    candidates = [
        ("word_tokenize_then_detector", words),
        ("syllable_dict_then_tone_detector", syllable),
        ("thai_word_tone_detector_full", full),
    ]
    strings = {name: tone_string(detected) for name, detected in candidates}

    for preferred in ("word_tokenize_then_detector", "syllable_dict_then_tone_detector"):
        for name, detected in candidates:
            if name == preferred and strings[name] and list(strings.values()).count(strings[name]) >= 2:
                return detected, strings[name], name + "_consensus"

    expected_matches = [(name, detected) for name, detected in candidates if expected and len(detected) == expected and tone_string(detected)]
    if expected_matches:
        name, detected = expected_matches[0]
        return detected, tone_string(detected), name + "_expected_count"

    for name, detected in candidates:
        if tone_string(detected):
            return detected, tone_string(detected), name + "_fallback"

    return [], "", "unresolved"


def main():
    items = json.loads(INPUT.read_text(encoding="utf-8"))
    rows = []
    unresolved = []

    for item in items:
        cleaned = clean_thai(item.get("thai", ""))
        if not THAI_RE.search(cleaned):
            unresolved.append((item, "no_thai_after_clean"))
            continue

        try:
            detected, tone, method = choose_detection(item, cleaned)
            tones = tone.split("-") if tone else []
            syllables = [syllable for syllable, tone_code in detected if TONE_MAP.get(tone_code)]
        except Exception as exc:
            unresolved.append((item, str(exc)))
            continue

        if not tones:
            unresolved.append((item, "no_tones"))
            continue

        rows.append(
            {
                **item,
                "cleaned": cleaned,
                "syllables": "|".join(syllables),
                "detector_tones": "|".join(tone for _, tone in detected),
                "new_tone": "-".join(tones),
                "method": method,
            }
        )

    with OUT_CSV.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=[
                "id",
                "level",
                "thai",
                "roman",
                "hebrew",
                "english",
                "tone",
                "source",
                "cleaned",
                "syllables",
                "detector_tones",
                "new_tone",
                "method",
            ],
        )
        writer.writeheader()
        writer.writerows(rows)

    OUT_JSON.write_text(
        json.dumps({row["id"]: row["new_tone"] for row in rows}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    with OUT_UNRESOLVED.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.writer(handle)
        writer.writerow(["id", "thai", "roman", "reason"])
        for item, reason in unresolved:
            writer.writerow([item.get("id"), item.get("thai"), item.get("roman"), reason])

    print(
        json.dumps(
            {
                "input": len(items),
                "resolved": len(rows),
                "unresolved": len(unresolved),
                "unique_resolved": len({row["thai"] for row in rows}),
            },
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == "__main__":
    main()
