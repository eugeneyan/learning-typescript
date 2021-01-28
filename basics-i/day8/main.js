"use strict";
exports.__esModule = true;
var a = 'JavaScript'; // Global scope
var b = 10; // Global scope
function letsLearnScope() {
    console.log("The awesome of " + a + " is " + b);
    var c = 30;
    if (true) {
        var a_1 = 'Python'; // Local scope
        var b_1 = 100; // Local scope
        console.log("The awesome of " + a_1 + " is " + b_1);
    }
    console.log("The awesome of " + a + " is " + b);
}
letsLearnScope();
console.log("The awesome of " + a + " is " + b);
// var vs. let
function letsLearnScope2() {
    var gravity = 9.81;
    console.log(gravity);
}
// console.log(gravity)  // This will fail with var or let
if (true) {
    var gravity = 9.81;
    console.log(gravity);
}
console.log(gravity); // This works with var and let, but VS code complains about let
for (var i = 0; i < 3; i++) {
    console.log("Loop: " + i);
}
console.log(i);
// From ES6 and above, there's let and const. Suggest to only use let and const, and use const for 
// values which will will not change (like val for scala.)
/*
 * Objects: Everything can be an object. Objects have properties and properties have values.
 * Thus, objects are key value pairs. The order of the key is not reserved.
 * To create objects, we use two curly brackets.
 */
var rectangle = {
    length: 20,
    width: 20
};
console.log(rectangle);
var person = {
    firstName: 'Eugene',
    lastName: 'Yan',
    age: 34,
    country: 'United States',
    city: 'Seattle',
    skills: [
        'SQL',
        'Python',
        'Scala',
        'TypeScript',
        'Docker'
    ],
    isMarried: true,
    'two word key': true,
    getFullName: function () {
        return "Full name is " + this.firstName + " " + this.lastName; // this is like python's self
    }
};
console.log(person);
// Accessing values from objects
console.log(person.firstName);
console.log(person['firstName']);
console.log(person['two word key']); // If the key is two words
console.log(person.getFullName());
// Adding new keys
person['nationality'] = 'Singaporean'; // Though VS Code complains about this, it works
person.skills.push('Spark');
console.log(person['nationality']);
// Object.assign: To copy object without modifying the original object
var copyperson = Object.assign({}, person);
console.log(copyperson);
var personKeys = Object.keys(person);
console.log(personKeys);
var personValues = Object.values(person);
console.log(personValues);
var personEntries = Object.entries(person);
console.log(personEntries);
console.log(person.hasOwnProperty('firstName'));
console.log(person.hasOwnProperty('middleName'));
