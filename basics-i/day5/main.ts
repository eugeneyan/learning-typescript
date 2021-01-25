export { }

// Arrays
const nums = [0, 1, 2, 3, 5, 6]
console.log('Numbers: ', nums)
console.log(`Numbers: ${nums} (Length: ${nums.length})`)

// Splitting arrays
const faang = ('Facebook Amazon Apple Netflix Google')
const faangArray = faang.split(' ')
console.log('FAANG: ', faangArray)
console.log(`FAANG: ${faangArray}`)

// Constructing an empty array
const emptyArray = Array(8)
console.log(emptyArray)

emptyArray[0] = '1'
emptyArray[5] = 6
console.log(emptyArray)

emptyArray.fill(0)
console.log(emptyArray)

let array1 = [0, 1, 2]
let array2 = [3, 4, 5]
let arrayCombined = array1.concat(array2)

console.log(arrayCombined)

// Check if item in array
let coy = 'Snap'
let index = faangArray.indexOf(coy)

if (index != -1) {
    console.log(`${coy} is in FAANG`)
} else {
    console.log(`${coy} is not in FAANG`)
}

if (faangArray.includes(coy)) {
    console.log(`${coy} is in FAANG`)
} else {
    console.log(`${coy} is not in FAANG`)
}

console.log(faangArray.toString())
console.log(faangArray.join(', '))

// Sliceing arrayw
console.log(nums.slice())
console.log(nums.slice(1, 4))

// Push and pop
faangArray.push('Stripe')  // Add item to the end
console.log(faangArray)

faangArray.pop()  // Remove item from the end
console.log(faangArray)

faangArray.unshift('Stripe')  // Add item at the start
console.log(faangArray)

faangArray.reverse()
console.log(faangArray)

// Exercise Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length - 1]
console.log(`Min age: ${minAge}, Max age: ${maxAge}`)

function getMedian(array: Array<number>) {
    let midIndex = Math.floor(array.length / 2)

    if (array.length % 2 === 0) {
        return array[midIndex]
    } else {
        return (array[midIndex - 1] + array[midIndex]) / 2
    }
}

console.log(`Median age: ${getMedian(ages)}`)

let sum = ages.reduce((a, b) => a + b, 0)
let mean = sum / ages.length

console.log(`Mean age: ${mean}`)

console.log(`Range of ages: ${maxAge} - ${minAge} = ${maxAge - minAge}`)