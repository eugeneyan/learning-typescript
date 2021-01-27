function areaOfCircle(r) {
    var area = Math.PI * r * r;
    return area;
}
var r = 10;
console.log("Area of circle with radius " + r + ": " + areaOfCircle(r));
// Function with unlimited number of parameters
// Unlimited params in regular function
function printAllNums() {
    console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}
printAllNums(1, 2, 3, 4); // Even though VSCode complains, this works!
function sumAllNums() {
    var sum = 0;
    for (var _i = 0, arguments_1 = arguments; _i < arguments_1.length; _i++) {
        var arg = arguments_1[_i];
        sum += arg;
    }
    return sum;
}
console.log(sumAllNums(1, 2, 3, 4));
// Unlimited params in arrow function
var printAllNums2 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args); // [ 1, 2, 3, 4 ]
};
printAllNums2(1, 2, 3, 4);
var sumAllNums2 = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        sum += arg;
    }
    return sum;
};
console.log(sumAllNums2(1, 2, 3, 4));
// Anonymous Function
var anonymousFunc = function () {
    console.log('I\'m an anonymous function');
};
anonymousFunc();
// Expression function
var square = function (n) {
    return n * n;
};
console.log("Square of 10: " + square(10));
// Arrow functions
var square2 = function (n) {
    return n * n;
};
console.log("Square of 7: " + square2(7));
// Function with default params
function areaOfCircle2(r) {
    if (r === void 0) { r = 7; }
    return Math.PI * r * r;
}
console.log("Area of circle default is " + areaOfCircle2());
var areaOfCircle3 = function (r) {
    if (r === void 0) { r = 8; }
    return Math.PI * r * r;
};
console.log("Area of circle default is " + areaOfCircle3());
