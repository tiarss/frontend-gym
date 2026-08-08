# Challenge 9 - Analisis Cache

## Kapan Perlu Fetch Ulang?

### 1. **Penambahan Data**
Ketika ada data baru yang ditambahkan ke server, perlu fetch ulang agar data terbaru terlihat di UI.

### 2. **Edit Data**
Ketika data di-edit/diperbarui di server, fetch ulang diperlukan untuk menampilkan perubahan.

### 3. **Pagination**
Setiap pergantian halaman memerlukan fetch data yang berbeda dari server (offset/limit berbeda).

---

## Kapan Cache Lebih Baik?

### **Skenario Ideal untuk Cache:**
- Data **jarang update** atau **jarang bertambah**
- Frequency perubahan data rendah
- User tidak perlu melihat data real-time

### **Keuntungan Cache:**
✅ **Performa meningkat** - tidak perlu request ke server setiap kali
✅ **Bandwidth lebih efisien** - mengurangi beban network
✅ **UX lebih cepat** - data langsung available dari cache
✅ **Reduce server load** - kurang request ke server

---

## Resiko Cache?

### **1. Data Tidak Live**
Data di cache adalah snapshot lama, bukan data real-time dari server.

### **2. Data Mismatch**
Jika data berubah di server tapi masih cache di client:
- User melihat data lama
- Bisa membingungkan/mengganggu experience

### **3. Stale Data Problem**
User membuat keputusan berdasarkan data lama yang sudah tidak valid.

---

## Strategi Optimal

### **Untuk Data yang Jarang Berubah:**
```
Gunakan cache → Performa bagus, UX cepat
```

### **Untuk Data yang Sering Berubah:**
```
Fetch ulang → Data selalu fresh, experience user lebih baik
```

### **Pertimbangkan:**
- **Frekuensi perubahan data**
- **Jumlah data** (besar/kecil)
- **Kebutuhan real-time**
- **Bandwidth constraint**
- **User expectations**

---

## Kesimpulan

Cache adalah trade-off antara **performa** vs **freshness**. Pilih berdasarkan karakteristik data dan kebutuhan aplikasi.
