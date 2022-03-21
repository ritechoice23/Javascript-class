// import '/js/functions';

// let carName = 'Toyota';
// let carColor = 'red';
// let carProduct = 'venza';

// console.log(carName)



let car = {
    name: 'Toyota',
    color: 'green',
    product: 'Venza',
    weight: 200,
    isHeavy() { if (this.weight > 100) return 'car is too heavy' },
};

const { name: n, product: p } = car;

console.log(p);

// use this to output things in this program
function outPut(item) {
    document.write(`<h1>${item}</h1>`)
}




