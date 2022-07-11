const inputEl = document.querySelector(`#validation-input`);

const validRule = Number(inputEl.dataset.length);



inputEl.addEventListener(`blur`, (event) => {
    if (event.currentTarget.value.length !== validRule) {
        inputEl.classList.add(`invalid`);
    } else {
         inputEl.classList.remove(`invalid`);
    }
        inputEl.classList.add(`valid`);
})


