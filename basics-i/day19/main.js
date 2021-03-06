/*
 * Javascript allows the writing of functions inside an outer function.
 * If an inner function accesses the variables of the outer function, it's call a closure.
 */
function outerFunction() {
    var count = 0;
    function innerFunction() {
        count++;
        return count;
    }
    return innerFunction;
}
var innerFunc = outerFunction();
console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
function outerFunction2() {
    var count = 0;
    function plusOne() {
        count++;
        return count;
    }
    function minusOne() {
        count--;
        return count;
    }
    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    };
}
var innerFuncs = outerFunction2();
console.log(innerFuncs.plusOne);
console.log(innerFuncs.minusOne);
