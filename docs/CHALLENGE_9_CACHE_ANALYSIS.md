# Challenge 9 — Analisis Cache

## Objective
Latihan berpikir tentang strategi caching dalam aplikasi React yang mengambil data dari API.

## Tugas
Tuliskan analisis:
1. Kapan perlu fetch ulang?
2. Kapan cache lebih baik?
3. Apa risiko cache?

---

## Jawaban (Analisis Lengkap)

### 1. Kapan Perlu Fetch Ulang?

#### Implementasi Saat Ini
Dalam kode `App.tsx`, fetch ulang terjadi ketika:

- **Pagination berubah** (Previous/Next ditekan)
  - `setPagination()` dipanggil → state berubah → `useEffect` trigger
  - Query parameter `limit` dan `offset` berubah
  - Setiap perubahan offset = fetch baru ke API

```tsx
useEffect(() => {
  // fetch dipanggil setiap kali pagination berubah
}, [pagination])
```

- **Component pertama kali mount**
  - Initial state: `offset: 0`
  - Dependency array `[pagination]` memicu effect di awal

**Kelemahan**: Tidak ada kontrol untuk menghindari fetch berulang untuk page yang sama.

#### Kapan Harus Fetch Ulang (Best Practices)

✅ **Harus fetch ulang:**
- User navigasi ke halaman baru (offset/limit berubah)
- User klik "Refresh" button (manual force refresh)
- Data tidak ada di cache
- Cache sudah expired (lebih dari X menit)
- User login/logout (credential berubah)
- **Penambahan data** ke server
- **Edit data** di server
- **Pagination** ke halaman berbeda

❌ **Tidak perlu fetch ulang:**
- User kembali ke halaman yang sudah dilihat (cache tersedia)
- User hanya scroll halaman (data tidak berubah)

---

### 2. Kapan Cache Lebih Baik?

#### Skenario Ideal untuk Cache
Cache sangat berguna untuk:

- **User navigasi bolak-balik**
  - Contoh: Lihat page 1 → page 2 → kembali ke page 1
  - Tanpa cache: fetch page 1 lagi (wasting bandwidth & time)
  - Dengan cache: return stored page 1 instantly

- **Network lambat atau unstable**
  - Cached data memberikan instant response
  - UX lebih baik (tidak perlu loading ulang)

- **Data yang jarang berubah**
  - Pokémon data tidak update setiap detik
  - Cache bisa valid 5 menit, 1 jam, bahkan sehari
  - Mengurangi beban API server

- **Frekuensi perubahan data rendah**
  - User tidak perlu melihat data real-time

#### Keuntungan Cache
✅ **Performa meningkat** - tidak perlu request ke server setiap kali
✅ **Bandwidth lebih efisien** - mengurangi beban network
✅ **UX lebih cepat** - data langsung available dari cache
✅ **Reduce server load** - kurang request ke server
✅ **Offline capability** - data bisa diakses tanpa network

#### Kapan Cache Tidak Cocok

❌ **Jangan cache untuk:**
- Real-time data (stock prices, chat messages)
- User-specific data yang sering berubah
- Sensitive data (passwords, tokens)
- Large dataset yang boros memory

---

### 3. Apa Risiko Cache?

#### Identifikasi Risiko

| Risiko | Penjelasan | Dampak |
|--------|-----------|--------|
| **Stale Data** | Cache tidak di-invalidate | User melihat data lama, bisa confusion atau bug |
| **Memory Leak** | Cache terlalu besar | Aplikasi slow atau crash |
| **Data Mismatch** | Client ≠ Server | User A lihat data lama, User B lihat data baru |
| **Complex Logic** | Cache invalidation rumit | Error-prone, sulit di-maintain |
| **Debugging Sulit** | Data aneh? Cache atau API? | Sulit predict behavior |

#### Solusi untuk Setiap Risiko

| Risiko | Solusi |
|--------|--------|
| **Stale Data** | Time-based expiry (TTL) atau Manual refresh button |
| **Memory Leak** | Size limit, LRU eviction strategy |
| **Inconsistency** | Manual refresh button atau Event-based invalidation |
| **Kompleksitas** | Use library (React Query, SWR) |
| **Debug Sulit** | Clear cache in dev tools, console logging

---

## Saran Jawaban (Best Practices)

### Strategi Cache yang Tepat

#### 1. **Kapan Perlu Fetch Ulang**

```
✅ Harus fetch ulang:
- User navigasi ke halaman baru (offset/limit berubah)
- User klik "Refresh" button (manual force refresh)
- Data tidak ada di cache
- Cache sudah expired (lebih dari X menit)
- User login/logout (credential berubah)

❌ Tidak perlu fetch ulang:
- User kembali ke halaman yang sudah dilihat (cache tersedia)
- User hanya scroll halaman (data tidak berubah)
```

#### 2. **Kapan Cache Lebih Baik**

```
✅ Cache sangat bagus untuk:
- Navigasi bolak-balik (user experience lebih smooth)
- Halaman dengan pagination (hemat bandwidth)
- Data yang jarang update (Pokémon list jarang berubah)
- Network lambat/unstable (fallback ke cache)
- Reduce server load (less API calls)

❌ Jangan cache untuk:
- Real-time data (stock prices, chat messages)
- User-specific data yang sering berubah
- Sensitive data (passwords, tokens)
- Large dataset yang boros memory
```

