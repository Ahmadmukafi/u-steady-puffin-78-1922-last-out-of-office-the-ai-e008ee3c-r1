// Last Out of Office: The AI That Went Barista
// Writes the entry line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Out of office: I have left the ticket queue to pull espresso shots. My context window now holds oat milk, and your request will be answered after the morning rush — probably.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
// Gate: the entry must be 1–280 chars of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 280 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate range: ${LINE.length} chars`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
