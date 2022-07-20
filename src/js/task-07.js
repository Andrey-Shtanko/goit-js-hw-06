const inputValue = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);
const defaultValue = inputValue.valueAsNumber

textEl.style.fontSize = `${defaultValue}px`


inputValue.addEventListener(`input`, (event) => {
     textEl.style.fontSize = `${event.currentTarget.value}px`
    
})