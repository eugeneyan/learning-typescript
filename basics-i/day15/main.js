/*
 * Classes are object constructors that we can instantiate to create an object (from week 8).
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Instatiating a class: To create an object from a class
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
console.log(person);
/*
 * Constructor is a builtin function to create a blueprint for objects
 * use this keyword to attach constructor parameters into the class
 */
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName) {
        console.log(this);
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person2;
}());
var person2 = new Person2('Eugene', 'Yan');
console.log(person2);
// Add default values
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName) {
        if (firstName === void 0) { firstName = 'John'; }
        if (lastName === void 0) { lastName = 'Doe'; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person3;
}());
var person3 = new Person3();
console.log(person3);
// Adding class methods
var Person4 = /** @class */ (function () {
    function Person4(firstName, lastName) {
        if (firstName === void 0) { firstName = 'John'; }
        if (lastName === void 0) { lastName = 'Doe'; }
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person4.prototype.getFullName = function () {
        var fullName = this.firstName + " " + this.lastName;
        return fullName;
    };
    return Person4;
}());
var person4 = new Person4();
console.log(person4.getFullName());
// Getters and setters
var Person5 = /** @class */ (function () {
    function Person5(firstName, lastName) {
        if (firstName === void 0) { firstName = 'John'; }
        if (lastName === void 0) { lastName = 'Doe'; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
        this.skills = [];
    }
    Object.defineProperty(Person5.prototype, "getFullName", {
        get: function () {
            var fullName = this.firstName + " " + this.lastName;
            return fullName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person5.prototype, "getScore", {
        get: function () {
            return this.score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person5.prototype, "getSkills", {
        get: function () {
            return this.skills;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person5.prototype, "setScore", {
        set: function (score) {
            this.score += score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person5.prototype, "setSkill", {
        set: function (skill) {
            this.skills.push(skill);
        },
        enumerable: false,
        configurable: true
    });
    return Person5;
}());
var person5 = new Person5();
console.log(person5.getFullName); // No () when calling getter
console.log(person5.getScore);
console.log(person5.getSkills);
person5.setScore = 1;
person5.setSkill = 'Python';
person5.setSkill = 'Scala';
person5.setSkill = 'TypeScript';
console.log(person5.getScore);
console.log(person5.getSkills);
// Static methods: Not called on instances of the class, but the class itself.
// They're often utility functions, and are called directly from the class
var Person6 = /** @class */ (function () {
    function Person6(firstName, lastName) {
        if (firstName === void 0) { firstName = 'John'; }
        if (lastName === void 0) { lastName = 'Doe'; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.score = 0;
        this.skills = [];
    }
    Person6.showDateTime = function () {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var date = now.getDate();
        var fullDate = year + "-" + month + "-" + date;
        return fullDate;
    };
    return Person6;
}());
console.log(Person6.showDateTime());
// Inheritance: Child class can access all properties of parent class, reducing code repetition
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Student.prototype.saySomething = function () {
        console.log('I am a child of Person5'); // Not sure why this causes undefined in log
    };
    return Student;
}(Person5));
var student = new Student();
console.log(student);
console.log(student.saySomething());
console.log(student.getFullName);
// Overriding methods: If we want to add properties, we'll need to use the constructor function 
// in the child class too. We can thes call super() to access all properties from the parent class.
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(firstName, lastName, gender) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.gender = gender;
        return _this;
    }
    Student2.prototype.saySomething = function () {
        console.log('I am a child of Person5'); // Not sure why this causes undefined in log
    };
    Object.defineProperty(Student2.prototype, "getFullNameWithGender", {
        get: function () {
            var fullName = this.getFullName;
            var fullNameWithGender = fullName + " (gender: " + this.gender + ")";
            return fullNameWithGender;
        },
        enumerable: false,
        configurable: true
    });
    return Student2;
}(Person5));
var student2 = new Student2('Eugene', 'Yan', 'M');
console.log(student2.getFullNameWithGender);
