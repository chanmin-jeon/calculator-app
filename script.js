let add = (num1, num2) => num1 + num2; 
let subtract = (num1,num2) => num1 - num2; 
let multiply = (num1, num2) => num1 * num2; 
let div = (num1, num2) => num1 / num2; 
const display = document.querySelector('.display'); 
const leftButtons = document.querySelector('.button-left-container'); 

let operation = {
    num1: null, 
    num2: null, 
    operator: null,
}; 
let displayVal = ''; 
let eqPressed = false; 

function displayNums(buttonVal) {
    if (eqPressed) {
        clear(); 
        eqPressed = false; 
    }
    if (displayVal.length < 12) {
        displayVal += buttonVal;
        display.textContent = displayVal; 
    } else {
        display.textContent = displayVal; 
    }
}

function displayAnswer(answer) {
    answer += ''; 
    if (answer.length < 12) {
        display.textContent = answer; 
    } else {
        display.textContent = answer.substring(0,12); 
    }
}

function clear() {
    operation.num1 = null; 
    operation.num2 = null; 
    operation.operator = null;
    displayVal = ''; 
    display.textContent = displayVal; 
}

function getNextNum(operator) {
    if (operation.num1 === null) {
        operation.num1 = Number(displayVal); 
    } else {
        let answer = evaluate(); 
        operation.num1 = answer; 
        operation.num2 = null; 
    }
    displayVal = ''; 
    operation.operator = operator; 
    eqPressed = false; 
}

function evaluate() {
    operation.num2 = Number(displayVal);
    if (operation.num1 !== null && operation.num2 !== null && operation.operator !== null) {
        let answer = operate(operation.num1, operation.num2, operation.operator);
        displayAnswer(answer);
        eqPressed = true;
        return answer;
    }
}

function operate(num1, num2, operator) {
    let answer; 
    if (operator === '+') {
        answer = add(num1 ,num2);
    } else if (operator === '-') {
        answer = subtract(num1 ,num2);
    }
    else if (operator === 'x') {
        answer = multiply(num1 ,num2);
    } else if (operator === '/') {
        answer = div(num1 ,num2);
    }
    return answer; 
}

function makeRightButtons() {
    for (let i = 0; i < 10; i++) {
        let button = document.createElement('button'); 
        button.classList.add(`num-button`); 
        button.textContent = `${i}`; 
        button.addEventListener('click', () => displayNums(button.textContent)); 
        leftButtons.append(button); 
    }
    const clearBtn = document.createElement('button'); 
    clearBtn.classList.add('clr-btn'); 
    clearBtn.textContent = 'AC'; 
    clearBtn.addEventListener('click', () => clear()); 
    leftButtons.append(clearBtn); 
    const evalBtn = document.createElement('button'); 
    evalBtn.classList.add('eval-btn'); 
    evalBtn.textContent = '='; 
    evalBtn.addEventListener('click', () => evaluate()); 
    leftButtons.append(evalBtn); 
}

function makeOperateButtons() {
    const plusBtn = document.createElement('button'); 
    plusBtn.classList.add('plus-btn', 'op-btn'); 
    plusBtn.textContent = '+'; 
    plusBtn.addEventListener('click', () => getNextNum(plusBtn.textContent)); 
    const minBtn = document.createElement('button'); 
    minBtn.classList.add('min-bt','op-btn'); 
    minBtn.textContent = '-';
    minBtn.addEventListener('click', () => getNextNum(minBtn.textContent)); 
    const mulBtn = document.createElement('button'); 
    mulBtn.classList.add('mul-btn','op-btn'); 
    mulBtn.textContent = 'x';
    mulBtn.addEventListener('click', () => getNextNum(mulBtn.textContent));
    const divBtn = document.createElement('button'); 
    divBtn.classList.add('div-btn', 'op-btn'); 
    divBtn.textContent = '/'
    divBtn.addEventListener('click', () => getNextNum(divBtn.textContent));
    const rightButtons = document.querySelector('.button-right-container'); 
    rightButtons.append(plusBtn,minBtn,mulBtn,divBtn); 
}
/*create buttons*/ 
makeRightButtons(); 
makeOperateButtons(); 



