const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

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

// Parser ini diperlukan agar isian form POST tersedia di req.body.
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

app.get('/salam', (req, res) => {
  res.render('salam', { nama: '', pesan: '', galat: '' });
});

app.post('/salam', (req, res) => {
  const nama = typeof req.body.nama === 'string' ? req.body.nama.trim() : '';
  if (!nama || nama.length > 100) {
    return res.status(400).render('salam', {
      nama,
      pesan: '',
      galat: 'Isi nama dengan 1 sampai 100 karakter.'
    });
  }
  res.render('salam', { nama, pesan: `Halo, ${nama}! Data diterima lewat POST.`, galat: '' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
