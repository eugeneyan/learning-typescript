function areaOfCircle(r: number) {
    let area: number = Math.PI * r * r
    return area
}

let r: number = 10
console.log(`Area of circle with radius ${r}: ${areaOfCircle(r)}`)

// Function with unlimited number of parameters
// Unlimited params in regular function
function printAllNums() {
    console.log(arguments)  // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
}

printAllNums(1, 2, 3, 4)  // Even though VSCode complains, this works!

function sumAllNums() {
    let sum = 0
    for (const arg of arguments) {
        sum += arg
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4))

// Unlimited params in arrow function
const printAllNums2 = (...args) => {
    console.log(args)  // [ 1, 2, 3, 4 ]
}

printAllNums2(1, 2, 3, 4)

const sumAllNums2 = (...args) => {
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return sum
}

console.log(sumAllNums2(1, 2, 3, 4))

// Anonymous Function
const anonymousFunc = function () {
    console.log('I\'m an anonymous function')
}

anonymousFunc()

// Expression function
const square = function (n) {
    return n * n
}

console.log(`Square of 10: ${square(10)}`)

// Arrow functions
const square2 = n => {
    return n * n
}

console.log(`Square of 7: ${square2(7)}`)

// Function with default params
function areaOfCircle2(r = 7) {
    return Math.PI * r * r
}

console.log(`Area of circle default is ${areaOfCircle2()}`)

const areaOfCircle3 = (r = 8) => {
    return Math.PI * r * r
}

console.log(`Area of circle default is ${areaOfCircle3()}`)