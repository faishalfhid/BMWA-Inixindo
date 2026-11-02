// Salin ke proyek latihan setelah schema dimigrasikan dan Prisma Client dibuat.
// Jalankan: node cek-koneksi.js
require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function cekKoneksi() {
  try {
    await prisma.$connect();
    const jumlah = await prisma.barang.count();
    console.log('Koneksi PostgreSQL berhasil.');
    console.log(`Jumlah barang: ${jumlah}`);
  } catch (err) {
    console.error('Koneksi gagal. Periksa DATABASE_URL, migrasi, dan koneksi internet.');
    process.exitCode = 1;
  } finally {
    await prisma.$disconnect();
  }
}

cekKoneksi();
