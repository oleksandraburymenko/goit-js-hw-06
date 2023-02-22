const counter = document.querySelector('div');
console.log(counter);
const removeBtn = counter.firstElementChild;
const value = removeBtn.nextElementSibling;
const addBtn = counter.lastElementChild;
let counterValue = 0;

removeBtn.addEventListener('click', onRemoveBtnClick);
addBtn.addEventListener('click', onAddBtnClick);

function onRemoveBtnClick () {
    counterValue -= 1;
    value.textContent = counterValue;
};
function onAddBtnClick () {
    counterValue += 1;
    value.textContent = counterValue;
};