//adds inputs
function add (a, b){
    return a + b;
}
//subtracts inputs
function subract (a, b){
    return a - b ;
}
//mulitplies inputs
function multiply (a, b){
    return a * b;
}
//divides inputs
function divide (a, b){
    return a / b;
}
//runs the operaters with the inputs
function operate (func, a, b){
    return func(a, b);
}
//selects each button 
const selectButtons = document.querySelectorAll('button');
//selects the display screen
const screen = document.querySelector('.screen');

//if button value = AC then reset display value to nothing ('')



for (let i = 0; i < selectButtons.length; i++){
    selectButtons[i].addEventListener('click', function(){
        const currVal = selectButtons[i].firstChild.nodeValue;
        parseInt(currVal);
        const displayValue = document.createElement('p');
        displayValue.innerHTML = currVal;
        screen.appendChild(displayValue);
    })
}







