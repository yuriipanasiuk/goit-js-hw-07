const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', handleChangeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function handleChangeColor() {
  refs.span.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = refs.span.textContent;
}
