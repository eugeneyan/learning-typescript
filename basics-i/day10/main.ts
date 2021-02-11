export { }

// Create empty set
const companies = new Set()
console.log(companies)

// Create set from array
const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]


const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// We can iterate through sets
for (const language of setOfLanguages) {
  console.log(language)
}

// Adding elements to set
console.log(companies.size)

companies.add('Facebook')
companies.add('Amazon')
companies.add('Apple')
companies.add('Netflix')
companies.add('Google')

console.log(companies.size)
console.log(companies)

// Deleting an element from a set
companies.delete('Google')
console.log(companies.size)
console.log(companies)

// Checking if in element
console.log(companies.has('Apple'))
console.log(companies.has('Snapchat'))

// Clearing the set
companies.clear()
console.log(companies)

// Union of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

// Intersection of sets
let cIntersect = a.filter((num) => B.has(num))
console.log(cIntersect)

// Difference of sets
let cDiff = a.filter((num) => !B.has(num))
console.log(cDiff)

// Creating an empty Map
const map = new Map()
console.log(map)

// Creating a Map from array
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

const mapCountries: Map<string, string> = new Map (countries)
console.log(mapCountries.size)
console.log(mapCountries)

// Adding values to map
const countriesMap = new Map()
console.log(countriesMap.size)

countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')

console.log(countriesMap.size)
console.log(countriesMap)

// Getting value from Map
console.log(countriesMap.get('Finland'))

// Checking key in Map
console.log(countriesMap.has('Finland'))

// Get all values from Map via loop
for (const country of countriesMap) {
  console.log(country)
}