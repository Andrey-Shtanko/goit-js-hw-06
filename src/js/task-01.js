const ulChildrens = document.querySelector(`#categories`);
console.log(`Number of categories:${ulChildrens.children.length}`);

console.log(``);

const itemsTitle = document.querySelectorAll(`h2`);

const itemsUl = document.querySelectorAll(`.item>ul`);

console.log(`Category: ${itemsTitle[0].textContent}`);
console.log(`Elements: ${itemsUl[0].childElementCount}`);
console.log(``);
console.log(`Category: ${itemsTitle[1].textContent}`);
console.log(`Elements: ${itemsUl[1].childElementCount}`);
console.log(``);
console.log(`Category: ${itemsTitle[2].textContent}`);
console.log(`Elements: ${itemsUl[2].childElementCount}`);
console.log(``);
