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

// Prisma Int dipetakan ke bilangan bulat PostgreSQL 32 bit.
const aturanBarang = [
  body('nama').isString().withMessage('Nama harus berupa teks').bail()
    .trim().notEmpty().withMessage('Nama barang tidak boleh kosong'),
  body('harga').isString().withMessage('Harga harus berupa satu nilai').bail()
    .isInt({ min: 0, max: 2147483647 })
    .withMessage('Harga harus bilangan bulat antara 0 dan 2147483647').bail().toInt(),
  body('stok').isString().withMessage('Stok harus berupa satu nilai').bail()
    .isInt({ min: 0, max: 2147483647 })
    .withMessage('Stok harus bilangan bulat antara 0 dan 2147483647').bail().toInt()
];

// READ
app.get('/barang', async (req, res, next) => {
  try {
    const barangs = await prisma.barang.findMany({ orderBy: { id: 'asc' } });
    res.render('barang', {
      listBarang: barangs,
      sukses: typeof req.query.pesan === 'string' ? req.query.pesan : '',
      gagal: typeof req.query.gagal === 'string' ? req.query.gagal : ''
    });
  } catch (err) {
    next(err);
  }
});

// CREATE: tampilkan formulir.
app.get('/barang/tambah', (req, res) => {
  res.render('tambah-barang', { errors: [], values: {} });
});

// CREATE: periksa dan simpan data.
app.post('/barang/tambah', aturanBarang, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('tambah-barang', {
      errors: errors.array(),
      values: req.body
    });
  }
  try {
    const { nama, harga, stok } = req.body;
    await prisma.barang.create({ data: { nama, harga, stok } });
    res.redirect('/barang?pesan=Barang+berhasil+ditambahkan');
  } catch (err) {
    next(err);
  }
});

// ID pada URL harus merupakan ID positif yang dapat disimpan sebagai Prisma Int.
app.param('id', (req, res, next, id) => {
  if (!/^[1-9]\d*$/.test(id) || Number(id) > 2147483647) {
    return res.status(400).type('text/plain').send('ID barang tidak valid.');
  }
  req.barangId = Number(id);
  next();
});

// UPDATE: ambil nilai lama agar formulir terisi.
app.get('/barang/edit/:id', async (req, res, next) => {
  try {
    const b = await prisma.barang.findUnique({ where: { id: req.barangId } });
    if (!b) {
      return res.status(404).type('text/plain').send('Barang tidak ditemukan.');
    }
    res.render('edit-barang', { b, errors: [] });
  } catch (err) {
    next(err);
  }
});

// UPDATE: validasi input dan simpan perubahan.
app.post('/barang/edit/:id', aturanBarang, async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).render('edit-barang', {
      b: { ...req.body, id: req.barangId },
      errors: errors.array()
    });
  }
  try {
    const { nama, harga, stok } = req.body;
    await prisma.barang.update({
      where: { id: req.barangId },
      data: { nama, harga, stok }
    });
    res.redirect('/barang?pesan=Barang+berhasil+diubah');
  } catch (err) {
    next(err);
  }
});

// DELETE: hanya menerima POST dari formulir konfirmasi.
app.post('/barang/hapus/:id', async (req, res, next) => {
  try {
    await prisma.barang.delete({ where: { id: req.barangId } });
    res.redirect('/barang?pesan=Barang+berhasil+dihapus');
  } catch (err) {
    next(err);
  }
});

// Letakkan penanganan galat setelah seluruh rute dan sebelum app.listen().
app.use((err, req, res, next) => {
  if (err.code === 'P2025') {
    return res.status(404).type('text/plain').send('Barang tidak ditemukan.');
  }
  console.error(err.message);
  res.status(500).type('text/plain').send(
    'Operasi gagal. Periksa koneksi dan pesan pada terminal.'
  );
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
