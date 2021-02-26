/* 
 * Web Storage is a new HTML5 API offering that has benefits over traditional cookies.
 * Its limit is at least 5mb and is never transferred to the server. 
 * The keys and values are alwasy strings (integer keys are converted to strings).
 * 
 * There are two web storage objects:
 * - sessionStorage: data gets cleared when page session ends
 * - localStorage: simmilar to session storage, but no expiration date. Kept between browser sessions.
 */
// Needs installation first: "npm install node-localstorage"
var LocalStorage = require('node-localstorage').LocalStorage
localStorage = new LocalStorage('./scratch')

localStorage.setItem('firstName', 'Eugene')
console.log(localStorage.getItem('firstName'))

const skills = ['Python', 'Scala', 'TypeScript', 'SQL']
const skillsJSON = JSON.stringify(skills)
localStorage.setItem('skills', skillsJSON)  // Even though VSCode complains, this works fine
console.log(localStorage.getItem('skills'))

const userE = {
    firstName: 'Eugene',
    age: 25,
    skills: ['Python', 'Scala', 'TypeScript', 'SQL']
}
const userJSON = JSON.stringify(userE)
localStorage.setItem('user', userJSON)
console.log(localStorage.getItem('user'))
console.log(JSON.parse(localStorage.getItem('user')))  // Parse the JSON

console.log(localStorage.key)
console.log(localStorage)
// _keys: [ 'firstName', 'skills', 'user' ],
// _metaKeyMap: Map <[Object: null prototype] {}> {
//     firstName: MetaKey { key: 'firstName', index: 0, size: 6 },
//     skills: MetaKey { key: 'skills', index: 1, size: 37 },
//     user: MetaKey { key: 'user', index: 2, size: 78 }
//   },

localStorage.clear()
console.log(localStorage)
// _keys: [],
//   _metaKeyMap: Map <[Object: null prototype] {}> {},