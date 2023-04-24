"use strict";
// enum
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 2] = "JAN";
    Month[Month["FEB"] = 3] = "FEB";
    Month[Month["MAR"] = 4] = "MAR";
    Month[Month["APR"] = 5] = "APR";
    Month[Month["MAY"] = 6] = "MAY";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.JAN);
// string enums. Jika diketahui nilai enum nya string, maka harus string yang lainnya
var Day;
(function (Day) {
    Day["MON"] = "Monday";
    Day["TUE"] = "Tuesday";
    Day["WED"] = "Wednesday";
    Day["THU"] = "Thursday";
    Day["FRI"] = "Friday";
    Day["SAT"] = "Saturday";
    Day["SUN"] = "Sunday";
})(Day || (Day = {}));
console.log(Day.MON);
