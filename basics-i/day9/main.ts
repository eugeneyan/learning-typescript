export { }

/* Higher order functions
 * Take another functino as a parameter or return a function as a value
 */

// Callback: Function that can be passed as parameter to another function
const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(callback(3))
console.log(cube(callback, 3))

// Returning a function
const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}

console.log(higherOrder(2)(3)(4))

// When to use callback
const numbers = [1, 2, 3, 4]

const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    numbers.forEach(callback)
    return sum
}

console.log(sumArray(numbers))

// setInterval: To do some activity continously within some interval of time
function sayHello() {
    console.log('Hello!')
}

// setInterval(sayHello, 2000) // Prints hello every 2 seconds

// setTimeout: To execute some action some time in the future
function sayGoodbye() {
    console.log('Goodbye!')
}

// setTimeout(sayGoodbye, 2000)

/* Functional Programming
 * These built-in methods take a callback function
 */


// forEach: Iterate an array of elements, used only with arrays
// Takes callback function with elements, with optional index and array
numbers.forEach(function (element, index, arr) {
    console.log(index, element, numbers)
})

let sum = 0
numbers.forEach(num => sum += num)

console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

// map: Iterate an array of elements and modify the array elements
const numbersSquare = numbers.map((num) => num * num)
console.log(numbersSquare)

const countriesUpper = countries.map((country) => country.toUpperCase())
console.log(countriesUpper)

const countriesThreeChar = countries.map((country) => country.slice(0, 3).toUpperCase())
console.log(countriesThreeChar)

// filter: Filter out items which meet filtering conditions
const countriesWithLand = countries.filter((country) => country.includes('land'))
console.log(countriesWithLand)

const countriesSixChar = countries.filter((country) => country.length === 6)
console.log(countriesSixChar)

// reduce: Takes accumulator, current, and optional initial value and returns a single value
// It's good practice to define the initial value. If no initial value is specified, 
// it will use the array's first value
// 
// arr.reduce((acc, cur) => {
//     // some operations goes here before returning a value
//    return 
//   }, initialValue)

const numbersSum = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(numbersSum)

// every: Check if all elements meet a condition and returns a boolean
const allStr = countries.every((country) => typeof country === 'string')

console.log(allStr)

// find: Return the first element that satisfies condition
const hasWay = countries.find((country) => country.includes('way'))
console.log(hasWay)

// findIndex: Returns position of first element that satisfies condition
const hasWayIndex = countries.findIndex((country) => country.includes('way'))
console.log(hasWayIndex)

// some: Check if some elements meet the condition (NOTE: THIS IS ANY)
console.log(countries.some((country) => country.includes('e')))
console.log(countries.some((country) => country.includes('o')))
console.log(countries.some((country) => country.includes('x')))

// sort: Arranges arrays in ascending or descentding order
// By default, sorts values as strings. Works well for string array but not numbers
console.log(countries.sort())

// To sort numbers correct, we need to use a callback function
const nums = [9.81, 3.14, 100, 37]
console.log(nums.sort())

nums.sort(function (a, b) {
    return a - b
})
console.log(nums)

nums.sort(function (a, b) {
    return b - a
})
console.log(nums)