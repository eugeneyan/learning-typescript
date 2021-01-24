/*
 * Exercises Level 3
 * Create a human readable time format using the Date time object.
 * The hour and the minute should be all the time two digits
 * (7 hours should be 07 and 5 minutes should be 05)
 * E.g., YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
 */
var timeNow = new Date();
function padNum(num) {
    return num.toString().padEnd(2, '0');
}
var year = timeNow.getFullYear();
var month = padNum(timeNow.getMonth() + 1);
var day = padNum(timeNow.getDate());
var hour = padNum(timeNow.getHours());
var minute = padNum(timeNow.getMinutes());
console.log("Time now: " + year + "-" + month + "-" + day + " " + hour + ":" + minute);
