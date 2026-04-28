const formRef = document.querySelector('.login-form');

const handleFormSubmit = e => {
  e.preventDefault();

  const formElements = e.target.elements;

  const email = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    email,
    password,
  };

  if (email?.trim() === '' || password?.trim() === '') {
    return alert('All form fields must be filled in');
  }

  console.log(formData);

  formRef.reset();
};

formRef.addEventListener('submit', handleFormSubmit);
