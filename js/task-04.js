

let counterValue = 0;


const btnDec = document.querySelector(`button[data-action="decrement"]`);

const btnInc = document.querySelector(`button[data-action="increment"]`);

const valueEl = document.querySelector(`#value`);





btnInc.addEventListener("click", function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
} );

btnDec.addEventListener("click", function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});









