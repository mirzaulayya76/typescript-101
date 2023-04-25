// default parameter/argument

const namaLengkap = (
  namaAwal: string,
  namaAkhir: string = 'Ulayya',
): string => {
  return namaAwal + ' ' + namaAkhir;
};

console.log(namaLengkap('Mirza'));
console.log(namaLengkap('Rockstar'));
