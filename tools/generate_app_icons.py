from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets" / "icons"
ASSETS.mkdir(parents=True, exist_ok=True)

NAVY = "#07111f"
NAVY_DARK = "#04101f"
CYAN = "#7dd3fc"
GLOW = "#38bdf8"
LETTER = "ก"
FONT = Path(r"C:\Windows\Fonts\tahomabd.ttf")


def hex_to_rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i : i + 2], 16) for i in (0, 2, 4))


def draw_icon(size):
    navy = hex_to_rgb(NAVY)
    dark = hex_to_rgb(NAVY_DARK)
    cyan = hex_to_rgb(CYAN)
    glow = hex_to_rgb(GLOW)
    image = Image.new("RGB", (size, size), navy)
    pixels = image.load()
    center = size / 2

    for y in range(size):
        for x in range(size):
            linear = (x + y) / (size * 2)
            dx = (x - center) / size
            dy = (y - center * 0.85) / size
            radial = max(0, 1 - ((dx * dx + dy * dy) ** 0.5) * 2.4)
            base = tuple(int(navy[i] * (1 - linear) + dark[i] * linear) for i in range(3))
            pixels[x, y] = tuple(min(255, int(base[i] + glow[i] * radial * 0.22)) for i in range(3))

    draw = ImageDraw.Draw(image)
    font = ImageFont.truetype(str(FONT), int(size * 0.86))
    bbox = draw.textbbox((0, 0), LETTER, font=font, anchor=None)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) / 2 - bbox[0]
    y = (size - text_h) / 2 - bbox[1] - size * 0.015

    shadow_font = font
    for radius, alpha in ((size * 0.018, 52), (size * 0.035, 30)):
        overlay = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        overlay_draw = ImageDraw.Draw(overlay)
        overlay_draw.text((x, y + size * 0.018), LETTER, font=shadow_font, fill=(0, 8, 20, alpha))
        overlay = overlay.filter(ImageFilter.GaussianBlur(radius=radius))
        image = Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")
        draw = ImageDraw.Draw(image)

    draw.text((x, y), LETTER, font=font, fill=cyan)
    return image


def write_svg():
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024" role="img" aria-label="Thai Trainer app icon">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{NAVY}"/>
      <stop offset="0.58" stop-color="#071b33"/>
      <stop offset="1" stop-color="{NAVY_DARK}"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="62%">
      <stop offset="0" stop-color="{GLOW}" stop-opacity="0.24"/>
      <stop offset="0.55" stop-color="{GLOW}" stop-opacity="0.07"/>
      <stop offset="1" stop-color="{GLOW}" stop-opacity="0"/>
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="26" stdDeviation="24" flood-color="#000814" flood-opacity="0.42"/>
      <feDropShadow dx="0" dy="0" stdDeviation="16" flood-color="{CYAN}" flood-opacity="0.20"/>
    </filter>
  </defs>
  <rect width="1024" height="1024" fill="url(#bg)"/>
  <rect width="1024" height="1024" fill="url(#glow)"/>
  <text x="512" y="512" text-anchor="middle" dominant-baseline="central"
        font-family="Tahoma, Noto Sans Thai, Leelawadee UI, sans-serif"
        font-size="880" font-weight="800" fill="{CYAN}" filter="url(#softShadow)">ก</text>
</svg>
"""
    (ASSETS / "thai-trainer-icon.svg").write_text(svg, encoding="utf-8")


def main():
    write_svg()
    for size in (180, 192, 512):
        draw_icon(size).save(ASSETS / f"thai-trainer-icon-{size}.png")
    draw_icon(512).save(ASSETS / "thai-trainer-maskable-512.png")


if __name__ == "__main__":
    main()
