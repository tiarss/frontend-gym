# Back to the Root — Level 2
## Data Processing & Transformation

> **Status:** Level 1 completed  
> **Stack:** React 19 + Vite + TypeScript + Fetch API + CSS biasa/CSS Modules  
> **API:** PokeAPI  
> **Rule:** Tidak menggunakan AI untuk menghasilkan solusi kode. AI hanya boleh digunakan setelah mencoba sendiri, terutama untuk review dan diskusi konsep.

---

# 1. Tujuan Level 2

Level 1 berfokus pada:

```text
Request
   ↓
Response
   ↓
State
   ↓
Render
```

Level 2 mulai berfokus pada apa yang terjadi **di antara response API dan UI**.

```text
API
 ↓
Raw Data
 ↓
Transform
 ↓
Derived Data
 ↓
UI
```

Target utama:

- memahami struktur data API;
- membaca nested object/array;
- melakukan transformasi data;
- menggunakan `map`, `filter`, `find`, `some`, `every`, dan `reduce`;
- memisahkan raw data dengan derived data;
- memahami immutability;
- menangani data yang tidak lengkap;
- menggabungkan data dari beberapa sumber;
- menggunakan TypeScript untuk mendeskripsikan data;
- menghindari transformasi yang tidak perlu;
- mulai berpikir tentang kualitas dan efisiensi pengolahan data.

---

# 2. Rules

## Boleh

- React
- TypeScript
- Fetch API
- JavaScript/TypeScript built-in methods
- React state
- React DevTools
- Browser DevTools
- Console
- CSS

## Belum boleh

- Lodash
- Ramda
- TanStack Query
- Redux/Zustand
- Axios
- utility library untuk data transformation

Tujuannya adalah memahami bagaimana JavaScript sendiri mengolah data sebelum menggunakan abstraction.

---

# 3. Prerequisite

Sebelum mulai, pastikan kamu memahami:

- array
- object
- destructuring
- spread operator
- optional chaining
- nullish coalescing
- `map`
- `filter`
- `find`
- `some`
- `every`
- `reduce`
- basic TypeScript types

Tidak harus hafal semuanya. Tetapi harus mau mencari tahu dan memahami ketika digunakan.

---

# Challenge 1 — Read the Raw Data

## Objective

Berhenti melihat API sebagai "list nama".

Buka detail salah satu Pokémon menggunakan:

```text
GET https://pokeapi.co/api/v2/pokemon/{name}
```

Contoh:

```text
/pokemon/pikachu
```

## Task

Gunakan DevTools/Console untuk menemukan:

- name
- id
- height
- weight
- base_experience
- abilities
- types
- stats
- moves
- sprites

## Requirement

Belum perlu membuat UI baru.

Buat catatan struktur data:

```text
pokemon
├── id
├── name
├── abilities[]
├── types[]
├── stats[]
└── sprites
```

## Reflection

1. Mana property yang primitive?
2. Mana yang array?
3. Mana yang object?
4. Mana yang nested?
5. Apa konsekuensinya terhadap cara rendering?

---

# Challenge 2 — Pokemon Summary

## Objective

Buat summary object dari raw Pokémon data.

Raw API:

```text
pokemon
```

menjadi:

```ts
{
  id,
  name,
  height,
  weight,
  image,
  types
}
```

## Requirement

Transformasi dilakukan di logic layer, bukan langsung memenuhi JSX dengan expression panjang.

## Acceptance Criteria

UI menampilkan:

- ID
- Name
- Height
- Weight
- Image
- Types

## Reflection

Kenapa lebih baik UI menerima data yang sudah siap ditampilkan daripada memahami seluruh struktur response API?

---

# Challenge 3 — Types

## Objective

Ambil data:

```text
types
```

Contoh:

```text
[
  {
    slot: 1,
    type: {
      name: "electric",
      url: "..."
    }
  }
]
```

ubah menjadi:

```text
["electric"]
```

atau:

```text
["fire", "flying"]
```

## Requirement

Gunakan transformation JavaScript.

Jangan hardcode berdasarkan Pokémon tertentu.

## Acceptance Criteria

Semua Pokémon dengan jumlah type berbeda tetap bekerja.

## Reflection

Apa yang terjadi jika Pokémon memiliki satu type? Dua type?

---

# Challenge 4 — Abilities

## Objective

Transform:

```text
abilities[]
```

menjadi daftar nama ability.

Contoh:

```text
[
  "static",
  "lightning-rod"
]
```

## Bonus

Tentukan ability mana yang:

```text
is_hidden === true
```

## Acceptance Criteria

UI dapat membedakan:

```text
Static
Lightning Rod (Hidden)
```

## Reflection

Kenapa `filter()` dan `map()` bisa digunakan secara berurutan?

---

# Challenge 5 — Stats

