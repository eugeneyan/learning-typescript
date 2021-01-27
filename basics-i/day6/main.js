// For loop
for (var i_1 = 0; i_1 <= 5; i_1++) {
    console.log(i_1 + " * " + i_1 + " = " + i_1 * i_1);
}
var cities = ['Singapore', 'Seattle', 'San Francisco', 'Shanghai', 'Seoul'];
var citiesUpper = [];
for (var i_2 = 0; i_2 < cities.length; i_2++) {
    citiesUpper.push(cities[i_2].toUpperCase());
}
console.log("Cities: " + cities);
console.log("CITIES: " + citiesUpper);
// While loop
var i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}
// Iterating through arrays
var citiesLower = [];
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    citiesLower.push(city.toLowerCase());
}
console.log("Cities: " + cities);
console.log("cities: " + citiesLower);
// Break
for (var i_3 = 0; i_3 <= 5; i_3++) {
    console.log(i_3);
    if (i_3 >= 3) {
        break; // Break once we reach 3
    }
}
// Continue
for (var i_4 = 0; i_4 <= 5; i_4++) {
    if (i_4 == 3) {
        continue; // Skip number 3
    }
    console.log(i_4);
}
/*
 * Find the country containing the hightest number of characters in the countries array
 * Extract all the countries contain the word 'land' from the countries array and print it as array
 * Extract all the countries containing only four characters from the countries array and print it as array
 *Extract all the countries containing two or more words from the countries array and print it as array
 * Reverse the countries array and capitalize each country and stored it as an array
 */
var countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',
    'Hungary', 'Ireland', 'Japan', 'Kenya', 'Libya'];
var highestCharCount = 0;
var highestCharCountCountry = null;
for (var _a = 0, countries_1 = countries; _a < countries_1.length; _a++) { // Note: This should be of, not in
    var country = countries_1[_a];
    var charCount = country.length;
    // console.log(`${country} (${charCount})`)
    if (charCount > highestCharCount) {
        highestCharCount = charCount;
        highestCharCountCountry = country;
    }
}
console.log("The country with the highest char count is: " + highestCharCountCountry + " (" + highestCharCount + ")");
var countriesWithLand = [];
for (var _b = 0, countries_2 = countries; _b < countries_2.length; _b++) {
    var country = countries_2[_b];
    if (country.includes('land')) {
        countriesWithLand.push(country);
    }
}
console.log("Countries with land: " + countriesWithLand);
var countriesReversed = [];
for (var i_5 = countries.length - 1; i_5 >= 0; i_5--) {
    countriesReversed.push(countries[i_5].toUpperCase());
}
console.log("Countries reversed and uppercased: " + countriesReversed);
