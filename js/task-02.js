const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector(`#ingredients`);

const arrLi = [];

for (const ingridient of ingredients) {
  const itemEl = document.createElement(`li`);
  itemEl.classList.add(`item`);
  itemEl.textContent = ingridient;

  arrLi.push(itemEl);
}

list.append(...arrLi);

const arr = [1, 3, 4];
let num1 = 3;
const arr2 = arr;
let num2 = num1;
arr.splice(1, 1);
num1 += 5;
