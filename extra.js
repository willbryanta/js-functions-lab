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