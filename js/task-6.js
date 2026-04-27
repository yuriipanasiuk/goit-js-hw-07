const refs = {
  inputValue: document.querySelector('#controls input'),
  createButton: document.querySelector('[data-create]'),
  destroyButton: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

refs.inputValue.addEventListener('input', getInputValue);
refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  amount = getInputValue();

  const basicBoxSize = 30;

  for (let i = 0; i < amount; i++) {
    const boxSize = basicBoxSize + i * 10;
    const createDivEl = document.createElement('div');
    createDivEl.style.cssText = `width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}`;
    refs.boxes.append(createDivEl);
  }
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}

function getInputValue() {
  return refs.inputValue.value;
}
