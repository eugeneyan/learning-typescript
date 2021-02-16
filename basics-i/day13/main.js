"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a;
exports.__esModule = true;
/*
 * Console object methods
 * - console methods show output on the browser console
 * - document.write() show output on the browser document (view port)
 * - document.getElementById() to interact with the DOM using JavaScript
 */
// String interpolation using %
console.log('%d %s of JavaScript', 30, 'Days');
console.log('%c30 Days Of JavaScript', 'color:green'); // log output is green
// console.info()
console.log('This in an info message');
// console.warn()
console.warn('This is a warning');
// console.error()
console.error('This is an error message');
/*
 * console.table(): Displays tabular data as a table
 * - Takes one required argument, which must be an array or object
 * - And one additional argument of columns
 */
var names = ['Asabeneh', 'Brook', 'David', 'John'];
console.table(names);
var user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
};
console.table(user);
var countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];
console.table(countries);
var users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
];
console.table(users);
// console.time(): starts a timer to track how long an operation takes
console.time('Regular for loop');
for (var i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
}
console.timeEnd('Regular for loop');
console.time('for of loop');
try {
    for (var countries_1 = __values(countries), countries_1_1 = countries_1.next(); !countries_1_1.done; countries_1_1 = countries_1.next()) {
        var _b = __read(countries_1_1.value, 2), name_1 = _b[0], city = _b[1];
        console.log(name_1, city);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (countries_1_1 && !countries_1_1.done && (_a = countries_1["return"])) _a.call(countries_1);
    }
    finally { if (e_1) throw e_1.error; }
}
console.timeEnd('for of loop');
console.time('forEach loop');
countries.forEach(function (_a) {
    var _b = __read(_a, 2), name = _b[0], city = _b[1];
    console.log(name, city);
});
console.timeEnd('forEach loop');
// console.assert(): writes error message if the assert is false
console.assert(4 > 3, '4 is greater than 3');
console.assert(3 > 4, '3 is not greater than 4');
for (var i = 0; i <= 10; i++) {
    var errorMessage = i + " is not even";
    console.log("The number is " + i);
    console.assert(i % 2 === 0, errorMessage);
}
// console.group(): group different log groups
console.group('Names');
console.log(names);
console.groupEnd();
console.group('Countries');
console.log(countries);
console.groupEnd();
console.group('Users');
console.log(user);
console.log(users);
console.groupEnd();
// console.count(): prints the number of times console.count is called
// Takes a string label parameter
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
console.count('console.count() has been called');
// console.clear(): clears the browser console
// console.clear()
