// Import fungsi hitung dari file kalkulator.mjs
import { hitung } from './kalkukatorHW2.mjs';

// Memanggil fungsi minimal 4 kali dengan operator berbeda
console.log("Hasil Penjumlahan (5 + 3) =", hitung(5, 3, '+'));
console.log("Hasil Pengurangan (10 - 4) =", hitung(10, 4, '-'));
console.log("Hasil Perkalian (4 * 6)   =", hitung(4, 6, '*'));
console.log("Hasil Pembagian (20 / 5)  =", hitung(20, 5, '/'));