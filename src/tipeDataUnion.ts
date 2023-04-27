// Tipe Data Union

let phone: number | string; // value yang sudah kita inisiasi berupa number dan string.

phone = 62819998887771;
phone = '0819998887771';

console.log(typeof phone);

type User = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

function goToToilet(user: User) {
  if (user.gender === 'male') {
    console.log('Go to male toilet!');
  } else {
    console.log('Go to female toilet');
  }
}

const user1: User = {
  name: 'agus',
  age: 32,
  gender: 'male',
};

goToToilet(user1);
