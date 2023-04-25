// Optional Parameter pada Function.

// Optional parameter jika kita tidak mengisi valuenya, maka hasilnya akan undefined.

// Contoh:
const contohOptional1 = (val1: string, val2?: string): string => {
  return val1 + ' ' + val2;
};

console.log(contohOptional1('aku')); // disini kita tidak mengisi value dari val2, maka hasilnya undefined.

// Tidak disarankan penggunaan optional pada tipe data number, walaupun ketika di-compile ke dalam javascript, tidak terjadi error.
// const contohOptional2 = (value1: number, value2?: number): number => {
//     return value1 + value2
// }
// console.log(contohOptional2(1))
