function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector(`input`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const boxes = document.querySelector(`#boxes`);

let inputValue = 0;
inputEl.addEventListener(`input`, (event) => {
  return (inputValue = event.currentTarget.value);
});

function createBoxes(amount) {
  amount = inputValue;
  let arrOfDiv = [];
  let width = 20;
  let bgc;
  for (let i = 1; i <= amount; i += 1) {
    width += 10;
    bgc = getRandomHexColor();
    arrOfDiv.push({ width: width, bgc: bgc });
  }
  const markup = arrOfDiv
    .map(
      ({ width, bgc }) =>
        `<div style="height: ${width}px; width: ${width}px; background-color: ${bgc} "></div>`
    )
    .join(``);
  boxes.insertAdjacentHTML(`afterbegin`, markup);
}

function destroyBoxes() {
  boxes.innerHTML = ``;
}

createBtn.addEventListener(`click`, createBoxes);
destroyBtn.addEventListener(`click`, destroyBoxes);
