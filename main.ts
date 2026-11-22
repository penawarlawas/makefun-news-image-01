// 22 November 2026 entry image: copy ./entry.png into MAKEFUN_OUTPUT_DIR (default /output).
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync("./entry.png", destination);
