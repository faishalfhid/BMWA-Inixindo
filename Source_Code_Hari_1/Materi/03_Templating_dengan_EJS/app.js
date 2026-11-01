const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const dataUser = {
    namaPengguna: 'Peserta Pelatihan',
    sudahLogin: req.query.status !== 'tamu',
    daftarMateri: req.query.daftar === 'kosong' ? [] : ['Node.js', 'Express', 'EJS']
  };
  res.render('index', dataUser);
});

app.get('/teks', (req, res) => {
  res.send('Ini respons langsung dari res.send().');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
