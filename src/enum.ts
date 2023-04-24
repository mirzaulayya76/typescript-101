// enum

// numeric enums
enum Month {
  JAN = 2,
  FEB,
  MAR,
  APR,
  MAY,
}

console.log(Month);
console.log(Month.JAN);

// string enums. Jika diketahui nilai enum nya string, maka harus string yang lainnya
enum Day {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday',
}

console.log(Day.MON);
