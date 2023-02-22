
const fontSizeControl = document.querySelector('input#font-size-control');
const span = document.querySelector('span#text');

fontSizeControl.addEventListener('input', onInputChange);
function onInputChange (event) {
  const fontSize = event.target.value + 'px';
  span.style.fontSize = fontSize;
};