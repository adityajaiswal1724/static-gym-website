const sharp = require("/Users/adityajaiswal/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");
const { mkdirSync } = require("node:fs");
const { join } = require("node:path");

const SRC = "/Users/adityajaiswal/Documents/gym/photos";
const OUT = "/Users/adityajaiswal/Documents/gym/public/images";

mkdirSync(OUT, { recursive: true });

const jobs = [
  { src: "IMG_3315.jpg", out: "logo.jpg", max: 900, quality: 90 },
  { src: "Bha n.jpg", out: "owner-portrait.jpg", max: 1400, quality: 82 },
  { src: "IMG_1262.jpg", out: "owner-red.jpg", max: 1400, quality: 82 },
  { src: "IMG_3225.jpg", out: "owner-maroon.jpg", max: 1400, quality: 82 },
  { src: "IMG_1255.jpg", out: "owner-red-trousers.jpg", max: 1400, quality: 82 },
  { src: "IMG_9353.jpg", out: "owner-camera.jpg", max: 1400, quality: 82 },
  { src: "Ne.jpg", out: "owner-biceps.jpg", max: 1400, quality: 82 },
  { src: "DSC00455.jpg", out: "owner-gym-pose.jpg", max: 1400, quality: 82 },
  { src: "IMG_0023_conv.jpg", out: "gym-interior.jpg", max: 1600, quality: 82 },
  { src: "IMG_8643_conv.jpg", out: "owner-outdoor.jpg", max: 1400, quality: 82 },
];

async function run() {
  for (const job of jobs) {
    const input = join(SRC, job.src);
    const output = join(OUT, job.out);
    await sharp(input)
      .rotate()
      .resize({ width: job.max, height: job.max, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: job.quality, mozjpeg: true })
      .toFile(output);
    console.log("Wrote", job.out);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
