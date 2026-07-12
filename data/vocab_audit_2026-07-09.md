# Vocabulary QA audit — 2026-07-09

6 background agents audited all 571 `WORDS` items (translit / spelling / tone / meaning) against Thai tone rules + Wiktionary/thai-language.com and internal consistency. ~87 issues found (~60 high-confidence). Overwhelmingly **tone-label errors** following deterministic Thai tone rules; the romanization digit "4" (high) was never used in the file — a systematic high-tone blind spot.

Legend: conf = high / med / low. Apply order: high first.

## Tone-label fixes

| id | thai | from → to | conf |
|----|------|-----------|------|
| l1_018 | เนื้อ | falling → high | high |
| l1_020 | แมว | rising → mid | high |
| uv19_0001 | สำคัญ | mid-mid → rising-mid | high |
| uv19_0003 | หวี | mid → rising | high |
| l4_001 | พูดเล่น | falling-mid → falling-falling | high |
| l4_002 | ล้อเล่น | high-mid → high-falling | high |
| uv19_0006 | น้ำ | mid → high | high |
| uv19_0018 | ท้อง | falling → high | high |
| uv19_0029 | ร้อน | mid → high | high |
| uv19_0077 | พริก | mid → high | high |
| uv19_0050 | ผม/ฉันรักคุณ | (รัก) …-mid-mid → …-high-mid | high |
| uv19_0065 | เช่นกัน | mid-mid → falling-mid | high |
| uv19_0086 | พอไหม | falling-rising → mid-rising | high |
| uv19_0088 | ทบทวน | falling-mid → high-mid | high |
| uv19_0037 | ตีหมา | mid-mid → mid-rising | high |
| uv19_0010 | ว่ายน้ำ | falling-mid → falling-high | high |
| uv19_0079 | น้ำตาล | mid-mid → high-mid | high |
| uv19_0060 | ข้าวเหนียวมะม่วง | falling-falling-mid-falling → falling-rising-high-falling | high |
| uv19_0117 | ลบ | falling → high | high |
| uv19_0178 | เจอกัน | low-mid → mid-mid | high |
| uv19_0227 | รถ | falling → high | high |
| uv19_0242 | เล็ก | falling → high | high |
| uv19_0217 | กาแฟ | mid-falling → mid-mid | high |
| uv19_0281 | มั่นใจ | mid-mid → falling-mid | high |
| uv19_0280 | หวัง | mid → rising | high |
| uv19_0276 | ร้องไห้ | mid-falling → high-falling | high |
| uv19_0213 | สับปะรด | low-low-falling → low-low-high | high |
| uv19_0228 | รถเมล์ | falling-mid → high-mid | high |
| uv19_0229 | รถไฟ | falling-mid → high-mid | high |
| uv19_0298 | เห็น | mid → rising | high |
| uv19_0303 | นักเรียน | low-mid → high-mid | high |
| uv19_0305 | เจ้าของ | falling-mid → falling-rising | high |
| uv19_0309 | ในหลวง | mid-mid → mid-rising | high |
| uv19_0310 | พระเจ้าอยู่หัว | mid-falling-low-mid → high-falling-low-rising | high |
| uv19_0312 | ชาวเผ่า | mid-mid → mid-low | high |
| uv19_0314 | ภูเขา | mid-mid → mid-rising | high |
| uv19_0316 | ตลาดนัด | low-mid → low-high | high |
| uv19_0318 | พักผ่อน | low-low → high-low | high |
| uv19_0323 | หลง | mid → rising | high |
| uv19_0335 | สมาชิก | low-mid-falling → low-mid-high | high |
| uv19_0337 | น้ำมัน | mid-mid → high-mid | high |
| uv19_0338 | ปั๊มน้ำมัน | falling-mid-mid → high-high-mid | high |
| uv19_0385 | ดีใจที่ได้เจอ | …-falling-low → …-falling-mid | high |
| uv19_0002 | ขนม | mid → low-rising | med |
| uv19_0004 | มาครับ | mid → mid-high | med |
| uv19_0030 | ไหม | mid → rising | med |
| uv19_0031 | ใช่ไหม | falling-mid → falling-rising | med |
| uv19_0069 | รู้ไหม | high-mid → high-rising | med |
| uv19_0047 | นิดหน่อย | low → high-low | med |
| uv19_0294 | สมอง | mid-mid → low-rising | med |
| uv19_0295 | สมองไม่ทำงาน | mid-mid-falling-mid-mid → low-rising-falling-mid-mid | med |
| uv19_0277 | อิจฉา | low-mid → low-rising | med |
| uv19_0278 | โมโห | mid-mid → mid-rising | med |
| uv19_0291 | นามสกุล | mid-mid-mid → mid-low-mid | med |
| uv19_0224 | เอาอันนี้ | mid-low-high → mid-mid-high | med |
| uv19_0282 | น่าสงสาร | falling-rising-mid → falling-rising-rising | med |
| uv19_0329 | อาหารทะเล | (misaligned) → mid-rising-high-mid | med |
| uv19_0076 | พูดไทยได้ไหม | 3 tones → falling-mid-falling-rising | med |
| uv19_0046 | อร่อย | mid-low → low-low | low |

## Romanization fixes (real phonetic errors, not style)

| id | thai | from → to | conf |
|----|------|-----------|------|
| uv19_0160 | เหงื่อ | heua → ngeua | high |
| uv19_0161 | เหงื่อออก | heua-awk → ngeua-awk | high |
| uv19_0121 | แล้วแต่คุณ | laew-dtua kun → laew-dtae kun | high |
| uv19_0123 | ตอนนี้ | dtua-ni → dtawn-nii | high |
| uv19_0127 | ตอนเช้า | dtan-chao → dtawn-chao | med |
| uv19_0128 | ตอนเที่ยง | dtan-tiang → dtawn-tiang | med |
| uv19_0129 | ตอนเย็น | dtan-yen → dtawn-yen | med |
| uv19_0130 | ตอนกลางคืน | dtan-klang-keun → dtawn-klang-keun | med |
| uv19_0125 | พรุ่งนี้ | pru-ngii → phrung-nii | med |
| l4_033 | วัฒนธรรม | wat tha tham → wat tha na tham | med |
| uv19_0063 | เรียกว่าอะไร | (drops ว่า) → riag waa a-rai | med |
| uv19_0196 | เพราะว่า | prow-wa → phro-waa | low |

## Meaning fixes (low confidence — owner call)

| id | thai | field | from → to | conf |
|----|------|-------|-----------|------|
| uv19_0066 | ยินดี | hebrew | ברוך הבא → שמח / נעים מאוד | low |
| uv19_0153 | ใกล้ | hebrew | קרוב (טון נמוך) → קרוב (טון יורד) | low |
| uv19_0154 | ไกล | hebrew | רחוק (טון גבוה) → רחוק (טון אמצעי) | low |
