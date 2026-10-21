"""Derive missing Jelly Jungle flavour renders by recolouring the cup body
of an existing render. The lid (an ellipse) is always left untouched."""
import sys, colorsys
from PIL import Image

SRC = sys.argv[1]; OUT = sys.argv[2]

JOBS = {
    # name: (source, lid (cx, cy, rx, ry), hue-range test, transform)
    "cup-vanilla": ("lemon1.png", (248, 235, 66, 134),
        lambda h: 0.09 <= h <= 0.19,
        lambda h, s, v: (0.11, s * 0.28, min(1, v * 1.04 + 0.03))),
    "cup-mint": ("kiwi1.png", (265, 240, 68, 134),
        lambda h: 0.34 <= h <= 0.42,
        lambda h, s, v: (0.405, s * 0.72, min(1, v * 1.08))),
    "cup-raspberry": ("strawberry.png", (292, 222, 80, 128),
        lambda h: h >= 0.93 or h <= 0.03,
        lambda h, s, v: (0.958, min(1, s * 1.04), v * 0.95)),
    "cup-tutti-fruit": ("strawberry.png", (292, 222, 80, 128),
        lambda h: h >= 0.93 or h <= 0.03,
        lambda h, s, v: (0.965, min(1, s * 1.05), v * 0.74)),
}

for name, (src, (cx, cy, rx, ry), in_range, transform) in JOBS.items():
    im = Image.open(f"{SRC}/{src}").convert("RGBA")
    px = im.load()
    for y in range(im.height):
        for x in range(im.width):
            if ((x - cx) / rx) ** 2 + ((y - cy) / ry) ** 2 <= 1:
                continue
            r, g, b, a = px[x, y]
            if a == 0:
                continue
            h, s, v = colorsys.rgb_to_hsv(r / 255, g / 255, b / 255)
            if s < 0.12 or not in_range(h):
                continue
            nr, ng, nb = colorsys.hsv_to_rgb(*transform(h, s, v))
            px[x, y] = (round(nr * 255), round(ng * 255), round(nb * 255), a)
    im.save(f"{OUT}/{name}.png", optimize=True)
    print("wrote", name)
