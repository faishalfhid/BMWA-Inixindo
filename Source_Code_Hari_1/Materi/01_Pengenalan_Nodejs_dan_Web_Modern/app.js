const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Halo dari Express!');
});

// Contoh respons data untuk menjelaskan peran backend.
app.get('/api/pesan', (req, res) => {
  res.json({ pesan: 'Halo dari backend Node.js!' });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
