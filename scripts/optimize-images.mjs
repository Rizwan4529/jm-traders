import sharp from "sharp";
import fs from "fs";
import path from "path";

const flavourRenders = [
  "home/kiwi1.png",
  "home/lemon1.png",
  "home/mango1.png",
  "home/melon1.png",
  "home/mint.png",
  "home/orange.png",
  "home/peach.png",
  "home/pineapple1.png",
  "home/rose.png",
  "home/strawberry.png",
  "generated/cup-vanilla.png",
  "generated/cup-mint.png",
  "generated/cup-raspberry.png",
  "generated/cup-tutti-fruit.png",
];

const flyers = fs
  .readdirSync("src/assets/flyers")
  .filter((file) => file.endsWith(".jpg"))
  .map((file) => `flyers/${file}`);

const menuBoxes = [1, 2, 3, 4, 5].map((n) => `packaging/menu-box-${n}.jpg`);

const jobs = [
  ...flavourRenders.map((src) => ({ src, maxW: 900, q: 82 })),
  ...flyers.map((src) => ({ src, maxW: 900, q: 74 })),
  ...menuBoxes.map((src) => ({ src, maxW: 560, q: 80 })),
  { src: "packaging/pizza-box-range.jpg", maxW: 1600, q: 76 },
  { src: "packaging/pizza-box-branded.jpg", maxW: 1024, q: 78 },
  { src: "packaging/brand-banner.jpg", maxW: 1600, q: 78 },
  { src: "home/ic1-26-300x300.webp", maxW: 240, q: 85 },
  { src: "home/ic2-300x300.png", maxW: 240, q: 85 },
  { src: "home/logo2019_en.png", maxW: 320, q: 90 },
  { src: "home/fruits.png", maxW: 1600, q: 78 },
].map((job) => ({ ...job, src: `src/assets/${job.src}` }));

for (const job of jobs) {
  const abs = path.resolve(job.src);
  if (!fs.existsSync(abs)) {
    console.log("SKIP missing", job.src);
    continue;
  }

  const parsed = path.parse(abs);
  const suffix = parsed.ext === ".webp" ? ".min" : "";
  const out = path.join(parsed.dir, `${parsed.name}${suffix}.webp`);

  const meta = await sharp(abs).metadata();
  let pipeline = sharp(abs).rotate();
  if ((meta.width || 0) > job.maxW) {
    pipeline = pipeline.resize({ width: job.maxW, withoutEnlargement: true });
  }

  await pipeline.webp({ quality: job.q, effort: 6 }).toFile(out);

  const before = fs.statSync(abs).size;
  const after = fs.statSync(out).size;
  console.log(
    `${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB  ${path.basename(out)}`,
  );
}
