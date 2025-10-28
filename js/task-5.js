const btnElem = document.querySelector('.js-change-color');
console.log(btnElem);
const colorSpan = document.querySelector('.color');
const body = document.body;

btnElem.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
