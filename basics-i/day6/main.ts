// For loop
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

const cities = ['Singapore', 'Seattle', 'San Francisco', 'Shanghai', 'Seoul']
const citiesUpper = []

for (let i = 0; i < cities.length; i++) {
    citiesUpper.push(cities[i].toUpperCase())
}

console.log(`Cities: ${cities}`)
console.log(`CITIES: ${citiesUpper}`)

// While loop
let i = 0
while (i <= 5) {
    console.log(i)
    i++
}

// Iterating through arrays
const citiesLower = []
for (const city of cities) {
    citiesLower.push(city.toLowerCase())
}

console.log(`Cities: ${cities}`)
console.log(`cities: ${citiesLower}`)

// Break
for (let i = 0; i <= 5; i++) {
    console.log(i)
    if (i >= 3) {
        break  // Break once we reach 3
    }
}

// Continue
for (let i = 0; i <= 5; i++) {
    if (i == 3) {
        continue  // Skip number 3
    }
    console.log(i)
}

/* 
 * Find the country containing the hightest number of characters in the countries array
 * Extract all the countries contain the word 'land' from the countries array and print it as array
 * Extract all the countries containing only four characters from the countries array and print it as array
 *Extract all the countries containing two or more words from the countries array and print it as array
 * Reverse the countries array and capitalize each country and stored it as an array
 */

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',
    'Hungary', 'Ireland', 'Japan', 'Kenya', 'Libya']

let highestCharCount = 0
let highestCharCountCountry = null

for (const country of countries) {  // Note: This should be of, not in
    let charCount = country.length
    // console.log(`${country} (${charCount})`)
    if (charCount > highestCharCount) {
        highestCharCount = charCount
        highestCharCountCountry = country
    }
}

console.log(`The country with the highest char count is: ${highestCharCountCountry} (${highestCharCount})`)

let countriesWithLand = []

for (const country of countries) {
    if (country.includes('land')) {
        countriesWithLand.push(country)
    }
}

console.log(`Countries with land: ${countriesWithLand}`)

let countriesReversed = []

for (let i = countries.length - 1; i >= 0; i--) {
    countriesReversed.push(countries[i].toUpperCase())
}

console.log(`Countries reversed and uppercased: ${countriesReversed}`)