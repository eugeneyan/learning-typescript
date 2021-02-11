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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var e_1, _a, e_2, _b;
exports.__esModule = true;
// Create empty set
var companies = new Set();
console.log(companies);
// Create set from array
var languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
];
var setOfLanguages = new Set(languages);
console.log(setOfLanguages);
try {
    // We can iterate through sets
    for (var setOfLanguages_1 = __values(setOfLanguages), setOfLanguages_1_1 = setOfLanguages_1.next(); !setOfLanguages_1_1.done; setOfLanguages_1_1 = setOfLanguages_1.next()) {
        var language = setOfLanguages_1_1.value;
        console.log(language);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (setOfLanguages_1_1 && !setOfLanguages_1_1.done && (_a = setOfLanguages_1["return"])) _a.call(setOfLanguages_1);
    }
    finally { if (e_1) throw e_1.error; }
}
// Adding elements to set
console.log(companies.size);
companies.add('Facebook');
companies.add('Amazon');
companies.add('Apple');
companies.add('Netflix');
companies.add('Google');
console.log(companies.size);
console.log(companies);
// Deleting an element from a set
companies["delete"]('Google');
console.log(companies.size);
console.log(companies);
// Checking if in element
console.log(companies.has('Apple'));
console.log(companies.has('Snapchat'));
// Clearing the set
companies.clear();
console.log(companies);
// Union of sets
var a = [1, 2, 3, 4, 5];
var b = [3, 4, 5, 6];
var c = __spread(a, b);
var A = new Set(a);
var B = new Set(b);
var C = new Set(c);
console.log(C);
// Intersection of sets
var cIntersect = a.filter(function (num) { return B.has(num); });
console.log(cIntersect);
// Difference of sets
var cDiff = a.filter(function (num) { return !B.has(num); });
console.log(cDiff);
// Creating an empty Map
var map = new Map();
console.log(map);
// Creating a Map from array
var countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo'],
];
var mapCountries = new Map(countries);
console.log(mapCountries.size);
console.log(mapCountries);
// Adding values to map
var countriesMap = new Map();
console.log(countriesMap.size);
countriesMap.set('Finland', 'Helsinki');
countriesMap.set('Sweden', 'Stockholm');
countriesMap.set('Norway', 'Oslo');
console.log(countriesMap.size);
console.log(countriesMap);
// Getting value from Map
console.log(countriesMap.get('Finland'));
// Checking key in Map
console.log(countriesMap.has('Finland'));
try {
    // Get all values from Map via loop
    for (var countriesMap_1 = __values(countriesMap), countriesMap_1_1 = countriesMap_1.next(); !countriesMap_1_1.done; countriesMap_1_1 = countriesMap_1.next()) {
        var country = countriesMap_1_1.value;
        console.log(country);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (countriesMap_1_1 && !countriesMap_1_1.done && (_b = countriesMap_1["return"])) _b.call(countriesMap_1);
    }
    finally { if (e_2) throw e_2.error; }
}
