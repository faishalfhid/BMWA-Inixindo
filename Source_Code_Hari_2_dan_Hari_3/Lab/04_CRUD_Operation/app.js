// Ganti seluruh isi app.js pada proyek latihan Anda dengan kode ini.
// Jalankan node app.js dari folder proyek latihan yang memuat views/.
// Kode ini mempertahankan beranda dan tabel karyawan dari hari 1.
// Gunakan Prisma 6.19.0; salin schema/config dan jalankan db push/generate lebih dahulu.
require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  const dataUser = { namaPengguna: 'Peserta Pelatihan' };
  res.render('index', dataUser);
});

app.get('/karyawan', (req, res) => {
  const dataKaryawan = [
    { id: 1, nama: 'Budi Santoso', divisi: 'IT' },
    { id: 2, nama: 'Siti Aminah', divisi: 'Finance' },
    { id: 3, nama: 'Agus Setiawan', divisi: 'Marketing' }
  ];
  res.render('karyawan', { listKaryawan: dataKaryawan });
});

const aturanForm = [
  body('nama').isString().withMessage('Nama harus berupa teks').bail()
    .trim().notEmpty().withMessage('Nama tidak boleh kosong'),
  body('email').isString().withMessage('Format email tidak valid').bail()
    .trim().isEmail().withMessage('Format email tidak valid')
];

app.get('/form', (req, res) => {
  res.render('form', { errors: [], values: {} });
});

app.post('/submit-form', aturanForm, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('form', {
      errors: errors.array(),
      values: req.body
    });
  }
  // Respons teks menjaga isian pengguna tetap menjadi teks, bukan kode HTML.
  res.type('text/plain').send(
    `Sukses! Nama: ${req.body.nama}, Email: ${req.body.email}`
  );
});

// Pemeriksaan data dan ID mengikuti LAB 04 pada panduan Hari 2.
const validasiBarang = [
  body('nama').isString().bail().trim().notEmpty(),
  body('harga').isString().bail()
    .isInt({ min: 0, max: 2147483647 }),
  body('stok').isString().bail()
    .isInt({ min: 0, max: 2147483647 })
];

function cekDataBarang(req, res, next) {
  if (!validationResult(req).isEmpty()) {
    return res.status(422).type('text/plain').send(
      'Data tidak valid. Isi nama, harga, dan stok dengan benar.'
    );
  }
  next();
}

function cekIdBarang(req, res, next) {
  const id = Number(req.params.id);
  if (!/^[0-9]+$/.test(req.params.id) ||
      !Number.isInteger(id) || id < 1 || id > 2147483647) {
    return res.status(400).type('text/plain').send(
      'ID barang tidak valid.'
    );
  }
  req.barangId = id;
  next();
}

// READ dan formulir tambah
app.get('/barang', async (req, res, next) => {
  try {
    const barangs = await prisma.barang.findMany({ orderBy: { id: 'asc' } });
    res.render('barang', { listBarang: barangs });
  } catch (err) {
    next(err);
  }
});
app.get('/barang/tambah', (req, res) => {
  res.render('tambah-barang');
});

// CREATE
app.post('/barang/tambah', validasiBarang, cekDataBarang,
  async (req, res, next) => {
    try {
      const { nama, harga, stok } = req.body;
      await prisma.barang.create({
        data: { nama, harga: Number(harga), stok: Number(stok) }
      });
      res.redirect('/barang');
    } catch (err) {
      next(err);
    }
  }
);

// UPDATE: formulir berisi nilai lama
app.get('/barang/edit/:id', cekIdBarang,
  async (req, res, next) => {
    try {
      const barang = await prisma.barang.findUnique({
        where: { id: req.barangId }
      });
      if (!barang) {
        return res.status(404).type('text/plain').send(
          'Barang tidak ditemukan.'
        );
      }
      res.render('edit-barang', { b: barang });
    } catch (err) {
      next(err);
    }
  }
);

// UPDATE: simpan perubahan
app.post('/barang/edit/:id', cekIdBarang,
  validasiBarang, cekDataBarang, async (req, res, next) => {
    try {
      const { nama, harga, stok } = req.body;
      await prisma.barang.update({
        where: { id: req.barangId },
        data: { nama, harga: Number(harga), stok: Number(stok) }
      });
      res.redirect('/barang');
    } catch (err) {
      next(err);
    }
  }
);

// DELETE: hanya menerima POST
app.post('/barang/hapus/:id', cekIdBarang,
  async (req, res, next) => {
    try {
      await prisma.barang.delete({
        where: { id: req.barangId }
      });
      res.redirect('/barang');
    } catch (err) {
      next(err);
    }
  }
);

// Penanganan galat setelah seluruh rute
app.use((err, req, res, next) => {
  if (err.code === 'P2025') {
    return res.status(404).type('text/plain').send(
      'Barang tidak ditemukan atau sudah dihapus.'
    );
  }
  console.error(err.message);
  res.status(500).type('text/plain').send(
    'Operasi gagal. Periksa koneksi dan pesan pada terminal.'
  );
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
