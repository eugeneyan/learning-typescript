"use strict";
exports.__esModule = true;
/*
 * try: wrap code that may throw an error in a try block
 * catch: write code to do something when an error occurs
 * - The catch block takes a parameter, and it's common to pass e, err, or error as parameter
 * finally: write code to always be executed regardless of error
 */
try {
    var lastName_1 = 'Yan';
    var fullName = firstName + " " + lastName_1;
    console.log(fullName);
}
catch (e) {
    console.log("Name of error: " + e.name);
    console.log("Error message: " + e.message);
}
finally {
    console.log('This log will also be printed');
}
// Throw: allows us to create customer error
// throw 'Custom error'
// throw 42
// throw true
// throw new Error('This is a custom error')
// Note: prompt() is not a valid construct in Node.js runtime, but it'll work in browser console
// const throwErrorFunc = () => {
//     let message
//     let x = window.prompt('Enter a number: ')
//     try {
//         if (x == '') throw 'Empty input'
//         if (isNaN(x)) throw 'Not a number'
//         let numx = Number(x)
//         if (numx < 5) throw 'Number is too low'
//         if (numx > 10) throw 'Number is too high'
//     } catch (e) {
//         console.log(e)
//     }
// }
// throwErrorFunc()
// Types of error
var lastName = 'Yan';
// let fullName = `${firstName} ${lastName}`
// console.log(fullName)  // ReferenceError as we try to use firstName that has not been declared
var square = 2, x;
2; // SyntaxError in JavaScript, but okay in TypeScript
console.log(square);
// Type error
var num = 10;
console.log(num.toLowerCase()); // TypeError
