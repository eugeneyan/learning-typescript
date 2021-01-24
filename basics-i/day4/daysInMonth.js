"use strict";
exports.__esModule = true;
function getMonthFromString(month_string) {
    return new Date(Date.parse(month + ' 1, 2020')).getMonth() + 1;
}
function getDaysInMonth(month) {
    var month_int = getMonthFromString(month);
    return new Date(2020, month_int, 0).getDate();
}
var month = 'November';
console.log(month + " has " + getDaysInMonth(month) + " days");
