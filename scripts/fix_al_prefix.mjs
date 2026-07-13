import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const WORDS_DIR = "src/data/words";

// Arabic grammatical/religious terms that should KEEP the "al-" prefix.
const KEEP_AL = new Set([
  // Nahwu / grammar terms
  "al-mudhaf", "al-mudhafah", "al-mudhaf-ilayh", "al-mudhaf-ilaih",
  "al-mutakallim", "al-mukhathab", "al-gha'ib", "al-ghalib",
  "al-mansub", "al-manshub", "al-manshubah", "al-mansubah",
  "al-marfu", "al-marfu'", "al-majru", "al-majrur", "al-majzu", "al-majzum",
  "al-mabni", "al-mabniyyah", "al-mu'rab", "al-murab",
  "al-fathah", "al-kasrah", "al-dhammah", "al-sukun", "al-hamzah",
  "al-tashdid", "al-madd", "al-tanwin", "al-jar", "al-nasb", "al-jazm",
  "al-raf", "al-i'rab", "al-ma'rifah", "al-nakirah", "al-harf",
  "al-fi'il", "al-fiil", "al-ism", "al-mubtada", "al-khabar", "al-fa'il",
  "al-maf'ul", "al-dhamir", "al-ism-ishara", "al-mufrad", "al-jamid",
  "al-sibgha", "al-zamir", "al-amil", "al-amal", "al-ta'rif", "al-tankir",
  "al-ta'nis", "al-tadhkar", "al-wahid", "al-muthanna", "al-jam'",
  "al-mudzakkar", "al-muannats", "al-qat'", "al-wasl", "al-ta'wil",
  "al-majaz", "al-haqiqah", "al-lafzi", "al-sarih", "al-kinayah",
  "al-isti'arah", "al-tashbih", "al-majazi", "al-mubalaghah", "al-ittihad",
  "al-ishtiqaq", "al-taqdim", "al-ta'khir", "al-hadhf", "al-ziyadah",
  "al-naqd", "al-taqwim", "al-tafsir", "al-talaffuz", "al-imla",
  "al-qiraah", "al-tajwid", "al-sarf", "al-nahw", "al-balaghah", "al-qiyas",
  "al-tashil", "al-taqrir", "al-talqiin", "al-talattuf", "al-ta'kid",
  "al-takhffif", "al-tafkhim", "al-tarqiq", "al-idgham", "al-ikhfa",
  "al-izhar", "al-iqlab", "al-qasr", "al-sakt", "al-lam",
  "al-qamariyyah", "al-shamsiyyah", "al-huruf", "al-hijaiyyah",
  "al-muqatta'ah", "al-ayat", "al-surah", "al-juz'", "al-rubu'",
  "al-hizb", "al-manazil", "al-sajdah", "al-ruku'", "al-qiyam",
  "al-julus", "al-tashahhud", "al-salam", "al-takbir", "al-tasmiyah",
  "al-basmalah", "al-hamd", "al-istia'dhah", "al-bismillah", "al-ta'awwudz",
  "al-tahmid", "al-tasbih", "al-tahlil", "al-takbirah", "al-salat",
  "al-zakat", "al-sawm", "al-hajj", "al-umrah", "al-jihad", "al-shahadah",
  "al-wudu'", "al-tayammum", "al-ghusl", "al-janabah", "al-hayd",
  "al-nifas", "al-istihadah", "al-taharah", "al-najasah", "al-halal",
  "al-haram", "al-makruh", "al-mubah", "al-wajib", "al-fard", "al-sunnah",
  "al-mustahabb", "al-mufsid", "al-shar", "al-khatar", "al-maslahah",
  "al-mafsadah", "al-qasd", "al-qasam", "al-yamin", "al-nadzar", "al-'azl",
  "al-raj'ah", "al-khul", "al-talaq", "al-idah", "al-raj'iyyah", "al-bai",
  "al-riba", "al-syirkah", "al-mudarabah", "al-musaqah", "al-mukhabarah",
  "al-mu'amarah", "al-talji'ah", "al-istisna", "al-ijarah", "al-wakalah",
  "al-kafalah", "al-hawalah", "al-rahn", "al-hibah", "al-waqf", "al-wasiyyah",
  "al-mirath", "al-diyah", "al-qisas", "al-hudud", "al-ta'zir", "al-sariqah",
  "al-hirabah", "al-zina", "al-qadhf", "al-shurb", "al-zakah", "al-khums",
  "al-jizyah", "al-kharaj", "al-usyur", "al-sadaqah", "al-'umrah",
  "al-qurban", "al-udhiyah", "al-aqiqah", "al-nikah", "al-mahr",
  "al-walima", "al-zihar", "al-ila", "al-li'an", "al-khul'", "al-tafwid",
  "al-iddah", "al-nafaqah", "al-hadhanah", "al-wilayah", "al-qism",
  "al-tanazul", "al-taswib", "al-takhayyur", "al-ta'arud", "al-tarjih",
  // Proper nouns / names that conventionally keep al-
  "al-quran", "al-qur'an", "al-islam", "al-qur'ān",
]);

function shouldKeepAl(word) {
  const lower = word.toLowerCase();
  if (KEEP_AL.has(lower)) return true;
  // Keep al- if the remainder looks like an Arabic transliteration (contains chars like ʿ, ʾ, etc.)
  return false;
}

function fixAlPrefix(text) {
  if (!text) return text;
  // Match "al-" at the start of any word (case-insensitive).
  return text.replace(
    /\bal-([\w'-]+)/gi,
    (match, word) => {
      if (shouldKeepAl(match)) {
        return match;
      }
      return word;
    }
  );
}

async function fix() {
  const files = (await readdir(WORDS_DIR)).filter((f) => f.endsWith(".ts"));
  let totalChanges = 0;
  let filesChanged = 0;

  for (const file of files.sort()) {
    const path = join(WORDS_DIR, file);
    let content = await readFile(path, "utf-8");
    let changed = false;

    // Replace mid and men fields
    content = content.replace(/mid:\s*"([^"]*)"/g, (match, value) => {
      const fixed = fixAlPrefix(value);
      if (fixed !== value) {
        changed = true;
        totalChanges++;
      }
      return `mid: "${fixed}"`;
    });

    content = content.replace(/men:\s*"([^"]*)"/g, (match, value) => {
      const fixed = fixAlPrefix(value);
      if (fixed !== value) {
        changed = true;
        totalChanges++;
      }
      return `men: "${fixed}"`;
    });

    if (changed) {
      await writeFile(path, content, "utf-8");
      filesChanged++;
    }
  }

  console.log(`Fixed ${totalChanges} occurrences in ${filesChanged} files.`);
}

fix().catch(console.error);
