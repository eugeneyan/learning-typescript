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
// Exercises Level 2
var users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
};
var loggedIn = 0;
var points50 = 0;
for (var _i = 0, _a = Object.keys(users); _i < _a.length; _i++) {
    var username = _a[_i];
    var userLoggedIn = users[username].isLoggedIn;
    var userPoints = users[username].points;
    console.log(username + ": " + userLoggedIn + ", " + userPoints);
    if (userLoggedIn) {
        loggedIn += 1;
    }
    if (userPoints >= 50) {
        points50 += 1;
    }
}
console.log("Logged in users: " + loggedIn + ", Points >= 50: " + points50);
var copyUsers = Object.assign({}, users);
copyUsers['Eugene'] = {};
copyUsers['Eugene']['email'] = 'eugene@eugeneyan.com';
copyUsers['Eugene']['skills'] = ['SQL', 'Python', 'Scala', 'TypeScript'];
copyUsers['Eugene']['age'] = 34;
copyUsers['Eugene']['isLoggedIn'] = true;
copyUsers['Eugene']['points'] = 30;
console.log(copyUsers);
console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.entries(users));
