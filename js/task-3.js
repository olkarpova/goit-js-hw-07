const inputElem = document.querySelector('#name-input');
console.log(inputElem);

const nameOtputElem = document.querySelector('#name-output');
console.log(nameOtputElem);

inputElem.addEventListener('input', () => {
    const trimmedValue = inputElem.value.trim();

    nameOtputElem.textContent = trimmedValue === '' ? 'Anonymous' : trimmedValue;
});
