export function hitungTotal(harga, jumlah) {
  return harga * jumlah;
}

export function validasiBarang(inputBarang, daftarBarang) {
  if (!inputBarang) {
    throw new Error("Input barang tidak boleh kosong.");
  }
  if (!daftarBarang.includes(inputBarang)) {
    throw new Error("Barang tidak valid atau tidak tersedia.");
  }
  return true;
}

export function validasiJumlah(inputJumlah) {
  if (isNaN(inputJumlah) || inputJumlah <= 0) {
    throw new Error("Jumlah Tidak Mencukupi");
  }
  return true;
}

