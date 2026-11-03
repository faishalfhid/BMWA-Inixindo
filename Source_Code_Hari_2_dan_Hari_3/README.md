# Kunci jawaban Hari 2

Kunci jawaban CRUD mengikuti LAB 04 pada `Panduan_Lab_Hari_2_Inixindo.docx` dan `Materi_4_Membangun_Fitur_CRUD.html`. Contoh mencakup tambah, daftar, edit, dan hapus barang melalui Express, EJS, serta Prisma 6.19.0.

| Folder | Isi kunci jawaban |
| --- | --- |
| `Lab/04_CRUD_Operation` | CRUD lengkap dengan tiga halaman EJS yang masing-masing memiliki struktur HTML sendiri. |
| `Materi/04_Membangun_Fitur_CRUD` | Contoh CRUD untuk pembahasan materi dengan rute dan validasi yang sama dengan Lab 04. |
| `Lab/05_Komponen_Partials` | CRUD lengkap dengan header dan footer bersama untuk halaman daftar, tambah, serta edit. |
| `Materi/05_Code_Reusability` | CRUD dengan partial serta pesan keberhasilan setelah tambah, edit, dan hapus. |

## Menggunakan kunci jawaban

Folder-folder di atas berisi berkas yang disalin ke proyek latihan Hari 1. Setiap folder merupakan satu versi jawaban; pilih satu versi untuk digunakan pada proyek. Salin `app.js`, seluruh isi `views/`, `prisma/schema.prisma`, dan `prisma.config.ts` dari versi yang dipilih ke lokasi yang sama pada proyek latihan. Penggantian `app.js` mempertahankan rute beranda, karyawan, dan validasi formulir.

Jalankan perintah berikut dari folder proyek latihan yang berisi `package.json`. Jika membuat proyek latihan baru, jalankan `npm init -y` terlebih dahulu.

```sh
npm install express ejs express-validator dotenv
npm install --save-dev --save-exact prisma@6.19.0
npm install --save-exact @prisma/client@6.19.0
```

Salin `.env.example` menjadi `.env` jika belum ada. Isi `DATABASE_URL` dengan URI Session pooler Supabase port 5432 dari proyek latihan, sesuai Lab 2. Pertahankan `.env` yang sudah benar ketika berpindah versi jawaban. Muat aturan `.gitignore` dari folder jawaban ke proyek latihan.

```sh
npx prisma validate
npx prisma db push
npx prisma generate
node app.js
```

Gunakan basis data latihan dari Lab 3. Jika `db push` memberi peringatan kehilangan data, hentikan dan periksa perubahan skema. Buka `http://localhost:3000/barang` setelah server berjalan. Perintah `node app.js` dijalankan dari folder utama proyek agar Express menemukan `views/`.

## Rute CRUD

| Metode | Alamat | Fungsi |
| --- | --- | --- |
| GET | `/barang` | Membaca daftar barang melalui `findMany()`. |
| GET | `/barang/tambah` | Menampilkan formulir tambah. |
| POST | `/barang/tambah` | Memvalidasi isian lalu menyimpan barang dengan `create()`. |
| GET | `/barang/edit/:id` | Mengambil nilai lama melalui `findUnique()` dan menampilkan formulir edit. |
| POST | `/barang/edit/:id` | Memvalidasi isian lalu memperbarui barang dengan `update()`. |
| POST | `/barang/hapus/:id` | Memvalidasi ID lalu menghapus satu barang dengan `delete()`. |

`validasiBarang` dan `cekDataBarang` dipakai bersama oleh fitur tambah dan edit. Nama wajib berupa teks yang tidak kosong setelah `trim()`. Harga serta stok harus berupa bilangan bulat dari 0 sampai 2147483647; `Number()` mengonversinya setelah validasi berhasil. Isian yang salah menghasilkan status 422 dengan pesan teks, sesuai panduan. Gunakan tombol Kembali pada peramban untuk memperbaiki isian.

`cekIdBarang` menolak ID yang bukan bilangan bulat positif dalam batas Int dengan status 400. Barang yang tidak ditemukan menghasilkan 404. Galat Prisma `P2025` saat sasaran edit atau hapus sudah tidak ada juga menghasilkan 404. Kegagalan lain menghasilkan 500, dengan detail pada terminal.

Pada tabel, tautan Edit membuka formulir berisi nilai lama. Tombol Hapus mengirim POST setelah konfirmasi. Tombol Batal pada formulir edit kembali ke daftar tanpa menyimpan isian. Pada versi partial, ketiga halaman memakai header dan footer yang sama.

## Pemeriksaan hasil

1. Tambahkan Buku Tulis dengan harga 12000 dan stok 25, lalu Pulpen dengan harga 5000 dan stok 10. Catat kedua ID; dua baris harus muncul pada daftar.
2. Edit Buku Tulis menjadi Buku Tulis A5, harga 15000, dan stok 20. Ketiga nilai harus berubah tanpa mengubah ID atau menambah baris. Uji juga tombol Batal edit.
3. Klik Hapus pada Pulpen dan batalkan dialog; baris harus tetap ada. Ulangi dan setujui; hanya baris Pulpen yang hilang.
4. Tambahkan `novalidate` pada tag form melalui alat pengembang peramban. Uji nama berupa spasi, harga negatif, stok pecahan, dan nilai di atas 2147483647 pada formulir tambah serta edit. Server harus mengirim 422 tanpa mengubah data. Nilai 0 harus diterima.
5. Buka `/barang/edit/abc`, `/barang/edit/1abc`, dan `/barang/edit/0`; hasilnya 400. Buka halaman edit dengan ID Pulpen yang sudah dihapus; hasilnya 404.
6. Buka Edit pada satu tab, hapus barang yang sama dari tab lain, lalu kirim perubahan dari tab edit. Hasilnya 404. Mengirim ulang POST hapus untuk ID yang sama juga menghasilkan 404.
7. Tambahkan kembali dua barang latihan, ubah salah satunya, lalu hentikan dan jalankan ulang server. Nilai terakhir harus tetap tersimpan; barang yang dihapus tidak muncul kembali.
8. Untuk versi Lab/Materi 05, periksa navigasi dan footer pada daftar, tambah, serta edit. Pada Materi 05, periksa pula pesan keberhasilan setelah setiap perubahan.
