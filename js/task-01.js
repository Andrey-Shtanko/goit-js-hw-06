const ulChildrens = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${ulChildrens.length}`);

console.log(``);

ulChildrens.forEach(function (item) {
const itemTitle = item.querySelector(`h2`);
    const itemUl = item.querySelectorAll(`li`);
    console.log(`Category: ${itemTitle.textContent}`);
console.log(`Elements: ${itemUl.length}`);
console.log(``);
})

