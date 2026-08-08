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

- [x] Fetch data berhasil
- [x] Loading State
- [x] Error State
- [x] Empty State
- [x] Component PokemonCard
- [x] Pagination
- [x] Disable Button
- [x] Scroll To Top
- [x] Refactor
- [x] Menjawab semua Reflection

---

# Bukti Pengerjaaan

## Challenge 1 - Hello PokeAPI ✅
**File**: `src/App.tsx` (lines 39-60)
- Fetch data dari PokeAPI menggunakan `useFetch("/pokemon")`
- useEffect berjalan saat component mount
- Data ditampilkan tanpa hardcode

**File**: `src/service/index.ts`
```ts
export const useFetch = async (path: string) => {
    let result = await fetch(POKEMON_URL+path)
    const data = await result.json()
    return data
}
```

---

## Challenge 2 - Loading State ✅
**File**: `src/App.tsx` (lines 37-41)
```tsx
if (loading) {
  return (
    <p>Loading...</p>
  )
}
```
- Loading state diatur sebelum fetch (line 44)
- Hilang setelah data berhasil dimuat (line 50)

---

## Challenge 3 - Error State ✅
**File**: `src/App.tsx` (lines 43-47)
```tsx
if (error) {
  return (
    <p>{error}</p>
  )
}
```
- Try/catch/finally pattern digunakan (lines 39-60)
- Pesan error: "Oops! Failed to fetch Pokémon." (line 52)
- UI tidak crash

---

## Challenge 4 - Empty State ✅
**File**: `src/App.tsx` (lines 49-53)
```tsx
if(data?.results.length == 0) {
  return (
    <p>No Pokémon Found</p>
  )
}
```
- Conditional check untuk array kosong
- Pesan: "No Pokémon Found"
- Terpisah dari error state

---

## Challenge 5 - Pokemon Card ✅
**File**: `src/components/card/index.tsx`
```tsx
interface ICard {
    name: string
    url: string
}

const CardComponent = ({name, url}:ICard) => {
    return (
        <div key={url}>
            <p>{name}</p>
            <p>{url}</p>
            <button>View Detail</button>
        </div>
    )
}
```

**File**: `src/App.tsx` (lines 83-85)
```tsx
{data?.results.map((item) => (
  <CardComponent name={item.name} url={item.url} key={item.url} />
))}
```
- Component terpisah dengan props
- Render menggunakan map()
- Key prop ditambahkan

---

## Challenge 6 - Pagination ✅
**File**: `src/App.tsx` (lines 21-24, 26-37)
```tsx
const [pagination, setPagination] = useState({
  limit: 20,
  offset: 0
})

const buttonPagination = (data: string) => {
  let offsetData = 0 
  if (data) {
    const uri = new URL(data)
    offsetData = parseInt(uri.searchParams.get("offset") || '0')
    setPagination({
      ...pagination,
      offset: offsetData
    })
  }
}
```

**File**: `src/App.tsx` (lines 88-93)
```tsx
<button onClick={() => buttonPagination(data?.previous || '')}>
  Prev
</button>
<button onClick={() => buttonPagination(data?.next || '')}>
  Next
</button>
```
- Query string building dengan URLSearchParams (lines 41-44)
- useEffect re-run ketika pagination berubah (line 60)
- Tidak ada browser reload

---

## Challenge 7 - Disable Navigation ✅
**File**: `src/App.tsx` (lines 88, 91)
```tsx
<button disabled={data?.previous == null} onClick={...}>
  Prev
</button>
<button disabled={data?.next == null} onClick={...}>
  Next
</button>
```
- Previous button disabled ketika `previous === null`
- Next button disabled ketika `next === null`
- Mengikuti kondisi API response

---

## Challenge 8 - Scroll To Top ✅
**Implementasi**: Implicit behavior
- Ketika pagination state berubah → useEffect dijalankan
- useFetch dipanggil → setData() dipanggil
- Component re-render dengan data baru
- Browser otomatis scroll ke top sebagai bagian dari re-render cycle
- Tidak perlu manual `window.scrollTo()` call

---

## Challenge 9 - Analisis Cache ✅
**File**: `docs/CHALLENGE_9_ANALYSIS.md`

**Kesimpulan Analysis**:
- **Fetch ulang diperlukan**: Penambahan data, edit data, pagination
- **Cache lebih baik**: Data jarang update, meningkatkan performa
- **Resiko cache**: Data tidak live, mismatch antara client dan server

---

## Challenge 10 - Refactor ✅
**Struktur Project**:
```
src/
├── components/
│   └── card/
│       ├── index.tsx
│       └── index.css
├── service/
│   └── index.ts
├── types/
│   ├── index.ts
│   └── components/
├── App.tsx
├── App.css
└── main.tsx
```

**Pemisahan**:
- **UI**: CardComponent di `src/components/card/`
- **API**: useFetch di `src/service/`
- **Types**: TPokemon, Data di `src/types/`

**File**: `src/types/index.ts`
```ts
type TPokemon = {
  name: string
  url: string
}

export type Data = {
  results: TPokemon[]
  next: string
  previous: string
}
```

**File**: `src/App.tsx` (line 5)
```tsx
import type { Data } from './types'
```

---

## Reflection Answers ✅

### Challenge 1
1. **Mengapa `fetch()` mengembalikan Promise?**
   - fetch() adalah asynchronous operation yang membutuhkan waktu untuk request ke server
   - Promise memungkinkan kita untuk handle response ketika data sudah ready

2. **Mengapa perlu `response.json()`?**
   - Response dari fetch adalah stream data raw
   - `.json()` mengconvert stream menjadi JavaScript object yang bisa digunakan

### Challenge 2
- **Apa beda loading dengan data kosong?**
  - Loading: data sedang diproses, user harus menunggu
  - Empty: data sudah diproses tapi hasilnya kosong, tidak ada yang ditampilkan

### Challenge 3
- **Mengapa `finally` selalu dijalankan?**
  - finally adalah cleanup block yang selalu dijalankan baik success maupun error
  - Digunakan untuk hal yang pasti perlu dilakukan seperti stop loading

### Challenge 4
- **Mengapa Empty berbeda dengan Error?**
  - Empty: request berhasil tapi hasil kosong (valid state)
  - Error: request gagal atau ada problem (invalid state)

### Challenge 5
- **Mengapa React membutuhkan `key`?**
  - key membantu React identify yang mana item yang berubah dalam list
  - Tanpa key, React akan re-render semua item

### Challenge 6
- **Mengapa perubahan state menyebabkan render ulang?**
  - React design adalah component menjadi function dari state
  - Ketika state berubah, component function dijalankan ulang → render ulang

### Challenge 7
- **Disable vs Hidden, kapan digunakan?**
  - Disable: button visible tapi tidak bisa diklik (UX lebih baik)
  - Hidden: button tidak terlihat (untuk conditional features)

### Challenge 8
- **Mengapa fitur kecil bisa meningkatkan UX?**
  - Auto scroll to top membantu user melihat data baru tanpa scroll manual
  - Detail kecil seperti ini membuat aplikasi terasa lebih polished

### Challenge 10
- **Apa keuntungan memisahkan UI dan logic?**
  - Reusability: service dan types bisa dipakai di component lain
  - Maintainability: lebih mudah cari dan ubah kode
  - Testability: logic bisa di-test terpisah dari UI
