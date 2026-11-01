# Petunjuk pengajar

Gunakan repositori ini sebagai rujukan kode yang dibuka peserta melalui GitHub. Peserta tetap mengerjakan proyek latihannya sendiri mengikuti materi dan panduan lab.

## Urutan penyalinan kode lab

| Tahap | Berkas yang disalin | Hasil yang diperiksa |
| --- | --- | --- |
| Lab 1 | Baris pada `repl.txt` atau isi `jawaban.js` | Pesan Node.js dan hasil perkalian 50 |
| Lab 2 | Seluruh isi `app.js` | Respons Hello World pada `/` |
| Lab 3 | Seluruh isi `app.js` dan `views/index.ejs` | Sapaan Peserta Pelatihan pada `/` |
| Lab 4 | Seluruh isi `views/index.ejs` | Card Bootstrap; `app.js` tersedia sebagai pembanding |
| Lab 5 | Seluruh isi `app.js`, `views/index.ejs`, dan `views/karyawan.ejs` | Tiga baris karyawan serta navigasi pergi/kembali |

Hentikan server sebelum mengganti kode. Setelah berkas disimpan, jalankan kembali `node app.js` dari folder proyek latihan peserta. Setiap kunci `app.js` menggantikan seluruh isi berkas sebelumnya agar tidak muncul deklarasi atau rute ganda.

## Pemakaian contoh materi

Contoh Materi 1 dapat disalin ke berkas JavaScript untuk demonstrasi terminal. Materi 2 menyediakan server pertama. Materi 3 melengkapi konsep EJS dengan percabangan, loop, dan include. Materi 4 menunjukkan komponen Bootstrap yang disebutkan dalam bahan, sedangkan Materi 5 melengkapi pembahasan POST melalui form `/salam`.

Gunakan folder kerja demonstrasi pengajar untuk mencoba contoh materi yang berbeda dari tugas lab. Pada tugas wajib, peserta mengikuti kode dalam folder Lab sesuai tahap yang sedang dikerjakan.

## Tantangan Lab 5

Deklarasi array lima karyawan disediakan pada `Lab/05_Routing_Express/tantangan/data-karyawan-5.js`. Peserta menyalin deklarasi itu untuk mengganti array `dataKaryawan` dalam handler `/karyawan`. Berkas tantangan tidak perlu diimpor atau dipasang sebagai modul. Template EJS tetap sama.

## Pemeriksaan singkat

Jika halaman EJS gagal dibuka, periksa nama folder `views`, nama template pada `res.render()`, dan nama variabel yang dikirim. Jika tabel tidak bertambah, simpan `app.js`, jalankan ulang server, lalu muat ulang peramban. Jika tampilan Bootstrap tidak muncul atau modal tidak terbuka, periksa koneksi ke CDN dan tautan CSS/JavaScript.

Materi dan lab hari 1 masih memakai data array. PostgreSQL, Prisma, autentikasi, dan CRUD mengikuti sesi berikutnya.
