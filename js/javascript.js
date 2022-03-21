// alert("hello world");
document.write('this is from javascript');
console.log('this is from javascript to the console');
var newText = document.querySelector('#text')
document.write(`<br>Old Text: ${newText.innerHTML}`)
newText.innerHTML = 'new text';

// variables 
// var a = '';
// const a = '';
// let a = '';

// var name = 'riteChoice';

// const pi = 2

// console.log(pi)

// function showName() {
//     let name = 'show name';
//     console.log(name);
// }

// function newName() {
//     console.log(name);
// }

// showName();
// newName();


// for (i = 0; i <= 5; ++i) {
//     console.log(i)
// }


// operators 
const a = 1
var b = 1
var c = 1
c += b
console.log(c);
console.log(typeof a);
console.log(typeof b);

console.log(a === b)

const hasFuel = true;
const inGoodCondition = false;

if (hasFuel || inGoodCondition) {
    document.write(`<h2>Car ready to run </h2>`)
} else {
    document.write(`<h2 style="color:red">You need to check this car</h2>`)
}

