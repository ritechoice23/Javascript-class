let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.btn'));


buttons.map(button => {
    button.addEventListener('click', (e) => {

        switch (button.innerText) {
            case 'c':
                display.innerText = 0
                break;
            case 'del':
                if (display.innerText && display.innerText != '0') {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try {
                    display.innerText = eval(display.innerText);
                } catch (Error) {

                    display.innerText = "Error"
                }
                break;
            default:
                display.innerText += button.innerText
                break;
        }

    });
})

