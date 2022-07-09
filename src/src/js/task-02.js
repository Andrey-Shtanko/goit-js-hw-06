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