## Objective

Ambil:

```text
stats[]
```

dan ubah menjadi struktur yang lebih mudah digunakan UI.

Raw:

```text
[
  {
    base_stat: 35,
    stat: {
      name: "hp"
    }
  }
]
```

Target konsep:

```text
[
  {
    name: "hp",
    value: 35
  }
]
```

## Requirement

Jangan bergantung pada urutan array.

Gunakan nama stat sebagai identifier.

## Acceptance Criteria

Tampilkan:

- HP
- Attack
- Defense
- Special Attack
- Special Defense
- Speed

## Reflection

Mengapa mengambil data berdasarkan `stat.name` lebih aman daripada menganggap index tertentu selalu berarti HP?

---

# Challenge 6 — Total Base Stats

## Objective

Hitung total seluruh `base_stat`.

Contoh:

```text
HP
+ Attack
+ Defense
+ Sp. Attack
+ Sp. Defense
+ Speed
```

menjadi:

```text
Total Base Stats
```

## Requirement

Gunakan `reduce()`.

Jangan melakukan penjumlahan manual.

## Acceptance Criteria

Pokémon mana pun dapat dihitung.

## Reflection

1. Apa fungsi accumulator?
2. Apa initial value?
3. Apa yang terjadi jika array stats kosong?

---

# Challenge 7 — Find Specific Data

## Objective

Buat fungsi untuk mengambil nilai stat tertentu.

Contoh:

```text
getStat(pokemon, "speed")
```

menghasilkan:

```text
90
```

## Requirement

Jangan mengandalkan index.

## Bonus

Buat fungsi:

```text
getStat(pokemon, "hp")
getStat(pokemon, "attack")
getStat(pokemon, "speed")
```

## Reflection

Apa perbedaan `find()` dengan `filter()` dalam kasus ini?

---

# Challenge 8 — Derived Pokemon Rating

## Objective

Buat rating sederhana berdasarkan total base stats.

Aturan:

```text
>= 600  → Legendary Level
>= 500  → Very Strong
>= 400  → Strong
>= 300  → Average
< 300   → Weak
```

## Requirement

Rating tidak boleh disimpan sebagai data asli Pokémon.

Rating harus dihitung dari data.

## Acceptance Criteria

Jika stats berubah, rating otomatis berubah.

## Reflection

Apa yang dimaksud dengan **derived data**?

---

# Challenge 9 — Pokemon Classification

## Objective

Buat beberapa informasi turunan:

```text
isFast
isStrong
isHeavy
```

Aturan:

```text
isFast:
speed >= 100

isStrong:
totalStats >= 500

isHeavy:
weight >= 100
```

## Requirement

Jangan mengubah raw API response.

## Reflection

Apa perbedaan raw data dan derived data?

---

# Challenge 10 — Search Local Data

## Objective

Gunakan daftar Pokémon yang sudah dimuat dari API.

Buat pencarian berdasarkan nama.

Contoh:

```text
Input:
char
```

hasil:

```text
Charmander
Charmeleon
Charizard
```

## Requirement

Filtering dilakukan terhadap data yang sudah ada.

Jangan request API setiap karakter.

## Acceptance Criteria

- case insensitive;
- partial match;
- empty search mengembalikan seluruh data.

## Reflection

Mengapa `search === ""` harus diperlakukan berbeda?

---

# Challenge 11 — Filter by Type

## Objective

Filter Pokémon berdasarkan type.

Contoh:

```text
Fire
```

menghasilkan Pokémon Fire.

## Requirement

Untuk data yang tersedia di aplikasi, filtering dilakukan secara lokal.

## Bonus

Gabungkan dengan search:

```text
Search: char
Type: fire
```

hasil hanya Pokémon yang memenuhi kedua kondisi.

## Reflection

Apa perbedaan antara filter A lalu filter B dan satu filter dengan dua kondisi?

---

# Challenge 12 — Sort

## Objective

Tambahkan sorting.

Pilihan:

```text
Name A-Z
Name Z-A
ID Ascending
ID Descending
Base Stats Ascending
Base Stats Descending
```

## Requirement

Jangan merusak array state asli.

## Acceptance Criteria

Setelah sorting, data asli tetap aman.

## Reflection

Kenapa `sort()` perlu diperhatikan ketika bekerja dengan state?

---

# Challenge 13 — Immutability Experiment

## Objective

Buat dua pendekatan:

### Approach A

Mengubah array secara langsung.

### Approach B

Membuat array baru.

Amati perbedaannya terhadap React state.

## Tugas

Tuliskan hasil eksperimen:

```text
Apa yang terjadi?
Mengapa?
Pendekatan mana yang lebih aman?
```

## Goal

Memahami konsep **immutability**, bukan sekadar menghafal istilah.

---

# Challenge 14 — Normalize Data

