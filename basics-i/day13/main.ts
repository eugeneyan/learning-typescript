export { }
/* 
 * Console object methods 
 * - console methods show output on the browser console
 * - document.write() show output on the browser document (view port) 
 * - document.getElementById() to interact with the DOM using JavaScript
 */


// String interpolation using %
console.log('%d %s of JavaScript', 30, 'Days')

console.log('%c30 Days Of JavaScript', 'color:green') // log output is green

// console.info()
console.log('This in an info message')

// console.warn()
console.warn('This is a warning')

// console.error()
console.error('This is an error message')

/* 
 * console.table(): Displays tabular data as a table
 * - Takes one required argument, which must be an array or object
 * - And one additional argument of columns
 */
const names = ['Asabeneh', 'Brook', 'David', 'John']
console.table(names)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
}
console.table(user)

const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries)

const users = [
    {
        name: 'Asabeneh',
        title: 'Programmer',
        country: 'Finland',
        city: 'Helsinki',
        age: 250
    },
    {
        name: 'Eyob',
        title: 'Teacher',
        country: 'Sweden',
        city: 'London',
        age: 25
    },
    {
        name: 'Asab',
        title: 'Instructor',
        country: 'Norway',
        city: 'Oslo',
        age: 22
    },
    {
        name: 'Matias',
        title: 'Developer',
        country: 'Denmark',
        city: 'Copenhagen',
        age: 28
    }
]
console.table(users)

// console.time(): starts a timer to track how long an operation takes
console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
    console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
    console.log(name, city)
})
console.timeEnd('forEach loop')

// console.assert(): writes error message if the assert is false
console.assert(4 > 3, '4 is greater than 3')
console.assert(3 > 4, '3 is not greater than 4')

for (let i = 0; i<= 10; i++) {
    let errorMessage = `${i} is not even`
    console.log(`The number is ${i}`)
    console.assert(i % 2 === 0, errorMessage)
}

// console.group(): group different log groups
console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countries)
console.groupEnd()

console.group('Users')
console.log(user)
console.log(users)
console.groupEnd()

// console.count(): prints the number of times console.count is called
// Takes a string label parameter
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')
console.count('console.count() has been called')

// console.clear(): clears the browser console
// console.clear()
