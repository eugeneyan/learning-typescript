// Increment operators (post increments are used more often)
var count = 0;
console.log(count++); // Post increment
console.log(count++); // Post increment
console.log(++count); // Pre increment
console.log(++count); // Pre increment
// Ternary operators
var isRaining = true;
isRaining
    ? console.log('You need a rain coat')
    : console.log('You DON\'T need a rain coat');
isRaining = false;
console.log('It has stopped raining');
isRaining
    ? console.log('You need a rain coat')
    : console.log('You DON\'T need a rain coat');
var number = 5;
number > 0
    ? console.log("Number " + number + " is positive")
    : console.log("Number " + number + " is negative");
number = -5;
number > 0
    ? console.log("Number " + number + " is positive")
    : console.log("Number " + number + " is negative");
// Alerts, Prompts, and Confirms 
// SEE main.html
/* What is the "new" keyword for? (the example below doesn't work without it)
 * From what I can infer, "new" is needed to create NON-NATIVE types
 * - https://stackoverflow.com/questions/39622778/what-is-new-in-typescript
 * - https://stackoverflow.com/a/38755779/3611239
 */
var now = new Date();
var allSeconds = Date.now();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getTime()); // Milliseconds since 1970-01-01
console.log(allSeconds);
console.log(now.getTime() == allSeconds);
