console.log('A: mulai menunggu');
// Timer menyimulasikan waktu tunggu I/O; contoh ini tidak mengakses database.
setTimeout(() => {
  console.log('A: selesai menunggu');
}, 300);
console.log('B: diproses');
