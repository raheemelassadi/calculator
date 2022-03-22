function add (a, b){
    return a + b;
}

function subract (a, b){
    return a - b ;
}

function multiply (a, b){
    return a * b;
}

function divide (a, b){
    return a / b;
}

function operate (func, a, b){
    return func(a, b);
}

const selectButtons = document.querySelectorAll('button');

const screen = document.querySelector('.screen');


for (let i = 0; i < selectButtons.length; i++){
    selectButtons[i].addEventListener('click', function(event){
        const currVal = selectButtons[i].firstChild.nodeValue;
        parseInt(currVal);
        const displayValue = document.createElement('p');
        displayValue.innerHTML = currVal;
        screen.appendChild(displayValue);
    })
}







