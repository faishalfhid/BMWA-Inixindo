# Materi 5: routing dasar di Express

Salin kode dari berkas berikut ke proyek latihan Anda sesuai lokasi tujuan.

| Berkas jawaban | Tempat menempelkan kode | Isi |
| --- | --- | --- |
| [app.js](app.js) | `app.js` | Rute beranda, tabel karyawan, dan contoh GET/POST. |
| [views/index.ejs](views/index.ejs) | `views/index.ejs` | Beranda dengan tautan navigasi. |
| [views/karyawan.ejs](views/karyawan.ejs) | `views/karyawan.ejs` | Tabel tiga karyawan dari array. |
| [views/salam.ejs](views/salam.ejs) | `views/salam.ejs` | Form POST dan tampilan respons. |

## Cara menggunakan

Ganti seluruh isi berkas tujuan dengan kode pada folder ini. Buka `/karyawan` untuk tabel. Buka `/salam`, isi nama, lalu kirim untuk mencoba POST. Isian kosong atau lebih dari 100 karakter menghasilkan respons HTTP 400.

`express.urlencoded()` diperlukan untuk membaca isian form. Data tidak disimpan. POST menaruh data pada tubuh permintaan; HTTPS diperlukan untuk melindungi pengiriman data.

Lab 5 hanya meminta tabel melalui GET. Contoh POST ini melengkapi pembahasan materi dan tidak perlu ditambahkan pada jawaban wajib Lab 5.
