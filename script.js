let add = (num1, num2) => num1 + num2; 
let subtract = (num1,num2) => num1 - num2; 
let multiply = (num1, num2) => num1 * num2; 
let div = (num1, num2) => num1 / num2; 
const display = document.querySelector('.display'); 
display.textContent ='5533'
const leftButtons = document.querySelector('.button-left-container'); 

let operation = {}; 


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
        leftButtons.append(button); 
    }
    const clearBtn = document.createElement('button'); 
    clearBtn.classList.add('clr-btn'); 
    clearBtn.textContent = 'clear'; 
    leftButtons.append(clearBtn); 
    const evalBtn = document.createElement('button'); 
    evalBtn.classList.add('eval-btn'); 
    evalBtn.textContent = '='; 
    leftButtons.append(evalBtn); 
}

function makeOperateButtons() {
    const plusBtn = document.createElement('button'); 
    plusBtn.classList.add('plus-btn', 'op-btn'); 
    plusBtn.textContent = '+'; 
    const minBtn = document.createElement('button'); 
    minBtn.classList.add('min-bt','op-btn'); 
    minBtn.textContent = '-';
    const mulBtn = document.createElement('button'); 
    mulBtn.classList.add('mul-btn','op-btn'); 
    mulBtn.textContent = 'x';
    const divBtn = document.createElement('button'); 
    divBtn.classList.add('div-btn', 'op-btn'); 
    divBtn.textContent = '/'
    const rightButtons = document.querySelector('.button-right-container'); 
    rightButtons.append(plusBtn,minBtn,mulBtn,divBtn); 
}
/*create buttons*/ 
makeRightButtons(); 
makeOperateButtons(); 



