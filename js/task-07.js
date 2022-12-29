const input = document.getElementById('font-size-control');
const text = document.getElementById('text');

input.addEventListener('input', onInputChange);

function onInputChange() {
    text.style.fontSize = `${input.value}px`;
}