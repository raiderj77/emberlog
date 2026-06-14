from PIL import Image, ImageDraw, ImageFont
import os

OUT = "public"
ICONS = os.path.join(OUT, "icons")
os.makedirs(ICONS, exist_ok=True)

INK = (22, 19, 30)        # deep eggplant background
INK2 = (32, 26, 46)
EMBER = (214, 69, 15)
EMBER_HI = (240, 110, 40)
GOLD = (220, 164, 35)
CREAM = (236, 232, 241)

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
FONT_R = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

FLAME = [
    (0.50, 0.06), (0.63, 0.27), (0.565, 0.40), (0.70, 0.55), (0.725, 0.72),
    (0.62, 0.89), (0.50, 0.94), (0.38, 0.89), (0.275, 0.72), (0.345, 0.55),
    (0.435, 0.46), (0.40, 0.29),
]

def scaled(poly, size, cx=0.5, cy=0.52, scale=1.0, off=(0, 0)):
    pts = []
    for x, y in poly:
        nx = cx + (x - 0.5) * scale
        ny = cy + (y - 0.52) * scale
        pts.append((nx * size + off[0], ny * size + off[1]))
    return pts

def rounded_bg(size, radius_frac=0.22, full_bleed=False):
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # vertical-ish gradient
    for y in range(size):
        t = y / size
        r = int(INK[0] + (INK2[0] - INK[0]) * t)
        g = int(INK[1] + (INK2[1] - INK[1]) * t)
        b = int(INK[2] + (INK2[2] - INK[2]) * t)
        d.line([(0, y), (size, y)], fill=(r, g, b, 255))
    if not full_bleed:
        # mask to rounded rect
        mask = Image.new("L", (size, size), 0)
        md = ImageDraw.Draw(mask)
        rad = int(size * radius_frac)
        md.rounded_rectangle([0, 0, size - 1, size - 1], radius=rad, fill=255)
        img.putalpha(mask)
    return img

def draw_flame(img, size, scale=1.0, off=(0, 0)):
    d = ImageDraw.Draw(img)
    outer = scaled(FLAME, size, scale=scale, off=off)
    d.polygon(outer, fill=EMBER + (255,))
    inner = scaled(FLAME, size, scale=scale * 0.62, off=(off[0], off[1] + size * 0.06 * scale))
    d.polygon(inner, fill=GOLD + (255,))

def make_icon(size, fname, full_bleed=False, flame_scale=0.86):
    img = rounded_bg(size, full_bleed=full_bleed)
    draw_flame(img, size, scale=flame_scale)
    img.save(os.path.join(ICONS, fname))
    print("wrote", fname, size)

# Standard + maskable + apple
make_icon(192, "icon-192.png", full_bleed=False, flame_scale=0.86)
make_icon(512, "icon-512.png", full_bleed=False, flame_scale=0.86)
make_icon(512, "maskable-512.png", full_bleed=True, flame_scale=0.6)   # safe zone padding
make_icon(180, "apple-touch-icon.png", full_bleed=True, flame_scale=0.84)

# Favicon (multi-size .ico)
fav = rounded_bg(64, full_bleed=True)
draw_flame(fav, 64, scale=0.9)
fav.save(os.path.join(OUT, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48)])
print("wrote favicon.ico")

# OG image 1200x630
W, H = 1200, 630
og = Image.new("RGBA", (W, H), INK + (255,))
d = ImageDraw.Draw(og)
for y in range(H):
    t = y / H
    r = int(INK[0] + (INK2[0] - INK[0]) * t)
    g = int(INK[1] + (INK2[1] - INK[1]) * t)
    b = int(INK[2] + (INK2[2] - INK[2]) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b, 255))
# ember glow top-right
glow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse([W - 520, -260, W + 160, 420], fill=EMBER + (70,))
from PIL import ImageFilter
glow = glow.filter(ImageFilter.GaussianBlur(120))
og.alpha_composite(glow)

# flame mark (left)
flame_img = Image.new("RGBA", (260, 260), (0, 0, 0, 0))
draw_flame(flame_img, 260, scale=0.95)
og.alpha_composite(flame_img, (96, 150))

# text
f_title = ImageFont.truetype(FONT, 96)
f_tag = ImageFont.truetype(FONT_R, 38)
f_kick = ImageFont.truetype(FONT, 30)
d.text((400, 175), "EmberLog", font=f_title, fill=CREAM)
d.text((404, 290), "The free BBQ cook log", font=f_tag, fill=(200, 192, 205))
d.text((404, 338), "& pitmaster's toolkit", font=f_tag, fill=(200, 192, 205))
d.text((404, 420), "LOG · PLAN · NAIL IT NEXT TIME", font=f_kick, fill=EMBER_HI)
og.convert("RGB").save(os.path.join(OUT, "og.png"), quality=90)
print("wrote og.png")

# ads.txt placeholder (for AdSense later)
with open(os.path.join(OUT, "ads.txt"), "w") as f:
    f.write("# Add your AdSense line after approval, e.g.:\n# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n")
print("wrote ads.txt")
print("DONE")
