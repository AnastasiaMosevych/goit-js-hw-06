const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const defaultOutput = output.textContent;

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    const text = event.currentTarget.value === '' ? defaultOutput : event.currentTarget.value;
    output.textContent = text;
};