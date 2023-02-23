const listOfCategories = document.querySelector('#categories');
const items = listOfCategories.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryElements = item.querySelectorAll('li').length;
  console.log(`Category: ${categoryTitle}\nElements: ${categoryElements}`);
});
