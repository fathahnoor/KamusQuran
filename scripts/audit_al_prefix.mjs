import { readdir, readFile } from "fs/promises";
import { join } from "path";

const WORDS_DIR = "src/data/words";

async function audit() {
  const files = (await readdir(WORDS_DIR)).filter((f) => f.endsWith(".ts"));
  const results = [];

  for (const file of files.sort()) {
    const path = join(WORDS_DIR, file);
    const content = await readFile(path, "utf-8");
    const matches = [...content.matchAll(/mid:\s*"([^"]*)"/g)];
    for (const match of matches) {
      const mid = match[1];
      // Find any word starting with "al-" (case insensitive)
      const words = mid.split(/[\s,;()]+/);
      for (const word of words) {
        if (/^al-/i.test(word) && word.length > 3) {
          results.push({ file, word, mid });
        }
      }
    }
  }

  // Group by file
  const grouped = results.reduce((acc, r) => {
    acc[r.file] = acc[r.file] || [];
    acc[r.file].push(r);
    return acc;
  }, {});

  console.log(`Found ${results.length} occurrences of "al-" prefix in mid fields`);
  console.log("Files affected:", Object.keys(grouped).length);

  for (const [file, items] of Object.entries(grouped)) {
    console.log(`\n--- ${file} ---`);
    for (const item of items.slice(0, 10)) {
      console.log(`  al-word: "${item.word}" | mid: "${item.mid}"`);
    }
    if (items.length > 10) {
      console.log(`  ... and ${items.length - 10} more`);
    }
  }
}

audit().catch(console.error);
