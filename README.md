# Building Modern Web Application

Repositori materi dan latihan untuk pelatihan **Building Modern Web Application di Inixindo Surabaya**. Peserta mempelajari pembuatan aplikasi web menggunakan Node.js dan Express, mengolah tampilan dinamis dengan EJS, serta menyusun antarmuka menggunakan Bootstrap 5.

Isi yang tersedia saat ini mencakup hari pertama: contoh kode materi, kunci jawaban lab, panduan praktik, dan petunjuk pengajar. Latihan dilakukan bertahap, mulai dari menjalankan JavaScript di terminal hingga menampilkan tabel karyawan melalui rute Express.

## Tujuan pembelajaran

Setelah menyelesaikan materi dan lab hari pertama, peserta diharapkan dapat:

- Menjalankan JavaScript melalui Node.js dan mencoba REPL.
- Memahami alur kode sinkron dan asinkron melalui contoh sederhana.
- Menyiapkan proyek Express dan menjalankan server lokal.
- Mengirim data dari Express ke tampilan EJS.
- Menggunakan variabel, percabangan, pengulangan, dan komponen EJS.
- Menggunakan komponen Bootstrap 5 untuk menyusun halaman web.
- Membuat rute GET, mengenali contoh POST, dan menampilkan data array dalam tabel.

## Teknologi yang digunakan

| Teknologi | Penggunaan dalam latihan |
| --- | --- |
| Node.js dan npm | Menjalankan JavaScript di sisi server serta mengelola dependensi proyek |
| Express | Membuat server, menangani rute, dan mengirim respons HTTP |
| EJS | Menampilkan data dari server melalui templat HTML |
| Bootstrap 5 | Menyusun tampilan dengan kartu, formulir, tabel, modal, dan sistem grid |

Data karyawan pada hari pertama menggunakan array di dalam kode. Contoh formulir belum menyimpan data ke basis data.

## Struktur repositori

```text
.
├── README.md
├── Panduan_Lab_Hari_1_Inixindo.pdf
└── Source_Code_Hari_1/
    ├── README.md
    ├── PANDUAN_PENGAJAR.md
    ├── PETA_MATERI_DAN_LAB.md
    ├── Materi/
    │   ├── 01_Pengenalan_Nodejs_dan_Web_Modern/
    │   ├── 02_Persiapan_Lingkungan_Kerja/
    │   ├── 03_Templating_dengan_EJS/
    │   ├── 04_Integrasi_Bootstrap_5/
    │   └── 05_Routing_Dasar_di_Express/
    └── Lab/
        ├── 01_Eksplorasi_Nodejs/
        ├── 02_Setup_Project_Express/
        ├── 03_Implementasi_EJS/
        ├── 04_Bootstrap_Dashboard/
        └── 05_Routing_Express/
```

Folder `Materi/` berisi contoh untuk penjelasan konsep dan demonstrasi. Folder `Lab/` berisi kode jawaban sesuai tahap latihan, termasuk tantangan tambahan pada Lab 5. README di setiap folder menjelaskan berkas yang perlu disalin dan hasil yang diperiksa.