const listOfCategories = document.querySelector("ul");
const items = document.querySelectorAll(".item");
const numberOfItems = items.length;
console.log('Number of categories:', numberOfItems);
const categoryTitles = document.querySelectorAll("h2");
console.log('Category:', categoryTitles[0].textContent);
const firstItem = listOfCategories.firstElementChild;
console.log('Elements:',firstItem.lastElementChild.childElementCount);

console.log('Category:', categoryTitles[1].textContent);
const secondItem = firstItem.nextElementSibling;
console.log('Elements:',secondItem.lastElementChild.childElementCount);

console.log('Category:', categoryTitles[2].textContent);
const lastItem = listOfCategories.lastElementChild;
console.log('Elements:',lastItem.lastElementChild.childElementCount);
