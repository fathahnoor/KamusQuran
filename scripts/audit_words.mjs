import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const batchDir = join(__dirname, '../src/data/words');
const files = readdirSync(batchDir).filter(f => f.endsWith('.ts')).sort();

const allWords = [];

for (const file of files) {
  const filePath = join(batchDir, file);
  const content = readFileSync(filePath, 'utf8');
  
  // Find all { id: "..." } objects
  const idRegex = /\{\s*id:\s*"([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(content)) !== null) {
    const start = match.index;
    // Find the matching closing brace
    let braceCount = 0;
    let end = start;
    for (let i = start; i < content.length; i++) {
      if (content[i] === '{') braceCount++;
      else if (content[i] === '}') {
        braceCount--;
        if (braceCount === 0) { end = i + 1; break; }
      }
    }
    const obj = content.substring(start, end);
    const id = match[1];
    
    const g = (re) => { const m = obj.match(re); return m ? m[1] : null; };
    const ar = g(/ar:\s*"([^"]+)"/);
    const mid = g(/mid:\s*"([^"]+)"/);
    const freq = g(/freq:\s*(\d+)/);
    const rank = g(/rank:\s*(\d+)/);
    const hasOcc = /occ:\s*\[\[/.test(obj);
    const hasEx = /ex:\s*\[\[/.test(obj);
    
    let occCount = 0;
    if (hasOcc) {
      const occMatches = obj.match(/\[\d+,\d+,\d+(?:,\d+)?\]/g);
      occCount = occMatches ? occMatches.length : 0;
    }
    
    allWords.push({
      id, ar, mid,
      freq: freq ? parseInt(freq) : 0,
      rank: rank ? parseInt(rank) : null,
      occCount, hasOcc, hasEx,
      file: file.replace('.ts', ''),
    });
  }
}

console.log(`Total entries: ${allWords.length}\n`);

// 1. freq > 0 but NO occ
const noOcc = allWords.filter(w => w.freq > 0 && !w.hasOcc);
console.log('=== 1. freq > 0, NO occ (shows "0 dari N") ===');
if (noOcc.length === 0) console.log('  ✅ None');
else noOcc.forEach(w => console.log(`  ❌ [${w.file}] ${w.id} (${w.ar}): freq=${w.freq} — "${w.mid}"`));

// 2. occ > 10 (UI caps at 10)
const occOver10 = allWords.filter(w => w.occCount > 10).sort((a, b) => b.occCount - a.occCount);
console.log('\n=== 2. occ > 10 (hidden by UI cap) ===');
if (occOver10.length === 0) console.log('  ✅ None');
else occOver10.forEach(w => console.log(`  ⚠️ [${w.file}] ${w.id} (${w.ar}): occ=${w.occCount}`));

// 3. occ > 0 but NO ex
const occNoEx = allWords.filter(w => w.occCount > 0 && !w.hasEx);
console.log('\n=== 3. occ > 0, NO ex (locations without example ayat) ===');
if (occNoEx.length === 0) console.log('  ✅ None');
else occNoEx.forEach(w => console.log(`  ⚠️ [${w.file}] ${w.id} (${w.ar}): occ=${w.occCount}`));

// 4. freq >= 5, NO occ (most impactful)
const impNoOcc = noOcc.filter(w => w.freq >= 5).sort((a, b) => b.freq - a.freq);
console.log('\n=== 4. freq >= 5, NO occ (most impactful) ===');
if (impNoOcc.length === 0) console.log('  ✅ None');
else impNoOcc.forEach(w => console.log(`  ❌ [${w.file}] ${w.id} (${w.ar}): freq=${w.freq}, rank=${w.rank} — "${w.mid}"`));

// 5. Duplicate IDs
const idMap = new Map();
for (const w of allWords) {
  if (!idMap.has(w.id)) idMap.set(w.id, []);
  idMap.get(w.id).push(w);
}
const dups = [...idMap.entries()].filter(([, entries]) => entries.length > 1);
console.log('\n=== 5. Duplicate IDs ===');
if (dups.length === 0) console.log('  ✅ None');
else for (const [id, entries] of dups) {
  console.log(`  ⚠️ id="${id}":`);
  for (const e of entries) console.log(`      [${e.file}] ${e.ar}, freq=${e.freq}, rank=${e.rank} — "${e.mid}"`);
}
