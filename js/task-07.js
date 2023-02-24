
const fontSizeControl = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');
span.style.fontSize = fontSizeControl.value + 'px';
fontSizeControl.addEventListener('input', onInputChange);
function onInputChange (event) {
  span.style.fontSize = event.target.value + 'px';
};
