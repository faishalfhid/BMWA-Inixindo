const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const nama = typeof req.query.nama === 'string' ? req.query.nama.trim() : '';
  res.render('index', { namaPengguna: nama || 'Peserta Pelatihan' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
