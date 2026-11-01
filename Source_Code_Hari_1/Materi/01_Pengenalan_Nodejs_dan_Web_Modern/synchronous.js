// Jeda ini sengaja memblokir untuk demonstrasi singkat; hindari pada server nyata.
console.log('A: mulai menunggu');
const selesai = Date.now() + 300;
while (Date.now() < selesai) {
  // JavaScript tetap sibuk, sehingga perintah B belum bisa dijalankan.
}
console.log('A: selesai menunggu');
console.log('B: diproses');
