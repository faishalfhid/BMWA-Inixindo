# Kunci jawaban lab 5: routing Express

Salin kode dari berkas berikut ke proyek latihan Anda sesuai lokasi tujuan.

| Berkas jawaban | Tempat menempelkan kode | Isi |
| --- | --- | --- |
| [app.js](app.js) | `app.js` | Kode server dengan rute GET /karyawan. |
| [views/index.ejs](views/index.ejs) | `views/index.ejs` | Beranda dengan tautan ke tabel. |
| [views/karyawan.ejs](views/karyawan.ejs) | `views/karyawan.ejs` | Tabel karyawan dengan forEach. |
| [tantangan/data-karyawan-5.js](tantangan/data-karyawan-5.js) | Deklarasi `dataKaryawan` dalam rute `/karyawan` pada `app.js` | Jawaban tantangan tambahan dua karyawan. |

## Cara menggunakan

Lanjutkan proyek latihan Lab 4. Ganti seluruh isi `app.js` dan `views/index.ejs`, lalu buat `views/karyawan.ejs` menggunakan kode jawaban ini.

Klik Mulai Belajar pada `/`. Halaman `/karyawan` harus menampilkan tiga baris: Budi Santoso (IT), Siti Aminah (Finance), dan Agus Setiawan (Marketing). Tombol Kembali menuju `/`.

## Jawaban tantangan

Buka `tantangan/data-karyawan-5.js`, lalu salin seluruh deklarasi `const dataKaryawan = [...]`. Di dalam handler `/karyawan` pada `app.js`, ganti deklarasi array yang berisi tiga karyawan dengan deklarasi yang disalin. Jangan menambahkan deklarasi kedua. Biarkan `res.render()` tetap ada.

Jalankan ulang server. Tabel kini berisi lima baris tanpa mengubah EJS. Dua nama terakhir merupakan data contoh tambahan. Untuk kembali ke jawaban wajib, gunakan array tiga karyawan pada `app.js` di folder ini.
