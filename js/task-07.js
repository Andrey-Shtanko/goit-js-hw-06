const inputValue = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputValue.addEventListener(`input`, (event) => {
     textEl.style.fontSize = `${event.currentTarget.value}px`
    
})