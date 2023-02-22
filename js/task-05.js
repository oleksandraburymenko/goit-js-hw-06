const refs = {
    input: document.querySelector('input'),
    span: document.querySelector('span'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.span.textContent = event.currentTarget.value || "Anonymous";
};