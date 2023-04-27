// Tipe data return function

function dapatNama(): string {
  // return harus string, selain string gabisa.
  return 'Halo! Nama ku Mirza!';
}

console.log(dapatNama());

function dapatUmur(): number {
  // return harus number, selain number gabisa.
  return 12345;
}

console.log(dapatUmur());

function printNama(): void {
  // void berfungsi untuk tidak me-return apa-apa.
  console.log(
    'ngeprint function printNama() disini, tapi tidak bisa return apa-apa',
  );
}
printNama();

// Tipe Data Arguments

function multiply(value1: number, value2: number): number {
  return value1 * value2;
}
const result = multiply(34, 56);
console.log(result);

type Persegi = {
  panjang: number;
  lebar: number;
};

const persegiSatu = {
  panjang: 10,
  lebar: 5,
};

function hitungLuas(persegi: Persegi) {
  return persegi.panjang * persegi.lebar;
}
hitungLuas(persegiSatu);
