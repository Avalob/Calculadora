let currentInput = "0";  
let operator = null;
let previousInput = null;


function appendNumber(number) {
    if (currentInput === "0") {
        currentInput = number; 
    } else {
        currentInput += number;  
    }
    updateDisplay();
}

function chooseOperation(op) {
    if (operator !== null) {
        calculate(); 
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "0";
}

function calculate() {
    if (operator === null || previousInput === null) return;
    let result;
    switch (operator) {
        case '+':
            result = parseFloat(previousInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(previousInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(previousInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(previousInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = null;
    previousInput = null;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = "0";
    operator = null;
    previousInput = null;
    updateDisplay();
}

function scrollDisplay(direction) {
    let display = document.getElementById('display');
    let scrollAmount = direction === 'left' ? -1 : 1;
    display.scrollLeft += scrollAmount * 30; 
}
