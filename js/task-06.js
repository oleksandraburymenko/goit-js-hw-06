const inputEl = document.querySelector('input');
const inputLength = inputEl.dataset.length;
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur (event) {
    const inputValue = event.target.value;
    if (inputValue.length === Number(inputLength)) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
       } else {
        inputEl.classList.add("invalid");
        inputEl.classList.remove("valid");
       }

};

