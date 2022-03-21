let age = 15

// if (age > 5) {
//     alert(`the permited age group for this
//      event can not be mot than 5 years, your are now ${age} years`)
// } else {
//     alert(`congratulations, you are parmitted, your are now ${age} years`)
// }

// switch statement

switch (age) {
    case age > 5 && age < 10:
        //     alert(`the permited age group for this
        //  event can not be mot than 5 years, your are now ${age} years`)
        break;

    case age <= 4:
        // alert(`congratulations, you are parmitted, your are now ${age} years`)
        break;

    default:
        // alert('you are not permitted at all.')
        break;
}


// word check appliction 

var word = document.querySelector('#word')
var feedback = document.querySelector('#feedback')

function checkWord() {
    alert(word.value)
    var searchKey = word.value

    switch (searchKey) {

        case 'good':
            feedback.innerHTML = `Yes, <strong>${searchKey}</strong> is permited in this class`
            break;

        case 'crazy':
            addDanger()
            feedback.innerHTML = `No, <strong>${searchKey}</strong> is not permited in this class`
            break;

        default:
            addDanger()
            feedback.innerHTML = `<strong>${searchKey}</strong> not found`
            break;
    }
}


function addDanger() {
    feedback.classList.remove('alert-info')
    feedback.classList.add('alert-danger')
}


