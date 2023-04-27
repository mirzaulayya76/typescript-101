"use strict";
// Tipe Data Union
let phone; // value yang sudah kita inisiasi berupa number dan string.
phone = 62819998887771;
phone = '0819998887771';
console.log(typeof phone);
function goToToilet(user) {
    if (user.gender === 'male') {
        console.log('Go to male toilet!');
    }
    else {
        console.log('Go to female toilet');
    }
}
const user1 = {
    name: 'agus',
    age: 32,
    gender: 'male',
};
goToToilet(user1);
