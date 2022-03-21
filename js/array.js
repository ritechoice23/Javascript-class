let cars = ['volvo', 'venzer', 'benz', 'corola'];

const carsObject = {
    volv: 'volvo',
    venzer: 'venzer'
}

// console.log(carsObject.volv)

// cars.push('bentley') // add element to array
// cars.pop('bentley')
// cars[0] = 'bentley'

// console.log(cars.sort())

// let scores = [20, 6, 500, 100,]

// console.log(scores.sort((a, b) =>
//     a - b
// ))

// console.log(Math.max.apply(null, scores))

// console.log(Math.min.apply(null, scores))


// looping throuhg and array of objects

cars.map(listCar)

function listCar(car, index, cars) {
    console.log(index + car)
    console.log(cars)
}







