const input = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('div#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);
function createBoxes () {
  const amount = Number(input.value);

  const boxes = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
    boxSize += 10;
  }
  boxesContainer.append(...boxes);

  
}

function destroyBoxes () {
  boxesContainer.innerHTML = '';

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
