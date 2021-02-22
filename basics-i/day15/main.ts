/* 
 * Classes are object constructors that we can instantiate to create an object (from week 8).
 */

// Instatiating a class: To create an object from a class
class Person {

}

const person = new Person()
console.log(person)

/* 
 * Constructor is a builtin function to create a blueprint for objects
 * use this keyword to attach constructor parameters into the class
 */

class Person2 {
    constructor(firstName, lastName) {
        console.log(this)

        this.firstName = firstName
        this.lastName = lastName
    }
}

const person2 = new Person2('Eugene', 'Yan')
console.log(person2)

// Add default values
class Person3 {
    constructor(firstName = 'John', lastName = 'Doe') {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person3 = new Person3()
console.log(person3)

// Adding class methods
class Person4 {
    constructor(firstName = 'John', lastName = 'Doe') {
        this.firstName = firstName
        this.lastName = lastName
    }

    getFullName() {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }
}

const person4 = new Person4()
console.log(person4.getFullName())

// Getters and setters
class Person5 {
    constructor(firstName = 'John', lastName = 'Doe') {
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
        this.skills = []
    }

    get getFullName() {
        const fullName = `${this.firstName} ${this.lastName}`
        return fullName
    }

    get getScore() {
        return this.score
    }

    get getSkills() {
        return this.skills
    }

    set setScore(score) {
        this.score += score
    }

    set setSkill(skill) {
        this.skills.push(skill)
    }
}

const person5 = new Person5()
console.log(person5.getFullName)  // No () when calling getter
console.log(person5.getScore)
console.log(person5.getSkills)

person5.setScore = 1
person5.setSkill = 'Python'
person5.setSkill = 'Scala'
person5.setSkill = 'TypeScript'
console.log(person5.getScore)
console.log(person5.getSkills)

// Static methods: Not called on instances of the class, but the class itself.
// They're often utility functions, and are called directly from the class
class Person6 {
    constructor(firstName = 'John', lastName = 'Doe') {
        this.firstName = firstName
        this.lastName = lastName
        this.score = 0
        this.skills = []
    }

    static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()

        let fullDate = `${year}-${month}-${date}`
        return fullDate
    }
}

console.log(Person6.showDateTime())

// Inheritance: Child class can access all properties of parent class, reducing code repetition
class Student extends Person5 {
    saySomething() {
        console.log('I am a child of Person5')  // Not sure why this causes undefined in log
    }
}

const student = new Student()
console.log(student)
console.log(student.saySomething())
console.log(student.getFullName)

// Overriding methods: If we want to add properties, we'll need to use the constructor function 
// in the child class too. We can thes call super() to access all properties from the parent class.
class Student2 extends Person5 {
    constructor(firstName, lastName, gender) {
        super(firstName, lastName)
        this.gender = gender
    }

    saySomething() {
        console.log('I am a child of Person5')  // Not sure why this causes undefined in log
    }

    get getFullNameWithGender() {
        let fullName = this.getFullName
        let fullNameWithGender = `${fullName} (gender: ${this.gender})`
        return fullNameWithGender
    }
}

const student2 = new Student2('Eugene', 'Yan', 'M')
console.log(student2.getFullNameWithGender)