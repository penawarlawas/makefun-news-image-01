// 22 November 2026

import { access, constants, copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const source = join(dirname(fileURLToPath(import.meta.url)), "entry.png");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outputDir, "entry.png");

try {
  await access(source, constants.F_OK);
} catch {
  throw new Error(`Source file does not exist: ${source}`);
}

await mkdir(outputDir, { recursive: true });
await copyFile(source, dest);
