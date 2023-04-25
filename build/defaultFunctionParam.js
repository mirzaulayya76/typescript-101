"use strict";
// default parameter/argument
const namaLengkap = (namaAwal, namaAkhir = 'Ulayya') => {
    return namaAwal + ' ' + namaAkhir;
};
console.log(namaLengkap('Mirza'));
console.log(namaLengkap('Rockstar'));
