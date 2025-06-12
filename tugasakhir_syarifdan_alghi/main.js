import { barang } from "./nma_barang.js";
import { hitungTotal, validasiBarang, validasiJumlah } from "./sistem.js";

const hargaBarang = 10000;
console.log("Daftar Barang:", barang.join(", "));

while (true) {
  try {
    const inputBarang = prompt("Pilih barang (Beras/Gula/Minyak):");
    validasiBarang(inputBarang, barang);

    const inputJumlah = parseInt(prompt("Berapa jumlah yang dibeli:"));
    validasiJumlah(inputJumlah);

    console.log(`Anda membeli: ${inputBarang} sebanyak ${inputJumlah}`);

    const total = hitungTotal(hargaBarang, inputJumlah);
    console.log(`Total bayar: Rp${total}`);

    const lanjut = prompt("Mau beli barang lain? (ya/tidak):");
    if (!lanjut || lanjut.toLowerCase() !== "ya") {
      console.log("Terima kasih sudah berbelanja!");
      break;
    }

  } catch (error) {
    console.log("Terjadi error:", error.message);
    break; 
  }
}
