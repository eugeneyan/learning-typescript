export { }

// Destructing is a way to unpack arrays and assign them to a distinct variable
const numbers = [1, 2, 3]
let [one, two, three] = numbers

console.log(one, two, three)

// To sip values on values in the array just use an additional comma
let [numOne, , numThree] = numbers
console.log(numOne, numThree)

const names = [undefined, 'A', 'B']

let [first = 'First',
    second,
    third,
    forth = 'Forth'] = names
console.log(first, second, third, forth)

// We can use the spread operator (...) to assign the remaining
const nums = [1, 2, 3, 4, 5, 6, 7, 8]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

// We can also destructure via iteration
const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

for (const [country, city] of countries) {
    console.log(country, city)
}

// When destructuring objects, the name of variable should be exactly the same as object keys
// Destructuring is done using { }
const rect = {
    width: 20,
    height: 10,
    area: 200
}
let { width, height, area, perimeter } = rect
console.log(width, height, area, perimeter)  // perimeter will be undefined

// You can also rename when restructuring
let { width: w, height: h, area: a, perimeter: p } = rect
console.log(w, h, a, p)

const rect2 = {
    width2: 20,
    height2: 10,
    area2: 200
}

// Assigning it to a defaault value
let { width2 = 1, height2, area2, perimeter2 = 60 } = rect2
console.log(width2, height2, area2, perimeter2)  // perimeter will be 60, width2 will not be updated

// Getting object parameters without destructuring
const calcPerimeter = rect => {
    return 2 * (rect.width + rect.height)
}

console.log(calcPerimeter(rect))

// Getting object parameters with destructuring
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}

console.log(calculatePerimeter(rect))

// Destructuring object during iteration
const todoList = [
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
]

for (const { task, time, completed } of todoList) {
    console.log(task, time, completed)
}

// The spread operator can be used to copy array
const evens = [0, 2, 4, 6, 8, 10]
const odds = [1, 3, 5, 7, 9]

const evensCopy = [...evens]
const oddsCopy = [...odds]
const allCopy = [...evens, ...odds]

console.log(evensCopy)
console.log(oddsCopy)
console.log(allCopy)

// Spread can also be used to copy objects
const rectCopy = { ...rect }
console.log(rectCopy)

// We can modify objects while copying
const rectCopy2 = { ...rect, width: 15 }
console.log(rectCopy2)

// We can write arrow functions which take an unlimited amount of arguments using a spreaad operator
const sumAllNums = (...args) => {
    console.log(args)
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))