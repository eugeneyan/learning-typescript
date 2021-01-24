export { }

let num = 3
if (num > 0) {
    console.log(`${num} is a positive number`)
}

// If else
num = 0
if (num > 0) {
    console.log(`${num} is a positive number`)
} else if (num < 0) {
    console.log(`${num} is a negative number`)
} else {
    console.log(`${num} is zero`)
}

// Switch
num = 0
switch (true) {
    case num > 0:
        console.log(`${num} is positive`)
        break
    case num < 0:
        console.log(`${num} is negative`)
        break
    case num == 0:
        console.log(`${num} is zero`)
        break
    default:
        console.log(`${num} is not a number`)
}

let weather = 'cloudy'
switch (weather) {
    case 'sunny':
        console.log('Bring some sunblock')
        break
    case 'rainy':
        console.log('Wear a rain coat.')
        break
    case 'snowy':
        console.log('Just stay at home')
        break
    default:
        console.log('Not sure what weather this is')
        break
}

// Ternary
let isRaining = false
isRaining
    ? console.log('Wear a rain coat.')
    : console.log('No need for a rain coat.')
