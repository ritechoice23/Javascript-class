
function message() {
    alert('are you sure you want to close this page')
}


function changeMessage() {
    alert('You are now typing')
}

let input = document.querySelector('#input')

input.addEventListener('onchange', alert('somthing changed'));
