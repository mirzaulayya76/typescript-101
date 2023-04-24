"use strict";
// Tipe data return function
function dapatNama() {
    // return harus string, selain string gabisa.
    return 'Halo! Nama ku Mirza!';
}
console.log(dapatNama());
function dapatUmur() {
    // return harus number, selain number gabisa.
    return 12345;
}
console.log(dapatUmur());
function printNama() {
    // void berfungsi untuk tidak me-return apa-apa.
    console.log('ngeprint function printNama() disini, tapi tidak bisa return apa-apa');
}
printNama();
// Tipe Data Arguments
function multiply(value1, value2) {
    return value1 * value2;
}
const result = multiply(34, 56);
console.log(result);
