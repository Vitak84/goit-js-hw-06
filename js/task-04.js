const value = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
decrement.addEventListener('click', Buttondecrement);
increment.addEventListener('click', Buttonincrement);

function Buttondecrement() {
    counterValue -= 1; 
    value.textContent = counterValue;
};

function Buttonincrement() {
    counterValue += 1; 
    value.textContent = counterValue;
};