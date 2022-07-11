const inputName = document.querySelector(`#name-input`);
console.log(inputName);
const outputEl = document.querySelector(`#name-output`);
console.log(outputEl);
inputName.addEventListener(`input`, (event) => {
    if (event.currentTarget.value !== ``) {
        outputEl.textContent = event.currentTarget.value;
    } else {
        outputEl.textContent = `Anonymous`;
    }

    
});

