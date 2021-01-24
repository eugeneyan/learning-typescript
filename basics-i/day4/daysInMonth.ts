/* Write a program which tells the number of days in a month.

   Enter a month: January
   January has 31 days.

   Enter a month: JANUARY
   January has 31 day

   Enter a month: February
   February has 28 days.

   Enter a month: FEbruary
   February has 28 days.

 */
export { }

function getMonthFromString(month_string: string) {
    return new Date(Date.parse(month + ' 1, 2020')).getMonth() + 1
}

function getDaysInMonth(month: string) {
    let month_int = getMonthFromString(month)
    return new Date(2020, month_int, 0).getDate()
}

let month: string = 'November'
console.log(`${month} has ${getDaysInMonth(month)} days`)