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

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
