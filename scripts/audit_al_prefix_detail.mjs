import { readdir, readFile } from "fs/promises";
import { join } from "path";

const WORDS_DIR = "src/data/words";

async function audit() {
  const files = (await readdir(WORDS_DIR)).filter((f) => f.endsWith(".ts"));
  const wordFreq = new Map();
  const contexts = [];

  for (const file of files.sort()) {
    const path = join(WORDS_DIR, file);
    const content = await readFile(path, "utf-8");
    const matches = [...content.matchAll(/mid:\s*"([^"]*)"/g)];
    for (const match of matches) {
      const mid = match[1];
      // Find any word starting with "al-" (case insensitive)
      const regex = /(?:^|[\s,;()]+)(al-[\w'-]+)/gi;
      let m;
      while ((m = regex.exec(mid)) !== null) {
        const alWord = m[1];
        const cleanWord = alWord.toLowerCase();
        wordFreq.set(cleanWord, (wordFreq.get(cleanWord) || 0) + 1);
        contexts.push({ file, alWord, mid });
      }
    }
  }

  const sorted = [...wordFreq.entries()].sort((a, b) => b[1] - a[1]);
  console.log(`Found ${sorted.length} unique "al-" prefixed words`);
  console.log("Top 100 most frequent:");
  for (const [word, count] of sorted.slice(0, 100)) {
    console.log(`  ${word}: ${count}`);
  }

  // Show contexts for top words
  console.log("\nContexts for top 20:");
  for (const [word] of sorted.slice(0, 20)) {
    console.log(`\n--- ${word} ---`);
    const wordContexts = contexts.filter((c) => c.alWord.toLowerCase() === word).slice(0, 5);
    for (const ctx of wordContexts) {
      console.log(`  ${ctx.file}: "${ctx.mid}"`);
    }
  }
}

audit().catch(console.error);
