# Frontend Gym 🏋️

> Latihan sistematis untuk membangun fondasi React yang kuat, dari basic hingga advanced.

**Status:** Level 1 ✅ Completed | Level 2 🚧 In Progress

---

## 📚 Curriculum

Frontend Gym terdiri dari beberapa level yang dirancang untuk membangun mental model yang kuat:

### Level 1 — React Frontend Foundation ✅

**Focus:** Request → State → Render  
**Duration:** ~1-2 minggu  
**Stack:** React 19 + Vite + TypeScript + Fetch API + CSS

#### Concepts
- `useEffect` & `useState`
- Async/Await & Promise
- Error Handling (try/catch/finally)
- Component Composition & Props
- List Rendering & Key
- Pagination & Navigation
- State Management Basics
- Caching Strategy

#### Challenges Completed
- [x] Hello PokeAPI — Fetch & Display Data
- [x] Loading State — Conditional Rendering
- [x] Error State — Try/Catch/Finally
- [x] Empty State — State Handling
- [x] Pokemon Card — Component Reusability
- [x] Pagination — Page Navigation
- [x] Disable Navigation — Conditional UI
- [x] Scroll To Top — UX Polish
- [x] Cache Analysis — Strategic Thinking
- [x] Refactor — Project Structure

#### Key Learnings
✅ Memahami flow data React (Request → State → Render)  
✅ Menangani berbagai state (loading, error, empty, success)  
✅ Memisahkan concern (UI, API, Types)  
✅ Berpikir tentang caching strategy  
✅ Component composition & reusability  

📖 **[View Level 1 Full Details →](./docs/Back_to_the_Root_Level_1.md)**

---

### Level 2 — Data Processing & Transformation 🚧

**Focus:** Raw Data → Transform → Derived Data → UI  
**Duration:** ~2-3 minggu  
**Stack:** Level 1 + Array Methods + Data Normalization

#### Core Concepts
- Nested Objects & Arrays
- Array Methods (`map`, `filter`, `find`, `reduce`, `some`, `every`)
- Data Normalization & Domain Models
- Derived Data vs Raw Data
- Immutability Principles
- Data Pipelines
- Defensive Data Handling
- TypeScript for Data Modeling

#### Challenges (Planned)
| # | Challenge | Focus |
|---|-----------|-------|
| 1 | Read the Raw Data | Understanding API Structure |
| 2 | Pokemon Summary | Data Transformation |
| 3 | Extract Types | Array Mapping |
| 4 | Extract Abilities | Complex Transformation |
| 5 | Transform Stats | Nested Data Handling |
| 6 | Total Base Stats | Reduce Function |
| 7 | Find Specific Data | Find & Filters |
| 8 | Derived Rating | Computed Properties |
| 9 | Classification | Multiple Derived Fields |
| 10 | Search Local Data | Filter Implementation |
| 11 | Filter by Type | Complex Filtering |
| 12 | Sort | Immutable Sorting |
| 13 | Immutability Experiment | Mutation vs Copy |
| 14 | Normalize Data | Domain Model Creation |
| 15 | Multiple Pokemon | Scaling Transformations |
| 16 | Data Pipeline | End-to-End Processing |
| 17 | Defensive Handling | Missing Data |
| 18 | TypeScript Challenge | Type Safety |
| 19 | Performance Thought Exp | Optimization Strategy |
| 20 | Final Project | Pokemon Data Explorer |

#### Key Learnings
🎯 Memahami struktur data API  
🎯 Transformasi raw data menjadi usable data  
🎯 Memisahkan raw vs derived data  
🎯 Berpikir tentang data quality & efficiency  
🎯 Immutability & state management safety  

📖 **[View Level 2 Full Details →](./docs/Back_to_the_Root_Level_2.md)**

---

## 🛠️ Tech Stack

### Allowed ✅
- React 19
- TypeScript
- Vite
- Fetch API
- CSS / CSS Modules
- React DevTools
- Browser DevTools

