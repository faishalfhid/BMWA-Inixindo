# Kunci jawaban hari 1

Repositori ini menyimpan kode contoh materi dan kunci jawaban lab hari 1 untuk pelatihan Building Modern Web Application. Peserta membuka berkas di GitHub, menyalin kodenya, lalu menempelkannya pada proyek latihan yang dikerjakan selama kelas.

## Cara menggunakan

1. Pilih materi atau lab pada tabel di bawah.
2. Baca README pada folder tersebut untuk mengetahui berkas tujuan.
3. Buka berkas kode yang diperlukan. Di GitHub, gunakan tombol salin kode atau tampilan Raw.
4. Ganti seluruh isi berkas tujuan pada proyek latihan Anda, kecuali jika petunjuk menyebut potongan kode tertentu.
5. Simpan berkas, jalankan ulang server proyek latihan, lalu periksa hasil sesuai panduan lab.

Berkas `app.js` berisi kode server lengkap pada tahap tersebut. Jangan menempelkannya di bawah kode `app.js` yang sudah ada karena deklarasi dan rute akan berulang. Jalankan server dari folder proyek latihan agar Express menemukan folder `views`.

Penyiapan proyek serta pemasangan Express dan EJS mengikuti materi dan panduan lab. Folder jawaban ini hanya berisi kode untuk disalin, tanpa paket instalasi proyek.

## Daftar materi

| Sesi | Kode jawaban | Isi |
| --- | --- | --- |
| Materi 1 | [Pengenalan Node.js dan web modern](Materi/01_Pengenalan_Nodejs_dan_Web_Modern/README.md) | Kode terminal, simulasi sinkron/asinkron, dan server sederhana |
| Materi 2 | [Persiapan lingkungan kerja](Materi/02_Persiapan_Lingkungan_Kerja/README.md) | Kode server Express pertama |
| Materi 3 | [Templating dengan EJS](Materi/03_Templating_dengan_EJS/README.md) | Variabel, percabangan, pengulangan, dan include |
| Materi 4 | [Integrasi Bootstrap 5](Materi/04_Integrasi_Bootstrap_5/README.md) | Card, form, tabel, modal, dan sidebar |
| Materi 5 | [Routing dasar di Express](Materi/05_Routing_Dasar_di_Express/README.md) | GET, POST, dan tabel dari array |

## Daftar lab

| Sesi | Kunci jawaban | Hasil akhir |
| --- | --- | --- |
| Lab 1 | [Eksplorasi Node.js](Lab/01_Eksplorasi_Nodejs/README.md) | Pesan pada terminal dan hasil perkalian 50 |
| Lab 2 | [Setup proyek Express](Lab/02_Setup_Project_Express/README.md) | Respons Hello World |
| Lab 3 | [Implementasi EJS](Lab/03_Implementasi_EJS/README.md) | Sapaan dinamis pada halaman |
| Lab 4 | [Dasbor Bootstrap](Lab/04_Bootstrap_Dashboard/README.md) | Card dasbor sesuai lab |
| Lab 5 | [Routing Express](Lab/05_Routing_Express/README.md) | Tabel tiga karyawan dan jawaban tantangan lima karyawan |

## Susunan berkas

Kode dikelompokkan dalam `Materi/` dan `Lab/`, masing-masing berisi lima folder sesuai urutan sesi. Lokasi `views/` dan `views/partials/` menunjukkan tempat berkas EJS harus dibuat pada proyek latihan peserta.

Lab 2 sampai Lab 5 melanjutkan proyek latihan yang sama. Jawaban per lab menunjukkan kode lengkap pada akhir tahap tersebut. Contoh tambahan pada folder Materi membantu pengajar menjelaskan konsep di luar tugas wajib lab.

Bootstrap memakai CDN 5.3.0 sesuai bahan pelatihan. Halaman Bootstrap memerlukan internet untuk memuat CSS, dan contoh modal juga memerlukan JavaScript bundle dari CDN.

[Petunjuk pengajar](PANDUAN_PENGAJAR.md) menjelaskan urutan penyalinan kode. [Peta materi dan lab](PETA_MATERI_DAN_LAB.md) menunjukkan cakupan setiap jawaban.
