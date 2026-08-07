# Back to the Root - Level 1

# Level 1 – React Frontend Foundation

## Goal
Memahami alur **Request → State → Render** menggunakan React + TypeScript tanpa bantuan library tambahan.

## Prasyarat
- React 19 + Vite
- TypeScript
- CSS biasa / CSS Modules
- Fetch API
- Git
- React DevTools

---

# Challenge 1 — Hello PokeAPI

## Objective
Menampilkan 20 Pokémon pertama dari endpoint:
`GET https://pokeapi.co/api/v2/pokemon`

## Requirement
- Request otomatis saat halaman dibuka.
- Data berasal dari API.
- Tampilkan hanya nama Pokémon.
- Jangan hardcode data.

## Acceptance Criteria
- Data tampil.
- Tidak ada request berulang tanpa alasan.
- Tidak ada error di console.

## Yang Dipelajari
- fetch
- async/await
- useEffect
- useState

## Reflection
1. Mengapa `fetch()` mengembalikan Promise?
2. Mengapa perlu `response.json()`?

---

# Challenge 2 — Loading State

## Objective
Tambahkan indikator loading.

## Requirement
- Tampilkan `Loading...` hanya saat request berlangsung.
- Setelah selesai, loading hilang.

## Acceptance Criteria
- Loading tidak tampil bersamaan dengan data.
- Tidak flicker berlebihan.

## Yang Dipelajari
- Conditional rendering
- Boolean state

## Reflection
- Apa beda loading dengan data kosong?

---

# Challenge 3 — Error State

## Objective
Tangani kegagalan request.

## Requirement
- Gunakan try/catch/finally.
- Tampilkan pesan:
`Oops! Failed to fetch Pokémon.`

## Acceptance Criteria
- UI tidak crash.
- Error mudah dipahami user.

## Yang Dipelajari
- Error handling
- finally

## Reflection
- Mengapa `finally` selalu dijalankan?

---

# Challenge 4 — Empty State

## Objective
Tangani kondisi data kosong.

## Requirement
Jika `results=[]`, tampilkan:
`No Pokémon Found`

## Acceptance Criteria
- Tidak dianggap error.
- Tidak loading terus.

## Yang Dipelajari
Empat state UI:
- Loading
- Success
- Empty
- Error

## Reflection
- Mengapa Empty berbeda dengan Error?

---

# Challenge 5 — Pokemon Card

## Objective
Pisahkan UI menjadi komponen.

## Requirement
Buat `PokemonCard` menerima:
- name
- url

Tampilkan:
- Nama
- Tombol "View Detail"

## Acceptance Criteria
- Render menggunakan `map()`.
- Tidak ada duplikasi markup.

## Yang Dipelajari
- Component
- Props
- List rendering

## Reflection
- Mengapa React membutuhkan `key`?

---

# Challenge 6 — Pagination

## Objective
Gunakan `next` dan `previous` dari API.

## Requirement
- Tombol Previous
- Tombol Next
- Tidak reload browser

## Acceptance Criteria
- Klik Next memuat halaman berikutnya.
- Klik Previous kembali.

## Yang Dipelajari
- State memicu render
- Effect berdasarkan dependency

## Reflection
- Mengapa perubahan state menyebabkan render ulang?

---

# Challenge 7 — Disable Navigation

## Objective
Nonaktifkan tombol yang tidak bisa digunakan.

## Requirement
- Previous disable saat `previous === null`
- Next disable saat `next === null`

## Acceptance Criteria
- Tombol mengikuti kondisi API.

## Yang Dipelajari
- Conditional UI

## Reflection
- Disable vs Hidden, kapan digunakan?

---

# Challenge 8 — Scroll To Top

## Objective
Perbaiki pengalaman pengguna.

## Requirement
Saat berpindah halaman:
- Scroll otomatis ke atas.

## Acceptance Criteria
- Tidak perlu scroll manual.

## Yang Dipelajari
- Browser API
- UX dasar

## Reflection
- Mengapa fitur kecil bisa meningkatkan UX?

---

# Challenge 9 — Analisis Cache

## Objective
Latihan berpikir.

## Tugas
Tuliskan analisis:
- Kapan perlu fetch ulang?
- Kapan cache lebih baik?
- Apa risiko cache?

Belum perlu implementasi.

---

# Challenge 10 — Refactor

## Objective
Rapikan struktur project.

Target:

```text
src/
├── components/
├── services/
├── types/
├── App.tsx
└── main.tsx
```

Pisahkan:
- UI
- API
- Types

## Reflection
- Apa keuntungan memisahkan UI dan logic?

---

# Definition of Done

- [ ] Fetch data berhasil
- [ ] Loading State
- [ ] Error State
- [ ] Empty State
- [ ] Component PokemonCard
- [ ] Pagination
- [ ] Disable Button
- [ ] Scroll To Top
- [ ] Refactor
- [ ] Menjawab semua Reflection