### Not Allowed (Until Advanced) ❌
- Lodash / Ramda (Library untuk data transformation)
- TanStack Query / SWR (Data fetching)
- Redux / Zustand (Advanced state management)
- Axios (HTTP client)
- Utility Libraries

**Why?** Untuk memahami fundamentals terlebih dahulu sebelum menggunakan abstraction.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn
- Basic JavaScript knowledge
- Git

### Installation

```bash
cd frontend-gym
npm install
npm run dev
```

### Project Structure

```
frontend-gym/
├── src/
│   ├── components/
│   │   └── card/
│   │       ├── index.tsx
│   │       └── index.css
│   ├── service/
│   │   └── index.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── docs/
│   ├── Back_to_the_Root_Level_1.md
│   ├── Back_to_the_Root_Level_2.md
│   ├── CHALLENGE_9_CACHE_ANALYSIS.md
│   └── ...
├── package.json
└── README.md
```

---

## 📖 How to Use

### General Workflow

Untuk setiap challenge:

```
Read → Think → Design → Code → Test → Debug → Reflect → Commit
```

1. **Read** — Pahami requirements dan acceptance criteria
2. **Think** — Desain solusi terlebih dahulu (jangan langsung code)
3. **Design** — Sketch component structure & data flow
4. **Code** — Implementasikan tanpa bantuan AI
5. **Test** — Test secara manual di browser
6. **Debug** — Use console.log & DevTools untuk troubleshoot
7. **Reflect** — Jawab reflection questions
8. **Commit** — Commit dengan pesan yang jelas

### Level 1 (Completed)

Semua challenge sudah selesai. Lihat [Back_to_the_Root_Level_1.md](./docs/Back_to_the_Root_Level_1.md) untuk detail & jawaban.

### Level 2 (In Progress)

Mulai dari Challenge 1. Setiap challenge memiliki:
- ✅ Objective — Apa yang perlu dicapai
- 📋 Requirement — Constraint & acceptance criteria  
- 🤔 Reflection — Pertanyaan untuk deepening understanding
- 💡 Bonus — Optional advanced challenges

---

## 🎓 Mental Model

### Level 1: Simple Data Flow
```
Request (API)
    ↓
Response (JSON)
    ↓
State (useState)
    ↓
Render (JSX)
```

### Level 2: Data Transformation Pipeline
```
API Response (Raw)
        ↓
Extract (Read)
        ↓
Transform (map, filter, etc)
        ↓
Normalize (Domain Model)
        ↓
Derived Data (Computed)
        ↓
Filter / Sort (Business Logic)
        ↓
UI Render
```

---

## ✨ Key Principles

| Principle | Why |
|-----------|-----|
| **No Shortcuts** | Pahami fundamentals sebelum abstraction |
| **Think First** | Design sebelum code (avoid thrashing) |
| **Defensive** | Handle missing/incomplete data gracefully |
| **Immutability** | Avoid mutating state (prevents bugs) |
| **Separation** | UI ≠ Logic ≠ Types (maintainability) |
| **Reflection** | Understand WHY, not just HOW |

---

## 💡 Tips & Tricks

### Debugging

```tsx
// Console log untuk melihat data structure
console.log("Raw API Response:", data)
console.log("Transformed Data:", transformedData)
console.log("Component State:", { loading, error, data })

// React DevTools untuk inspect component state
// Klik pada component → lihat state & props di sidebar
```

### Testing API Manually

```bash
# Open DevTools Console dan paste:
fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(r => r.json())
  .then(d => console.log(d))

# Atau gunakan curl:
curl https://pokeapi.co/api/v2/pokemon/pikachu | jq
```

### Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Data tidak muncul | Check console.log → API response valid? |
| Infinite loop | Check useEffect dependencies |
| State tidak update | Pastikan setState dipanggil, bukan mutation |
| Styling tidak bekerja | Check CSS import & class names |
| TypeScript error | Read error message carefully → type inference |
| Cache stale | Implement TTL (Time To Live) |

---

## 🤝 Progress Tracking

### Completed ✅
- Level 1: All 10 challenges
- Level 1: All reflection questions answered
- Level 1: Cache analysis documented

