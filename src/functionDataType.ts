// function as type

type Umur = number;

let age: Umur = 12344453;

type Tambahan = (value1: number, value2: number) => number;

const tambah: Tambahan = (value1: number, value2: number): number => {
  return value1 + value2;
};

console.log(tambah);

console.log(tambah(123, 456));
