# Design Reference for Freebuff: Kamus Quran

## 1. Product Overview

**Kamus Quran** is a web application intended to help general users, especially learners of Qur'anic Arabic, enrich vocabulary and study **nahwu** and **sharf** through a practical search-oriented experience.

The core educational goal is to help users master approximately **80–90% of the most frequent vocabulary appearing in the Qur'an**, estimated at **7.000+ words** (expanded from an initial core of 300 high-frequency words), while also enabling deeper exploration of morphology, syntax, and contextual occurrence across the Qur'an.

This application is not only a dictionary. It should function as a **Qur'anic linguistic learning tool** focused on:
- Qur'anic vocabulary acquisition
- Nahwu and sharf analysis
- Root-word awareness
- Frequency and occurrence exploration in the Qur'an
- Sentence-level breakdown for learning purposes

The app will be built as a **web app** and should be deployable on **GitHub Pages** if possible. There is **no user login** in v1. Freebuff may break development into multiple implementation sessions, but **all requirements in this document are considered part of v1**.

---

## 2. Primary Goals

The app must help users:
- Search Qur'anic vocabulary using **Arabic** or **Indonesian** input
- Use **voice recognition** to reduce friction when entering Arabic input
- Understand the **Arabic target word**, its **Indonesian meaning**, and its **nahwu-sharf positioning**
- Know how many times the word appears in the Qur'an
- See the complete list of **surah and ayah references** where the word appears
- Analyze user-entered sentences by breaking them down word by word
- Learn morphology and syntax in a way useful for students studying Qur'anic Arabic

---

## 3. Target Users

Primary target users:
- General users interested in learning Qur'anic Arabic
- Learners of nahwu and sharf
- Students who want to improve Qur'anic vocabulary
- Teachers or mentors who want a structured lookup and explanation tool

The application should be usable by the general public, but the educational orientation is specifically toward **Qur'an learners**.

---

## 4. Scope of Analysis Depth

The expected linguistic depth is **advanced**.

The app should aim to present analysis at **depth level 3**, including as much as possible of the following when available:
- Root / triliteral root
- Lemma
- Part of speech
- Morphological pattern / wazan
- Derived form information
- Verb category such as fi'il madhi, mudhari', amr, etc.
- Number, gender, definiteness, and other relevant morphological markers
- I'rab information
- Syntactic role / grammatical function in context
- Relations to other words when relevant
- Potentially multiple analyses if source data supports it

Freebuff should preserve scholarly clarity and avoid oversimplifying the linguistic layer.

---

## 5. Core App Modes

### 5.1 Mode Kata

This is the primary mode.

Users can search using:
- **Arabic input** via voice recognition and text input
- **Indonesian input** via typing and voice recognition

Both input pathways should resolve toward a target **Arabic Qur'anic word entry**.

For each resulting word entry, the app must display **all** of the following:
- Arabic word
- Root
- Lemma
- Indonesian meaning
- Part of speech
- Nahwu information
- Sharf information
- I'rab / syntactic context where available
- Morphological details
- Number of occurrences in the Qur'an
- Full list of surah:ayah references
- Selected example ayat
- Audio pronunciation
- Brief tafsir related to the word

The presentation should make the word useful as a learning object, not only as a lexical record.

### 5.2 Mode Kalimat

Users can input a sentence in:
- Arabic
- Indonesian

Input methods follow the same pattern as Mode Kata:
- Arabic: voice recognition should be available to reduce typing difficulty
- Indonesian: typing and voice recognition should both be available

The output should be the entered sentence **broken down per word**, where each token shows at minimum:
- Arabic token or mapped Arabic equivalent where applicable
- Indonesian meaning
- Nahwu context
- Sharf context

Where possible, the app should also show sentence-level observations so users can understand grammatical structure, not only isolated words.

---

## 6. Input and Interaction Requirements

### 6.1 Supported Input Languages
- Indonesian
- Arabic

### 6.2 Voice Recognition
Voice input is a required feature.

Requirements:
- Arabic input should support voice recognition because typing Arabic may be difficult for many users
- Indonesian input should support typing and voice recognition
- Freebuff should prefer browser-native or low-friction implementation where practical
- Because the app is intended for web deployment and easy access, voice input should degrade gracefully if unsupported by the browser
- A clear fallback to manual text input must always exist

### 6.3 Search UX
The application should prioritize fast lookup and clarity.

Suggested UX requirements:
- Clear switch between **Mode Kata** and **Mode Kalimat**
- Input language awareness or auto-detection where feasible
- Prominent search field
- Voice input button
- Structured result panel
- Easy navigation between result summary and detailed linguistic analysis

---

## 7. Data Strategy

Freebuff may use:
- **Open-source Qur'anic linguistic resources**
- **Free APIs** where helpful
- A combination of both

Preferred direction:
- Propose the **most efficient** and **most user-accessible** architecture
- If an API is required, prioritize **free** services
- If API keys are needed, provide clear instructions so the product owner can generate the key

