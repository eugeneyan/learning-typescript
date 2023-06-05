"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = 'Welcome back!';
console.log(message);
var x = 10;
var y = 20;
var sum;
var title = 'Codevolution';
var isBeginner = true;
var total = 0;
var name = 'Eugene';
var sentence = "My name is ".concat(name, "\nI'm a beginner in Typescript");
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Eugene', 34];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var randomValue = 10;
randomValue = 'Eugene';
var myVariable = 10;
// (myVariable as string).toUpperCase();  // This only casts the number as a string, but does not change the type of myVariable
// Thus, it is still treated as a number and when we try to call toUpperCase() on it, we get an error.
// Solve it by converting the number to a string first, then calling toUpperCase() on it.
var aString = String(myVariable);
console.log(aString.toUpperCase());
function hasName(obj) {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
var a;
a = 10;
var b = 20; // Type inference
// b = true;  // Type error
var multiType;
multiType = 20;
multiType = true;
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
var z = add(10, 20);
console.log("z = ".concat(z));
var d = add(10);
console.log("d = ".concat(d));
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: 'Bruce'
};
fullName(p);
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning ".concat(this.employeeName));
    };
    return Employee;
}());
var e1 = new Employee('Eugene');
console.log(e1.employeeName);
e1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager ".concat(this.employeeName, " delegating work"));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Xinyi');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
