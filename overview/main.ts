// Based on https://www.youtube.com/watch?v=WBPrJSw7yQA
export { }
let message = 'Welcome back!';
console.log(message);

let x = 10;
const y = 20;

let sum;
const title = 'Codevolution';

let isBeginner: boolean = true;
let total: number = 0;
let name: string = 'Eugene';

let sentence: string = `My name is ${name}
I'm a beginner in Typescript`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Eugene', 34];

enum Color { Red = 5, Green, Blue };

let c: Color = Color.Green;
console.log(c);

let randomValue: any = 10;
randomValue = 'Eugene';

let myVariable: unknown = 10;

// (myVariable as string).toUpperCase();  // This only casts the number as a string, but does not change the type of myVariable
// Thus, it is still treated as a number and when we try to call toUpperCase() on it, we get an error.

// Solve it by converting the number to a string first, then calling toUpperCase() on it.
let aString: string = String(myVariable);
console.log(aString.toUpperCase());

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === 'object' &&
        'name' in obj
}

if (hasName(myVariable)) {
    console.log(myVariable.name);
}

let a;
a = 10;

let b = 20;  // Type inference
// b = true;  // Type error

let multiType: number | boolean;
multiType = 20;
multiType = true;

function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

let z: number = add(10, 20);
console.log(`z = ${z}`)
let d: number = add(10);
console.log(`d = ${d}`)

interface Person {
    firstName: string;
    lastName?: string;  // Optional parameter
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce'
}

fullName(p)

class Employee {
    public employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let e1 = new Employee('Eugene');
console.log(e1.employeeName);
e1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }

    delegateWork() {
        console.log(`Manager ${this.employeeName} delegating work`);
    }
}

let m1 = new Manager('Xinyi');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

