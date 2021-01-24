/* 
 * Exercises Level 3
 * Create a human readable time format using the Date time object. 
 * The hour and the minute should be all the time two digits 
 * (7 hours should be 07 and 5 minutes should be 05)
 * E.g., YYYY-MM-DD HH:mm eg. 20120-01-02 07:05 
 */
let timeNow = new Date()

function padNum(num: Number) {
    return num.toString().padEnd(2, '0')
}

let year = timeNow.getFullYear()
let month = padNum(timeNow.getMonth() + 1)
let day = padNum(timeNow.getDate())
let hour = padNum(timeNow.getHours())
let minute = padNum(timeNow.getMinutes())

console.log(`Time now: ${year}-${month}-${day} ${hour}:${minute}`)