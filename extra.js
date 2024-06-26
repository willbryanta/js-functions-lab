// Exercise 1

function planetHasWater(planet){
    if(planet === 'Earth' || planet === 'Mars'){
        console.log(true)
    } else {
        console.log(false)
    }
}

// Exercise 2

function computeArea(width, height){
    return `The area of a rectangle with a width of ${width} and a height of ${height} is ${width*height} square units.`
}

// Exercise 3

function whoami(name, birthYear, hobby1, hobby2){
    return `Hi, my name is ${name}. I am ${birthYear - 2024} years old. My hobbies are ${hobby1} and ${hobby2}.`
}

// Exercise 4

function howOldAmI(birthYear, currentYear){
    return `You are either ${birthYear - currentYear} or ${birthYear - currentYear + 1} years old`
}

// Exercise 5

function calculateLifetimeSupply(favSnack, numSnack, currentAge, maxAge){
    return `You will need ${(maxAge - currentAge)*numSnack*365} ${favSnack}s to last you until the ripe old age of ${maxAge}`

}