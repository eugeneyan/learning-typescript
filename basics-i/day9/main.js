"use strict";
exports.__esModule = true;
/* Higher order functions
 * Take another functino as a parameter or return a function as a value
 */
// Callback: Function that can be passed as parameter to another function
var callback = function (n) {
    return Math.pow(n, 2);
};
function cube(callback, n) {
    return callback(n) * n;
}
console.log(callback(3));
console.log(cube(callback, 3));
// Returning a function
var higherOrder = function (n) {
    var doSomething = function (m) {
        var doWhatever = function (t) {
            return 2 * n + 3 * m + t;
        };
        return doWhatever;
    };
    return doSomething;
};
console.log(higherOrder(2)(3)(4));
// When to use callback
var numbers = [1, 2, 3, 4];
var sumArray = function (arr) {
    var sum = 0;
    var callback = function (element) {
        sum += element;
    };
    numbers.forEach(callback);
    return sum;
};
console.log(sumArray(numbers));
// setInterval: To do some activity continously within some interval of time
function sayHello() {
    console.log('Hello!');
}
// setInterval(sayHello, 2000) // Prints hello every 2 seconds
// setTimeout: To execute some action some time in the future
function sayGoodbye() {
    console.log('Goodbye!');
}
// setTimeout(sayGoodbye, 2000)
/* Functional Programming
 * These built-in methods take a callback function
 */
// forEach: Iterate an array of elements, used only with arrays
// Takes callback function with elements, with optional index and array
numbers.forEach(function (element, index, arr) {
    console.log(index, element, numbers);
});
var sum = 0;
numbers.forEach(function (num) { return sum += num; });
console.log(sum);
var countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'];
countries.forEach(function (element) { return console.log(element.toUpperCase()); });
// map: Iterate an array of elements and modify the array elements
var numbersSquare = numbers.map(function (num) { return num * num; });
console.log(numbersSquare);
var countriesUpper = countries.map(function (country) { return country.toUpperCase(); });
console.log(countriesUpper);
var countriesThreeChar = countries.map(function (country) { return country.slice(0, 3).toUpperCase(); });
console.log(countriesThreeChar);
// filter: Filter out items which meet filtering conditions
var countriesWithLand = countries.filter(function (country) { return country.includes('land'); });
console.log(countriesWithLand);
var countriesSixChar = countries.filter(function (country) { return country.length === 6; });
console.log(countriesSixChar);
// reduce: Takes accumulator, current, and optional initial value and returns a single value
// It's good practice to define the initial value. If no initial value is specified, 
// it will use the array's first value
// 
// arr.reduce((acc, cur) => {
//     // some operations goes here before returning a value
//    return 
//   }, initialValue)
var numbersSum = numbers.reduce(function (acc, cur) { return acc + cur; }, 0);
console.log(numbersSum);
// every: Check if all elements meet a condition and returns a boolean
var allStr = countries.every(function (country) { return typeof country === 'string'; });
console.log(allStr);
// find: Return the first element that satisfies condition
var hasWay = countries.find(function (country) { return country.includes('way'); });
console.log(hasWay);
// findIndex: Returns position of first element that satisfies condition
var hasWayIndex = countries.findIndex(function (country) { return country.includes('way'); });
console.log(hasWayIndex);
// some: Check if some elements meet the condition (NOTE: THIS IS ANY)
console.log(countries.some(function (country) { return country.includes('e'); }));
console.log(countries.some(function (country) { return country.includes('o'); }));
console.log(countries.some(function (country) { return country.includes('x'); }));
// sort: Arranges arrays in ascending or descentding order
// By default, sorts values as strings. Works well for string array but not numbers
console.log(countries.sort());
// To sort numbers correct, we need to use a callback function
var nums = [9.81, 3.14, 100, 37];
console.log(nums.sort());
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums);
nums.sort(function (a, b) {
    return b - a;
});
console.log(nums);
