"use strict";
exports.__esModule = true;
// Arrays
var nums = [0, 1, 2, 3, 5, 6];
console.log('Numbers: ', nums);
console.log("Numbers: " + nums + " (Length: " + nums.length + ")");
// Splitting arrays
var faang = ('Facebook Amazon Apple Netflix Google');
var faangArray = faang.split(' ');
console.log('FAANG: ', faangArray);
console.log("FAANG: " + faangArray);
// Constructing an empty array
var emptyArray = Array(8);
console.log(emptyArray);
emptyArray[0] = '1';
emptyArray[5] = 6;
console.log(emptyArray);
emptyArray.fill(0);
console.log(emptyArray);
var array1 = [0, 1, 2];
var array2 = [3, 4, 5];
var arrayCombined = array1.concat(array2);
console.log(arrayCombined);
// Check if item in array
var coy = 'Snap';
var index = faangArray.indexOf(coy);
if (index != -1) {
    console.log(coy + " is in FAANG");
}
else {
    console.log(coy + " is not in FAANG");
}
if (faangArray.includes(coy)) {
    console.log(coy + " is in FAANG");
}
else {
    console.log(coy + " is not in FAANG");
}
console.log(faangArray.toString());
console.log(faangArray.join(', '));
// Sliceing arrayw
console.log(nums.slice());
console.log(nums.slice(1, 4));
// Push and pop
faangArray.push('Stripe'); // Add item to the end
console.log(faangArray);
faangArray.pop(); // Remove item from the end
console.log(faangArray);
faangArray.unshift('Stripe'); // Add item at the start
console.log(faangArray);
faangArray.reverse();
console.log(faangArray);
// Exercise Level 3
var ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
var minAge = ages[0];
var maxAge = ages[ages.length - 1];
console.log("Min age: " + minAge + ", Max age: " + maxAge);
function getMedian(array) {
    var midIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        return array[midIndex];
    }
    else {
        return (array[midIndex - 1] + array[midIndex]) / 2;
    }
}
console.log("Median age: " + getMedian(ages));
var sum = ages.reduce(function (a, b) { return a + b; }, 0);
var mean = sum / ages.length;
console.log("Mean age: " + mean);
console.log("Range of ages: " + maxAge + " - " + minAge + " = " + (maxAge - minAge));
