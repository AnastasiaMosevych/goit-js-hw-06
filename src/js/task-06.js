const input = document.querySelector('#validation-input');



input.addEventListener('blur', onInputBlur);

function onInputBlur(event, onInputBlurRemove) {
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (input.value.length !== Number(input.dataset.length)) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
}