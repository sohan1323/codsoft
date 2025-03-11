
const display = document.getElementById('display');


const buttons = document.querySelectorAll('.buttons button');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        const buttonText = buttons[i].textContent;

        
        if (buttonText === 'C') {
            
            display.value = '';
        } else if (buttonText === 'DEL') {
            
            let currentValue = display.value;
            display.value = '';
            for (let j = 0; j < currentValue.length - 1; j++) {
                display.value += currentValue[j];
            }
        } else if (buttonText === '=') {
            
            const expression = display.value;
            let result = 0;
            let currentNumber = '';
            let operator = '+';
            let isError = false;

            for (let j = 0; j < expression.length; j++) {
                const char = expression[j];

                if (char === '+' || char === '-' || char === '*' || char === '/') {
                    
                    if (operator === '+') {
                        result += parseFloat(currentNumber);
                    } else if (operator === '-') {
                        result -= parseFloat(currentNumber);
                    } else if (operator === '*') {
                        result *= parseFloat(currentNumber);
                    } else if (operator === '/') {
                        if (parseFloat(currentNumber) === 0) {
                            isError = true;
                            break;
                        }
                        result /= parseFloat(currentNumber);
                    }

                    
                    currentNumber = '';
                    operator = char;
                } else {
                    
                    currentNumber += char;
                }
            }

            
            if (!isError) {
                if (operator === '+') {
                    result += parseFloat(currentNumber);
                } else if (operator === '-') {
                    result -= parseFloat(currentNumber);
                } else if (operator === '*') {
                    result *= parseFloat(currentNumber);
                } else if (operator === '/') {
                    if (parseFloat(currentNumber) === 0) {
                        isError = true;
                    } else {
                        result /= parseFloat(currentNumber);
                    }
                }
            }

            
            if (isError) {
                display.value = 'Error';
            } else {
                display.value = result;
            }
        } else {
            
            display.value += buttonText;
        }
    });
}