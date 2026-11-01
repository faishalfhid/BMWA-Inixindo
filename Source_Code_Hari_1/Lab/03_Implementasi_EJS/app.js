const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  // Data ini seolah-olah berasal dari database.
  const dataUser = { namaPengguna: 'Peserta Pelatihan' };
  res.render('index', dataUser);
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
