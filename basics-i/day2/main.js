/* Primitive data types
 * - Cannot be modified once created
 */
var word = 'JavaScript';
//  word[0] = 'Y'  // Error
/* Non-Primitimve Data Types
 * - Mutable
 * - Cannot be compared by value because they are reference types and thus compared by reference instead of value
 */
var nums = [1, 2, 3];
nums[0] = 10;
console.log(nums);
var nums2 = [1, 2, 3];
var nums3 = [1, 2, 3];
console.log(nums2 == nums3); // Returns false
var pi = Math.PI;
console.log(pi);
console.log(Math.round(pi));
console.log(Math.round(9.5));
console.log(Math.floor(pi));
console.log(Math.ceil(pi));
console.log(Math.min(1, 3, 3, 4, 5));
console.log(Math.max(1, 3, 3, 4, 5));
var randNum = Math.random();
console.log(randNum);
var firstName = 'Eugene';
var lastName = 'Yan';
var fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log('Each \nword \nis \na \nnew \nline');
console.log('shouldn\'t, couldn\'t, wouldn\'t');
// String interpolation
var a = 2;
var b = 3;
console.log("The sum of " + a + " and " + b + " is " + (a + b));
// String methdods
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName[firstName.length - 1]);
console.log(firstName.substr(1, 3));
console.log(firstName.substring(1, 3)); // Doesn't include char at end index
// Splitting strings
var sentence = 'This is a sentence';
console.log(sentence.split(' '));
console.log(sentence.split(' ')[0]);
// Checking types
console.log(typeof 'Eugene');
console.log(typeof 8);
console.log(typeof Math.PI);
console.log(typeof true);
// Casting
var num = '10';
var numInt = parseInt(num);
console.log(num + " (" + typeof num + "), " + numInt + " (" + typeof numInt + ")");
