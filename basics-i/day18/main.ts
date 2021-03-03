/* 
 * Callbacks take two parameters. The first is err and the second is result. If err is false, there 
 * will not be an error; otherwise, error.
 * 
 * Callbacks are functions passed as an argument to another function. They are executed after 
 * another function has finished executing, thus the name "callback"
 * - https://www.w3schools.com/js/js_callback.asp
 * - https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
 */
const doSomething = callback => {
    setTimeout(() => {
        const skills = ['Python', 'Scala', 'TypeScript']
        callback('It did not go well', skills)
    }, 0)
}

const callback = (err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
}

// Prints after 0.3 secs
doSomething(callback)

// Change callback err arg to false
const doSomething2 = callback => {
    setTimeout(() => {
        const skills = ['Python', 'Scala', 'TypeScript']
        callback(false, skills)
    }, 0)
}

// Prints after 0.2 secs, thus BEFORE the prior doSomething() is ran
doSomething2(callback)

/*
 * Promise: A way to handle async operations in JavaScript, allowing handlers with an async
 * action to have an eventual success value or failure reason. Instead of immediately returning
 * the final value, the async method returns a promise to supply the value sometime in the future.
 *
 * Promises have these states:
 * - pending: Initial state, neither fulfiled nor rejected
 * - fulfiled: Operation completed successfully
 * - rejected: Operation failed
 */

/* 
 * Promises are created using the Promise constructor. Inside the constructor, it takes a
 * callback function, which has two parameters which are the resolve and reject functions.
 * - resolve: returns the result
 * - reject: returns as error in try catch
 */

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['Python', 'Scala', 'TypeScript', 'SQL']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 0)
})

// Settled with resolve
doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['Python', 'Scala', 'TypeScript', 'SQL']
        if (skills.indexOf('Node') !== -1) {
            resolve('Fullstack dev')
        } else {
            reject('Something wrong has happened')
        }
    }, 0)
})

// Settled with reject
doPromise2
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

/* 
 * Fetch API: To fetch resources across network, similar to XMLHttpRequest
 */

export { }

const fetch = require('node-fetch');

const url = 'https://restcountries.eu/rest/v2/all'
// fetch(url)  // Where does response come from?
//     .then(response => response.json())  // Access API data as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => console.log(error))

/* 
 * Async and Await: An elegant way to handle promises.
 * - async: Having it infront of a function means the function will return a promise
 * - await: to access the value from the promise
 */

const square = async function (n) {
    return n * n
}

console.log(square(2))

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}
console.log('===== async and await')
fetchData()