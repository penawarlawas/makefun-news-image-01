// 22 November 2026

import { copyFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outputDir, "entry.png");

await mkdir(outputDir, { recursive: true });
await copyFile("./entry.png", dest);
