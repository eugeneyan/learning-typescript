"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var e_1, _a, e_2, _b;
exports.__esModule = true;
// Destructing is a way to unpack arrays and assign them to a distinct variable
var numbers = [1, 2, 3];
var _c = __read(numbers, 3), one = _c[0], two = _c[1], three = _c[2];
console.log(one, two, three);
// To sip values on values in the array just use an additional comma
var _d = __read(numbers, 3), numOne = _d[0], numThree = _d[2];
console.log(numOne, numThree);
var names = [undefined, 'A', 'B'];
var _e = __read(names, 4), _f = _e[0], first = _f === void 0 ? 'First' : _f, second = _e[1], third = _e[2], _g = _e[3], forth = _g === void 0 ? 'Forth' : _g;
console.log(first, second, third, forth);
// We can use the spread operator (...) to assign the remaining
var nums = [1, 2, 3, 4, 5, 6, 7, 8];
var _h = __read(nums), num1 = _h[0], num2 = _h[1], num3 = _h[2], rest = _h.slice(3);
console.log(num1, num2, num3);
console.log(rest);
// We can also destructure via iteration
var countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']];
try {
    for (var countries_1 = __values(countries), countries_1_1 = countries_1.next(); !countries_1_1.done; countries_1_1 = countries_1.next()) {
        var _j = __read(countries_1_1.value, 2), country = _j[0], city = _j[1];
        console.log(country, city);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (countries_1_1 && !countries_1_1.done && (_a = countries_1["return"])) _a.call(countries_1);
    }
    finally { if (e_1) throw e_1.error; }
}
// When destructuring objects, the name of variable should be exactly the same as object keys
// Destructuring is done using { }
var rect = {
    width: 20,
    height: 10,
    area: 200
};
var width = rect.width, height = rect.height, area = rect.area, perimeter = rect.perimeter;
console.log(width, height, area, perimeter); // perimeter will be undefined
// You can also rename when restructuring
var w = rect.width, h = rect.height, a = rect.area, p = rect.perimeter;
console.log(w, h, a, p);
var rect2 = {
    width2: 20,
    height2: 10,
    area2: 200
};
// Assigning it to a defaault value
var _k = rect2.width2, width2 = _k === void 0 ? 1 : _k, height2 = rect2.height2, area2 = rect2.area2, _l = rect2.perimeter2, perimeter2 = _l === void 0 ? 60 : _l;
console.log(width2, height2, area2, perimeter2); // perimeter will be 60, width2 will not be updated
// Getting object parameters without destructuring
var calcPerimeter = function (rect) {
    return 2 * (rect.width + rect.height);
};
console.log(calcPerimeter(rect));
// Getting object parameters with destructuring
var calculatePerimeter = function (_a) {
    var width = _a.width, height = _a.height;
    return 2 * (width + height);
};
console.log(calculatePerimeter(rect));
// Destructuring object during iteration
var todoList = [
    {
        task: 'Prepare JS Test',
        time: '4/1/2020 8:30',
        completed: true
    },
    {
        task: 'Give JS Test',
        time: '4/1/2020 10:00',
        completed: false
    },
    {
        task: 'Assess Test Result',
        time: '4/1/2020 1:00',
        completed: false
    }
];
try {
    for (var todoList_1 = __values(todoList), todoList_1_1 = todoList_1.next(); !todoList_1_1.done; todoList_1_1 = todoList_1.next()) {
        var _m = todoList_1_1.value, task = _m.task, time = _m.time, completed = _m.completed;
        console.log(task, time, completed);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (todoList_1_1 && !todoList_1_1.done && (_b = todoList_1["return"])) _b.call(todoList_1);
    }
    finally { if (e_2) throw e_2.error; }
}
// The spread operator can be used to copy array
var evens = [0, 2, 4, 6, 8, 10];
var odds = [1, 3, 5, 7, 9];
var evensCopy = __spread(evens);
var oddsCopy = __spread(odds);
var allCopy = __spread(evens, odds);
console.log(evensCopy);
console.log(oddsCopy);
console.log(allCopy);
// Spread can also be used to copy objects
var rectCopy = __assign({}, rect);
console.log(rectCopy);
// We can modify objects while copying
var rectCopy2 = __assign(__assign({}, rect), { width: 15 });
console.log(rectCopy2);
// We can write arrow functions which take an unlimited amount of arguments using a spreaad operator
var sumAllNums = function () {
    var e_3, _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args);
    var sum = 0;
    try {
        for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
            var num = args_1_1.value;
            sum += num;
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (args_1_1 && !args_1_1.done && (_a = args_1["return"])) _a.call(args_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return sum;
};
console.log(sumAllNums(1, 2, 3, 4, 5));
