// inisiasi type nya dulu untuk variabel object

type Pengguna = {
  // Inisiasi value dengan type Pengguna untuk value nama: string, umur: number
  nama: string;
  umur: number;
};

let pengguna: Pengguna = {
  nama: 'Gondes', // value harus string, karna value sudah diinisiasi dengan string
  umur: 123, // value harus number, karna value sudah diinisiasi dengan number
};

pengguna = {
  nama: 'Kucluk',
  umur: 456,
};
console.log(pengguna);
