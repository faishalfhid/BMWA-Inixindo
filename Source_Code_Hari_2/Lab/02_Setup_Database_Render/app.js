// Ganti seluruh isi app.js pada proyek latihan Anda dengan kode ini.
// Jalankan node app.js dari folder proyek latihan yang memuat views/.
// Kode ini mempertahankan beranda dan tabel karyawan dari hari 1.
require('dotenv').config();
const express = require('express');
const { body, validationResult } = require('express-validator');
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

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