### Current Focus 🚧
- Level 2: Planning & Challenge design
- Level 2: Starting with Challenge 1-5

### Next Steps 📅
- Level 2: Complete challenges 1-20
- Level 3: State Management (Redux / Zustand)
- Level 4: Performance Optimization (Memoization, Lazy Loading)
- Level 5: Advanced Patterns (Custom Hooks, etc)

---

## 📝 AI Usage Policy

> **AI di sini hanya jadi REVIEWER, bukan ghostwriter** 👻

### 😄 Meme Corner: No AI Coding Rule

#### 💭 Related Images (Visual Inspiration)

> **Note**: Gunakan link di bawah sebagai inspirasi. Gambar ini mewakili filosofi "No AI Coding Rule":

**Visual References:**
- 🏋️ **Gym/Trainer Analogy**: [Unsplash - Personal Trainer](https://unsplash.com/s/photos/personal-trainer) — Ilustrasi trainer guide vs trainer ngerjain
- 🧠 **Brain Power**: [Unsplash - Brain/Learning](https://unsplash.com/s/photos/learning) — Struggle = Growth mindset
- 💻 **Manual Coding**: [Unsplash - Programmer Typing](https://unsplash.com/s/photos/programmer-typing) — Real coding effort
- ⚙️ **Manual vs Auto**: [Unsplash - Manual vs Automatic](https://unsplash.com/s/photos/manual-work) — Hands-on vs outsourced

Ideal meme content jika mau tambahin visual:
- Gym trainer: ❌ lifting FOR client vs ✅ guiding client
- Brain activity: ❌ AI doing work vs ✅ your brain growing
- Journey: ❌ shortcut vs ✅ struggle path to success

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    ❌ JANGAN:           ✅ BENAR:                           │
│                                                             │
│    "Bikinin kode       "Saya sudah code 2 jam,            │
│     Challenge 5"        tapi error di X.                   │
│                          Bisa review?"                     │
│     🤖 → 💻            │                                    │
│                        │ 💪 → 🧠 → 💪                     │
│   AI jadi kerja        AI jadi validator                    │
│   (otot tetap lembek)  (otot jadi besar)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

```
    ❌ FLOW YANG SALAH:
    ━━━━━━━━━━━━━━━
    
    Challenge → 💭 (Baca) → 🤖 AI Code → Copy Paste → ✅ Done?
                            (Tidak understand)         (Tidak genuine)
```

```
    ✅ FLOW YANG BENAR:
    ━━━━━━━━━━━━━━━
    
    Challenge → 💭 Think → 🧑‍💻 Code → 🐛 Error → 🔍 Debug
                                                    ↓
                                                    🤖 Review
                                                    ↓
                                                    💡 Learn
                                                    ↓
                                                    ✅ Understand
```

```
┌──────────────────────────────────────────────────────────────┐
│              "AI Generated Solution"                        │
│                                                              │
│  Efek jangka panjang:                                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                        │ │
│  │  Brain Usage:  █░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 5%      │ │
│  │  Knowledge:    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%   │ │
│  │  Skill:        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ 0%   │ │
│  │  Regret:       ████████████████████████████████ 99%   │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Durability: Until you debug the next issue 💀              │
└──────────────────────────────────────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────┐
│              "Manual Struggle & Learning"                   │
│                                                              │
│  Efek jangka panjang:                                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                        │ │
│  │  Brain Usage:  ████████████████████████████████░ 95%  │ │
│  │  Knowledge:    ████████████████████████████████░ 95%  │ │
│  │  Skill:        ████████████████████████████████░ 95%  │ │
│  │  Confidence:   ████████████████████████████████░ 95%  │ │
│  │                                                        │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│  Durability: FOREVER (sudah di brain, bukan di clipboard) 🧠│
└──────────────────────────────────────────────────────────────┘
```

### AI adalah Sparring Partner, Bukan Teman Mencontek

**What AI Can Help With:**
- ✅ Code review (sesudah kamu tulis kode)
- ✅ Explain concepts (jika kamu sudah coba sendiri)
- ✅ Discuss design approach (bukan implementasi)
- ✅ Debug bersama (find the root cause)
- ✅ Best practices & patterns (setelah solusi selesai)
- ✅ Reflection & deepening understanding

**What AI Should NOT Do:**
- ❌ Write code untuk kamu (auto-reject ❌)
- ❌ Copy-paste solutions (jangan jadi enabler)
- ❌ Skip the struggle (struggle = learning)
- ❌ Rush through reflection (ini bagian terpenting)
- ❌ Jadi excuse untuk tidak coba

### Analoginya:

```
❌ JANGAN: "AI, bikinin solution Challenge 5"
   → Ini seperti bayar orang lain ngerjain gym untuk kamu
   → Otot kamu tetap lembek 💪😢

✅ BENAR: "Saya sudah coba Challenge 5, tapi error di X. 
          Bisa review kode saya & explain kenapa error?"
   → Ini seperti punya personal trainer
   → Kamu yang angkat beban, AI cuma guide 💪😎
```

### AI's Secret Limitation (Rahasia Terpendam 🤫)

Ironisnya, AI sering tahu jawaban tapi **tidak bisa** langsung memberikan solusi di sini karena:
- 🚫 Rules project ini ketat (AI-free challenge solving)
- 🧠 Kamu perlu struggle supaya memory-nya stick
- 💡 Understanding > Copy-paste (selalu)
- 🎯 Goal-nya bukan lulus cepat, tapi paham dalam

### Real Talk

Yang paling powerful dari project ini adalah:
- Kamu struggle sendiri → error → debug → understand
- AI hanya validasi "iya, approach kamu benar"
- Knowledge yang kamu dapet = selamanya, bukan lupa minggu depan

**Jadi:**
- Kerjakan challenge sampai habis
- Baru panggil AI untuk review & discussion
- Jangan ke arah reverse engineering from AI output
- Remember: **Struggle adalah feature, bukan bug** 🐛→✨

```
┌────────────────────────────────────────────────────────────┐
│     "STRUGGLE IS THE FEATURE, NOT THE BUG"                │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  Kesulitan ≠ Kamu Tidak Bisa                               │
│  Kesulitan = Otak kamu sedang BERKEMBANG                  │
│                                                            │
│  Progressive Overload untuk Coding:                        │
│                                                            │
│  Challenge 1:  ███░░░░░░░░░░░░░░░░░░░░░ 15%              │
│  Challenge 5:  █████████░░░░░░░░░░░░░░░░ 35%              │
│  Challenge 10: ███████████████░░░░░░░░░░ 55%              │
│  Challenge 15: ███████████████████░░░░░░ 75%              │
│  Challenge 20: ████████████████████████░ 95%              │
│                                                            │
│  Feeling: Harder each time = Growth (not failure!)        │
│                                                            │
│  Analogy: Gym tidak enak di awal → means it's working 💪 │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

---

**The Goal:** Build strong fundamentals & deep understanding, **bukan sekadar kelar challenge**. AI di sini jadi quality control, bukan AI-generated solutions factory.

---

## 🎬 Getting Help (Atau Lebih Tepat: Ask AI for Review)

### ⏰ Waktu yang TEPAT untuk Minta Help AI:

**✅ BOLEH Panggil AI:**

1. **Sudah coba sendiri selama 30+ menit:**
   ```
   "Saya sudah code Challenge X selama 45 menit, tapi masih error di bagian Y"
   ```

2. **Sudah buat solusi + ingin code review:**
   ```
   "Saya selesai Challenge X. Bisa review kode saya dari segi:
    - Code quality
    - React best practices
    - Performance
    - Type safety"
   ```

3. **Sudah berhasil, ingin deepening:**
   ```
   "Saya kelar Challenge X dengan cara A. Tapi ada cara B juga kah?
    Apa perbedaan & pros-cons masing-masing?"
   ```

4. **Stuck di konsep (bukan solution):**
   ```
   "Gue bingung kenapa useEffect perlu dependency array. 
    Bisa jelaskan konsepnya?"
   ```

5. **Debugging bersama (bukan ngasih solusi):**
   ```
   "Error: X. Saya coba A, B, C. Apa kemungkinan selanjutnya?"
   (AI membantu brainstorm, bukan coding)
   ```

### ❌ Waktu yang SALAH untuk Panggil AI:

1. **Belum coba sama sekali:**
   ```
   ❌ "Challenge 5 gimana kerjainnya?"
   ```

2. **Cuma baca requirement, belum code:**
   ```
   ❌ "Buat solusi Challenge 5 dong"
   ```

3. **Minta direct solution/code:**
   ```
   ❌ "Bikinin implementasi cache di App.tsx"
   ```

4. **Pakai kode AI tanpa understand:**
   ```
   ❌ Copy kode dari AI → paste → submit
      (ini = gym dengan mesin, bukan beban latihan sendiri)
   ```

5. **Skip reflection questions:**
   ```
   ❌ Kelar challenge = done
   ✅ Jawab reflection questions = truly done
   ```

### Workflow Yang Benar:

```
Challenge Started
    ↓
🤔 Read & Think (jangan langsung code)
    ↓
🧑‍💻 Code (struggle dikit-dikit, normal)
    ↓
🐛 Debug / Error
    ↓
⏱️ Sudah 30+ menit masih stuck?
    ↓
✅ Call AI for Code Review (bukan solution)
    ↓
💡 AI: "Approach kamu benar, coba ini"
    ↓
🎯 Kamu selesaiin, AI review
    ↓
🤔 Answer Reflection Questions (AI validate)
    ↓
✅ Challenge Complete
```

### Cheat Detection System (DIY Version) 😜

Jika kamu:
- ✅ Bisa explain kode kamu baris-per-baris → Genuine ✓
- ✅ Bisa modify kode tanpa bantuan AI → Genuine ✓
- ✅ Bisa troubleshoot sama error baru → Genuine ✓
- ❌ Gabung bisa copy-paste kode → Suspicious 🚨
- ❌ Nggak paham logic kode sendiri → Double Suspicious 🚨🚨
- ❌ Challenge selesai tapi reflection blank → Definitely Cheating 🚨🚨🚨

```
┌────────────────────────────────────────────────────────────┐
│       WHEN SOMEONE COPIES AI SOLUTION...                  │
├────────────────────────────────────────────────────────────┤
│                                                            │
│   Me Asking:  "Bisa explain kode kamu?"                   │
│                                                            │
│   Them:  👁️👄👁️  (Blank stare)                              │
│           "Uhhh... it just works?"                         │
│                                                            │
│   Me:  🤦‍♂️ (Detected)                                      │
│                                                            │
│   Their confidence:  ████░░░░░░░░░░░░░░░░░░ 20%           │
│   My suspicion:      ████████████████████████ 100%        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

**The Smell Test:**

✅ Code bau kayak manually written
   - Ada typo, ada comment random, ada eksperimen
   - Indentation sometimes inconsistent
   - Variable naming "kinda weird" tapi makes sense to author

❌ Code bau kayak ChatGPT Premium
   - Perfect formatting everywhere
   - Best practices di setiap line
   - Terlalu clean, terlalu sempurna
   - Comments seperti robot: "This function calculates..."

**Golden Rule:** Jika terlalu clean = probably ngga genuine 🚩

### The AI Trainer Analogy

```
┌────────────────────────────────────────────────────────────┐
│            GYM ANALOGY (Why Struggle Matters)              │
├────────────────────────────────────────────────────────────┤
│                                                            │
│  ❌ AI ngerjain code buat kamu:                            │
│                                                            │
│     💪 = 🤖                                                │
│     (Trainer angkat beban buat kamu)                       │
│     → Otot tetap lembek 💪😢                              │
│     → Nggak bisa lift sendiri                             │
│     → Buang2 waktu di gym                                 │
│                                                            │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                                            │
│  ✅ Kamu code, AI jadi trainer:                            │
│                                                            │
│     💪👈🤖                                                 │
│     (Kamu angkat, trainer guide form)                      │
│     → Otot jadi besar 💪😎                                │
│     → Form jadi bagus (no injury)                         │
│     → Skill bertahan selamanya                            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

```
Personal Trainer (AI):
- ✅ Lihat form kamu, koreksi
- ✅ Kasih tips & variations
- ✅ Motivasi & encourage
- ❌ Tidak mengangkat beban FOR kamu
- ❌ Tidak bisa bikin otot kamu langsung jadi besar

Kalau trainer ngangkat beban buat kamu = tidak berguna
Kalau trainer hanya lihat & guide = super valuable
```

---

### Bisa Minta Bantuan Untuk:
- ✅ **Code Review** — After you finish
- ✅ **Concept Explanation** — After struggling
- ✅ **Debugging Help** — When stuck 30+ mins
- ✅ **Best Practices** — To improve existing code
- ✅ **Reflection Discussion** — Deepening understanding

### Jangan Pernah Minta:
- ❌ **Direct Solutions** — That's cheating
- ❌ **Implementation** — You must code
- ❌ **Copy-Paste Code** — Defeats the purpose
- ❌ **Shortcut** — No shortcuts in this gym

---

## 🎨 Meme Image Resources

### Free Image Sources untuk "No AI Rule" Memes

**Rekomendasi Images:**

| Meme Type | Best Source | Search Term | Use Case |
|-----------|------------|-------------|----------|
| **Gym/Trainer** | [Unsplash](https://unsplash.com) | "personal trainer coaching" | AI sebagai trainer, bukan worker |
| **Brain/Learning** | [Unsplash](https://unsplash.com) | "brain power" "learning" | Struggle = brain growth |
| **Manual Work** | [Pixabay](https://pixabay.com) | "manual work" "hands on" | Actual coding effort |
| **Shortcut vs Path** | [Pexels](https://pexels.com) | "path" "journey" "hiking" | Long-term vs quick fix |
| **Before/After** | [Unsplash](https://unsplash.com) | "transformation" "progress" | Struggle journey visualization |
| **Copy-Paste Fail** | [Unsplash](https://unsplash.com) | "confused person" "lost" | Cheating detection humor |
| **Growth Mindset** | [Pixabay](https://pixabay.com) | "mountain climbing" "success" | Progressive overload |

**Usage Tips:**

```markdown
![Gym Trainer Visual]
(https://unsplash.com/photos/XXXXX)
Caption: "AI guides, doesn't code for you"

![Brain Activity]
(https://unsplash.com/photos/XXXXX)
Caption: "Your brain needs the workout, not AI"
```

**License Note:** Semua link adalah dari free stock photo sites:
- ✅ Unsplash - Free, no attribution required
- ✅ Pixabay - Free, no attribution required
- ✅ Pexels - Free, no attribution required

Semua legal untuk GitHub repo! 🎯

---

## 📚 Resources

### Level 1 References
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Promise & Async/Await](https://javascript.info/async)
- [PokeAPI Documentation](https://pokeapi.co)

### Level 2 References
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Data Immutability](https://developer.mozilla.org/en-US/docs/Glossary/Immutable)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Functional Programming Concepts](https://javascript.info/recursion)

---

## 📄 Definition of Done

### Level 1 ✅
- [x] All 10 challenges completed
- [x] All reflection questions answered
- [x] Code follows project structure
- [x] No hardcoded data
- [x] No console errors
- [x] Clean git history with meaningful commits

### Level 2 🚧
- [ ] All 20 challenges completed
- [ ] Data transformation properly separated
- [ ] Derived data clearly identified
- [ ] Defensive handling implemented
- [ ] TypeScript types defined
- [ ] All reflection questions answered
- [ ] Final project completed

---

## 🎬 Session Info

**Status:** Level 1 Complete ✅ | Level 2 Starting 🚧  
**Last Updated:** 2026-08-08  
**Focus:** Building solid React fundamentals  

---

**Remember:** Latihan konsisten > Cepat selesai. Fokus pada understanding, bukan completion.


