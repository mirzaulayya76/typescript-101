"use strict";
// Array
// let lastDayOfSummer: string[];
// lastDayOfSummer = ['Mirza', 'Fateh', 'Fayrus', 'Zidhan']; // Isi array harus sama-sama string
const lastDayOfSummer = ['Mirza', 'Fateh', 'Fayrus', 'Zidhan'];
console.log(lastDayOfSummer);
const upperCase = lastDayOfSummer.map((a) => a.toUpperCase());
console.log(upperCase);
function bandMember(person) {
    if (person.name === 'Mirza') {
        console.log('Last day of summer');
    }
    else {
        console.log('not a member');
    }
}
bandMember({
    name: 'Argus',
    age: 45,
});
let umurMember;
umurMember = [34, 30, 40, 11];
let iniAny;
iniAny = ['ini string', 33, true, {}];
// Array Tuples
let contohTuples;
contohTuples = ['Jakarta', 9999, false];
let contohTuples2;
contohTuples2 = [
    3334,
    'Hello World',
    {
        nama: 'You are not alone',
        grade: 100,
    },
    true,
];
