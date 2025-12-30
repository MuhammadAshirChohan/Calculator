'use strict'

let display = "";
let input = document.querySelector('input');
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText == "=") {
            try {
                let calculation = display.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
                
                calculation = calculation.replace(/(\d+)%/g, '($1/100)');

                display = eval(calculation);
                input.value = display;
            } catch (err) {
                input.value = "Syntax Error";
                display = "";
            }
        } 
        else if (btnText == 'CE') {
            display = "";
            input.value = "";
        } 
        else if (btnText == 'X') {
            display = display.toString().slice(0, -1);
            input.value = display;
        } 
        else {
            display = display + btnText;
            input.value = display;
        }
    })
})