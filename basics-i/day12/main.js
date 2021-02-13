/* To use regexp, either use:
 * - A RegExp constructor, or
 * - Declare a RegExp pattern using two forward slashes followed by a flag.
 */
/* RegExp expressions take two parametrs: A required search pattern and an optional flag.
 * Flags are optional parameters in a regular expression which determine the type of searching:
 * - g: Global flag which means look for pattern in the whole text
 * - i: case insensitive flag
 * - m: multi-line flag
 */
// Declaring regexp without flags
var pattern = 'love';
var regEx = new RegExp(pattern);
// Declaring regexp with flags
var regEx2 = new RegExp(pattern, 'gi');
// Creating pattern with RegExp Constructor
var regEx3 = /love/gi; // regEx2 is equivalent to regEx3
// test() checks for a match and returns true or false
var str = 'I love TypeScript.';
var pattern2 = /love/;
var result = pattern2.test(str);
console.log(result);
// match(): Returns an array containing all matches; null if no match found
var result2 = str.match(pattern2); // Returns more information: [ 'love', index: 2, input: 'I love TypeScript.', groups: undefined ]
console.log(result2);
var pattern3 = /love/g;
var result3 = str.match(pattern3); // Returns matches only: [ 'love' ]
console.log(result3);
// search(): Tests for a match and returns index; -1 if search fails
var result4 = str.search(pattern3);
console.log(result4);
var str2 = 'I dont love Java';
var result5 = str2.search(pattern3);
console.log(result5);
// replace(): Replaces matched substring with a replacement substring
var txt = 'Python is the most beautiful language that a human begin has ever created. \
I recommend python for a first programming language';
// Only the first instance in replaced
var replacedTxt = txt.replace(/Python|python/, 'JavaScript');
console.log(replacedTxt);
// Replaces pattern in the entire set
var replacedTxt2 = txt.replace(/Python|python/g, 'JavaScript');
console.log(replacedTxt2);
// Using the square bracket to include lower and upper case
var applePattern = '[Aa]pple';
var appleTxt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ';
var appleMatches = appleTxt.match(applePattern);
console.log(appleMatches);
var applePattern2 = /[Aa]pple/g;
var appleMatches2 = appleTxt.match(applePattern2); // Matches all instances and returns less info
console.log(appleMatches2);
// Using escape chars (\)
var digitPattern = /\d/g; // Digits
var txt2 = 'This regular expression example was made in January 12,  2020.';
var dMatches = txt2.match(digitPattern);
console.log(dMatches);
// Matching one or more times with plus (+)
var digitPattern2 = /\d+/g; // Digits
var dMatches2 = txt2.match(digitPattern2);
console.log(dMatches2);
// Matching any char with period (.)
var aPattern = /[a]./g;
var txt3 = 'Apple and banana are fruits';
var aMatches = txt3.match(aPattern);
console.log(aMatches);
// Matching zero or one times (?)
var txt4 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.';
var ePattern = /[Ee]-?mail/g;
var eMatches = txt4.match(ePattern);
console.log(eMatches);
// Matching on substring length { }
var txt5 = 'This regular expression example was made in December 6,  2019.';
var dPattern = /\d{4}/g;
var dMatches3 = txt5.match(dPattern);
console.log(dMatches3);
var dPattern2 = /\d{1,4}/g;
var dMatches4 = txt5.match(dPattern2);
console.log(dMatches4);
// Indicating start with (^)
var startPattern = /^This/;
var startMatches = txt5.match(startPattern);
console.log(startMatches);
// Negating with ^ within square brackets
var negatePattern = /[^A-Za-z,. ]+/g;
var negateMatches = txt5.match(negatePattern);
console.log(negateMatches);
// Exact matches (Still not sure how this works)
var exactPattern = /^[A-Z][a-z]{3,12}$/;
var exactMatches = exactPattern.test(txt5);
console.log(exactMatches);
