const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

const handleInput = e => {
  const value = refs.input.value.trim();

  refs.output.textContent = value || 'Anonymous';
};

document.addEventListener('input', handleInput);