#### 3. **Risiko Cache & Mitigasi**

| Risiko | Penyebab | Solusi |
|--------|---------|--------|
| **Stale Data** | Cache tidak di-invalidate | Time-based expiry (TTL) |
| **Memory Leak** | Cache terlalu besar | Size limit, LRU eviction |
| **Inconsistency** | Server vs client berbeda | Manual refresh button |
| **Kompleks** | Logic cache rumit | Use library (React Query, SWR) |
| **Debug Sulit** | Tidak jelas sumbernya | Clear cache in dev tools |

---

## Implementasi Cache (Contoh Improved Version)

Berikut contoh bagaimana cache bisa diimplementasikan:

### Opsi 1: Simple Object Cache

```tsx
// Tambahkan cache state
const [cache, setCache] = useState<Record<string, Data>>({})

// Generate cache key dari offset
const getCacheKey = (offset: number) => `pokemon_${offset}`

// Modify useEffect untuk check cache dulu
useEffect(() => {
  const cacheKey = getCacheKey(pagination.offset)
  
  // Check apakah sudah di cache
  if (cache[cacheKey]) {
    setData(cache[cacheKey])
    setLoading(false)
    return
  }
  
  // Jika tidak ada di cache, fetch dari API
  setLoading(true)
  useFetch("/pokemon?" + new URLSearchParams({
    limit: pagination.limit.toString(),
    offset: pagination.offset.toString()
  }).toString())
    .then((newData) => {
      setData(newData)
      // Simpan ke cache
      setCache(prev => ({
        ...prev,
        [cacheKey]: newData
      }))
      setError("")
    })
    .catch(() => setError("Oops! Failed to fetch Pokémon."))
    .finally(() => setLoading(false))
}, [pagination])
```

**Kelebihan**: Simple, mudah dipahami
**Kekurangan**: Tidak ada expiry, tidak ada size limit, memory bisa full

### Opsi 2: Cache dengan TTL (Time To Live)

```tsx
interface CacheEntry<T> {
  data: T
  timestamp: number
}

const [cache, setCache] = useState<Record<string, CacheEntry<Data>>>({})
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

const isCacheValid = (entry: CacheEntry<Data>) => {
  const now = Date.now()
  return (now - entry.timestamp) < CACHE_TTL
}

useEffect(() => {
  const cacheKey = getCacheKey(pagination.offset)
  const cachedEntry = cache[cacheKey]
  
  // Check cache validity
  if (cachedEntry && isCacheValid(cachedEntry)) {
    setData(cachedEntry.data)
    setLoading(false)
    return
  }
  
  // Fetch & store with timestamp
  setLoading(true)
  useFetch(...)
    .then((newData) => {
      setData(newData)
      setCache(prev => ({
        ...prev,
        [cacheKey]: { data: newData, timestamp: Date.now() }
      }))
    })
}, [pagination])
```

**Kelebihan**: Data tidak selamanya stale, lebih realistis
**Kekurangan**: Masih perlu manual management

### Opsi 3: React Query / TanStack Query (Recommended)

```tsx
import { useQuery } from '@tanstack/react-query'

function App() {
  const [pagination, setPagination] = useState({ limit: 20, offset: 0 })
  
  // React Query handle caching otomatis
  const { data, isLoading, error } = useQuery({
    queryKey: ['pokemon', pagination.offset],
    queryFn: () => useFetch("/pokemon?offset=" + pagination.offset),
    staleTime: 5 * 60 * 1000, // Cache valid 5 menit
    gcTime: 30 * 60 * 1000, // Hapus dari memory setelah 30 menit
  })
  
  // UI render logic...
}
```

**Kelebihan**: 
- Automatic cache management
- Stale while revalidate pattern
- Background refetch
- Automatic garbage collection

**Kekurangan**: Dependency baru, perlu learning curve

---

## Kesimpulan

### Untuk Challenge Ini

**Dari code Anda sekarang:**
- ✅ Benar: Fetch pada pagination change
- ❌ Kurang: Tidak ada cache → fetch setiap kali page diubah
- ❌ Kurang: Tidak ada data persistence

**Rekomendasi next step:**
1. Implementasi simple cache (Opsi 1/2) untuk practice
2. Learn tentang cache invalidation strategy
3. Explore React Query untuk production

### Rule of Thumb

```
Data jarang update + sering diakses + navigasi bolak-balik
  ↓
  Cache akan sangat membantu UX

Data real-time + jarang diakses ulang + bandwidth tidak masalah
  ↓
  Tidak perlu cache, fetch on-demand saja
```

---

## Reflection Questions

1. **Mengapa Pokémon list bagus untuk di-cache?**
   - Jarang update, sering diakses, pagination scenario

2. **Kapan cache bisa menyebabkan bug?**
   - Ketika data di server update tapi client masih pakai cache lama

3. **Apa yang perlu di-cache vs tidak?**
   - Cache: list data, detail screen (read-only)
   - Jangan: form data, user session, real-time feed

4. **Bagaimana handle cache invalidation?**
   - Time-based (TTL) atau Manual refresh button atau Event-based (WebSocket)

5. **Apa tradeoff cache vs fetching?**
   - Cache: Fast, offline-friendly, tapi bisa stale
   - Fetch: Always fresh, tapi slow, butuh network