Recommended source direction:
- Use open Qur'anic corpus resources for morphology, syntax, and occurrence data
- Use free APIs where they improve sentence-level flexibility, lookup performance, audio, tafsir, or bilingual mapping

### 7.1 Architecture Preference for Mode Kalimat
For sentence mode, the chosen priority is:
- **Prefer smarter and more flexible analysis even if it depends on free external APIs**

This means Freebuff may design a hybrid or API-assisted approach to achieve better sentence analysis quality, as long as user access remains practical and cost-free where possible.

---

## 8. Hosting and Technical Constraints

Technical expectations:
- Should be hostable on **GitHub Pages** if feasible
- No login system
- No mandatory paid backend
- The app should remain accessible for end users with minimal setup
- Freebuff may decide the implementation breakdown per 1-hour session, but must treat all documented features as part of v1 scope

If a feature cannot run fully on pure static hosting, Freebuff should still design the cleanest feasible architecture and explicitly identify any external dependency needed.

---

## 9. Bookmarking and Persistence

Login is not required.

However, in **Mode Kata**, users must be able to **bookmark** words.

Bookmark requirements:
- Bookmarks stored locally in browser
- Export bookmarks as **JSON**
- Import bookmarks from **JSON**

The bookmark feature should support practical self-study and lightweight personal collection building.

---

## 10. UI Language and Presentation Style

### 10.1 UI Language
The final UI language choice is delegated to Freebuff, with the instruction to propose the most suitable option.

Recommended evaluation criteria:
- Primary audience is Indonesian-speaking users learning Qur'anic Arabic
- Arabic terms must remain visible where pedagogically necessary
- UI should minimize cognitive load

A likely suitable direction is:
- Main UI in **Bahasa Indonesia**
- Arabic retained for source words, examples, and linguistic labels where necessary

Freebuff may refine this if a better bilingual pattern improves usability.

### 10.2 Visual Style
The desired style is:
- **Simple academic interface**
- Text-first
- Structured
- Clear
- Minimal distraction

Do not design it as a flashy consumer app. The visual language should support reading, comparison, and close linguistic study.

---

## 11. Suggested Information Architecture

Freebuff may refine the structure, but the app should conceptually support the following areas:
- Home / landing explanation
- Mode Kata
- Mode Kalimat
- Bookmark collection
- About / methodology / sources

Because there is no login, the app should keep the flow lightweight and direct.

---

## 12. Functional Requirements Summary

### 12.1 Required Functional Features
1. Search word entries by Arabic input
2. Search word entries by Indonesian input
3. Arabic voice recognition input
4. Indonesian voice recognition input
5. Mode Kata result page
6. Mode Kalimat analysis page
7. Advanced nahwu-sharf analysis display
8. Word frequency display in the Qur'an
9. Surah and ayah occurrence listing
10. Example ayat display
11. Audio pronunciation
12. Brief tafsir display
13. Word bookmark feature
14. Local bookmark persistence
15. Bookmark export to JSON
16. Bookmark import from JSON
17. Deployment compatibility with GitHub Pages where feasible
18. Graceful fallback when voice recognition or API-based features are unavailable

### 12.2 Required Non-Functional Characteristics
- Easy to use for general learners
- Academically structured presentation
- Fast search-oriented interaction
- Minimal friction for Arabic input
- Clear linguistic explanation
- Practical and low-cost architecture
- Preference for free and accessible data sources

---

## 13. Freebuff Implementation Guidance

Freebuff should treat this product as an **educational Qur'anic language tool**, not a general-purpose dictionary.

Implementation guidance:
- Prioritize the accuracy and usability of linguistic information
- Prefer free data sources and APIs
- Keep the product deployable and maintainable
- Use the simplest architecture that still supports the required depth
- Where fully static implementation becomes insufficient, document the external dependency cleanly
- If API keys are needed, provide operational instructions for the owner
- Preserve readability for learners while still exposing advanced grammatical detail

---

## 14. Success Criteria

The application can be considered successful if users can:
- Search with either Indonesian or Arabic input
- Use voice to simplify Arabic entry
- Discover the correct Qur'anic Arabic word entry
- Understand meaning and advanced nahwu-sharf context
- See how often and where the word appears in the Qur'an
- Break down sentences into meaningful word-level grammatical analysis
- Save useful words for later study

---

## 15. Final Notes

This document captures clarified product intent from stakeholder interview.

Important decisions already fixed:
- The app focuses on helping learners of nahwu and sharf enrich Qur'anic vocabulary
- Coverage has expanded to 7.000+ words (500+ Quranic high-frequency, 750+ daily Arabic, 6.000+ from Nahwu/Sharf textbooks)
- Inputs support Arabic and Indonesian
- Voice recognition is required
- Two core modes exist: **kata** and **kalimat**
- Analysis depth is advanced
- All requested features are included in **v1**
- No login is required
- Bookmarking is required
- Hosting should aim for GitHub Pages compatibility
- Sentence mode may prioritize smarter API-assisted analysis if needed

Freebuff is expected to convert this into a practical build plan and implementation sequence.