## Objective

Buat data yang lebih mudah digunakan aplikasi.

Contoh:

```text
API Response
```

menjadi:

```ts
{
  id: number,
  name: string,
  image: string,
  types: string[],
  stats: Record<string, number>,
  totalStats: number,
  abilities: string[]
}
```

## Requirement

UI tidak perlu mengetahui struktur response asli PokeAPI.

## Acceptance Criteria

Komponen UI bekerja menggunakan model data buatanmu.

## Reflection

Apa keuntungan memiliki domain model sendiri?

---

# Challenge 15 — Multiple Pokemon

## Objective

Jangan hanya memproses satu Pokémon.

Ambil beberapa Pokémon dan tampilkan:

```text
Name
Type
Total Stats
Speed
Rating
```

## Requirement

Setiap Pokémon diproses menggunakan transformation logic yang sama.

## Acceptance Criteria

Tidak ada logic khusus seperti:

```text
if pikachu
if charizard
if bulbasaur
```

---

# Challenge 16 — Data Pipeline

## Objective

Gabungkan seluruh konsep menjadi pipeline.

Target:

```text
API Response
      ↓
Extract
      ↓
Transform
      ↓
Normalize
      ↓
Calculate
      ↓
Filter
      ↓
Sort
      ↓
Render
```

## Requirement

Buat fungsi-fungsi kecil dengan tanggung jawab jelas.

Contoh konsep:

```text
transformPokemon()
getPokemonTypes()
getPokemonStats()
calculateTotalStats()
getPokemonRating()
```

Nama fungsi bebas.

## Reflection

Apakah semua transformasi harus dilakukan dalam satu fungsi?

Mengapa?

---

# Challenge 17 — Defensive Data Handling

## Objective

Buat aplikasi tahan terhadap data yang tidak sesuai ekspektasi.

Simulasikan:

- `types` kosong;
- `abilities` kosong;
- `stats` kosong;
- image tidak tersedia;
- nama tidak tersedia.

## Requirement

Aplikasi tidak crash.

## Acceptance Criteria

Selalu ada fallback yang masuk akal.

Contoh:

```text
Unknown Type
No Image
No Ability
```

## Reflection

Apa beda:

```ts
foo.bar
```

dengan:

```ts
foo?.bar
```

dan kapan optional chaining dapat menyembunyikan bug?

---

# Challenge 18 — TypeScript Challenge

## Objective

Definisikan tipe untuk data Pokémon yang kamu gunakan.

Jangan membuat seluruh response API jika aplikasi hanya membutuhkan sebagian data.

## Requirement

Tipe harus mendukung:

- id
- name
- image
- types
- abilities
- stats
- totalStats
- rating

## Bonus

Buat tipe khusus untuk:

```text
PokemonSummary
PokemonStat
PokemonAbility
```

## Reflection

Mengapa domain type tidak harus sama persis dengan API response?

---

# Challenge 19 — Performance Thought Experiment

## Scenario

Bayangkan kamu memiliki:

```text
10,000 Pokémon
```

Setiap render melakukan:

```text
map
filter
sort
reduce
```

## Tugas

Belum perlu optimasi.

Analisis:

1. Apa yang dijalankan setiap render?
2. Operasi mana yang paling mahal?
3. Apakah semua hasil perlu dihitung ulang?
4. Kapan caching hasil perhitungan masuk akal?
5. Apa risiko melakukan optimasi terlalu dini?

## Goal

Mulai berpikir tentang performance sebelum Level 4.

---

# Challenge 20 — Final Level 2

## Mini Project

Bangun:

# Pokémon Data Explorer

Aplikasi harus memiliki:

### Data

- Pokémon list
- Name
- ID
- Image
- Types
- Abilities
- Stats
- Total Stats
- Rating

### Transformation

- Type extraction
- Ability extraction
- Stat normalization
- Total stats
- Rating
- Derived classification

### Interaction

- Search
- Filter by type
- Sort
- Kombinasi search + filter + sort

### Defensive Handling

- Empty data
- Missing image
- Missing type
- Missing ability
- Missing stats

### TypeScript

Gunakan domain types yang jelas.

---

# 4. Acceptance Criteria — Final Project

- [ ] Tidak ada hardcode Pokémon tertentu.
- [ ] Data berasal dari API.
- [ ] Raw API response tidak langsung digunakan di seluruh UI.
- [ ] Ada transformation layer.
- [ ] Ada derived data.
- [ ] Search bekerja.
- [ ] Filter bekerja.
- [ ] Sort bekerja.
- [ ] Search + filter + sort dapat digunakan bersamaan.
- [ ] State asli tidak dimutasi secara sembarangan.
- [ ] Data kosong ditangani.
- [ ] Data tidak lengkap tidak menyebabkan crash.
- [ ] TypeScript digunakan dengan benar.
- [ ] Tidak menggunakan library data transformation.
- [ ] Semua reflection selesai.

---

# 5. Manual Test Cases

## Test 1 — Search

Input:

```text
char
```

Expected:

```text
Charmander
Charmeleon
Charizard
```

## Test 2 — Case Insensitive

Input:

```text
CHAR
```

Expected sama dengan `char`.

## Test 3 — Empty Search

Input kosong.

Expected:

```text
Semua Pokémon
```

## Test 4 — Filter

Type:

```text
Fire
```

Expected:

Hanya Pokémon Fire.

## Test 5 — Combined Filter

Search:

```text
char
```

Type:

```text
Fire
```

Expected:

Hanya Pokémon yang memenuhi kedua kondisi.

## Test 6 — Sort

Sort:

```text
Base Stats Descending
```

Expected:

Pokémon dengan total stats terbesar berada di atas.

## Test 7 — Missing Data

Simulasikan:

```text
types = []
```

Expected:

```text
Unknown Type
```

Aplikasi tidak crash.

---

# 6. Common Mistakes

## Mistake 1 — Mengubah API response langsung

Jangan menjadikan response API sebagai tempat menyimpan data tambahan seperti:

```text
totalStats
rating
isStrong
```

Pisahkan raw data dan derived data.

## Mistake 2 — Mutasi array

Hati-hati dengan:

```text
sort()
```

dan operasi lain yang memodifikasi object/array.

## Mistake 3 — Logic di JSX terlalu kompleks

Jika logic sudah sulit dibaca, pindahkan ke transformation/domain logic.

## Mistake 4 — Hardcode index

Jangan menganggap:

```text
stats[0] = HP
stats[1] = Attack
```

Gunakan identifier dari API.

## Mistake 5 — Menggunakan state untuk semua hal

Tidak semua data turunan perlu disimpan sebagai state.

Pahami perbedaan:

```text
State
vs
Derived Data
```

---

# 7. Reflection Akhir

Sebelum naik Level 3, kamu harus bisa menjelaskan dengan kata-katamu sendiri:

### Data
Apa perbedaan raw data dan derived data?

### Array
Kapan menggunakan map, filter, find, some, every, dan reduce?

### State
Mengapa tidak semua hasil perhitungan harus disimpan sebagai state?

### Immutability
Mengapa mutasi state dapat menyebabkan masalah?

### Architecture
Mengapa transformation logic sebaiknya tidak memenuhi component UI?

### TypeScript
Mengapa domain model bisa berbeda dengan API response?

### Performance
Kapan sebuah transformasi perlu dioptimalkan?

---

# 8. Level 2 Completion Checklist

## Fundamental

- [ ] Memahami struktur response PokeAPI
- [ ] Bisa membaca nested object
- [ ] Bisa membaca nested array
- [ ] Bisa menggunakan map
- [ ] Bisa menggunakan filter
- [ ] Bisa menggunakan find
- [ ] Bisa menggunakan some
- [ ] Bisa menggunakan every
- [ ] Bisa menggunakan reduce

## Data Processing

- [ ] Extract
- [ ] Transform
- [ ] Normalize
- [ ] Calculate
- [ ] Filter
- [ ] Sort

## React

- [ ] Memisahkan transformation dari UI
- [ ] Memahami derived data
- [ ] Memahami immutability

## TypeScript

- [ ] Membuat interface/type
- [ ] Membuat domain model

## Quality

- [ ] Defensive data handling
- [ ] Tidak ada hardcode
- [ ] Tidak ada library transformation
- [ ] Reflection selesai

---

# 9. Target Mental Model

Level 1:

```text
API
 ↓
Fetch
 ↓
State
 ↓
UI
```

Level 2:

```text
API
 ↓
Raw Response
 ↓
Extract
 ↓
Transform
 ↓
Normalize
 ↓
Derived Data
 ↓
Filter / Sort
 ↓
UI
```

Jika Level 1 mengajarkan:

> **"Bagaimana mengambil data?"**

Maka Level 2 harus membuatmu nyaman dengan:

> **"Bagaimana mengubah data mentah menjadi data yang benar-benar dibutuhkan UI?"**

---

# Back to the Root

Jangan buru-buru menyelesaikan challenge.

Untuk setiap challenge:

```text
Read
 ↓
Think
 ↓
Design
 ↓
Code
 ↓
Test
 ↓
Debug
 ↓
Reflect
 ↓
Commit
```

**AI bukan shortcut untuk melewati proses tersebut.**

Kalau mentok, tulis dulu:
- apa yang kamu harapkan;
- apa yang terjadi;
- data yang kamu terima;
- error yang muncul;
- apa saja yang sudah kamu coba.

Baru setelah itu cari bantuan.
