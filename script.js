const form = document.getElementById('settings-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const successMessage = document.getElementById('success-message');

const setError = (input, message) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.add('invalid');
  errorElement.textContent = message;
};

const clearError = (input) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.remove('invalid');
  errorElement.textContent = '';
};

const validateName = () => {
  const value = nameInput.value.trim();

  if (!value) {
    setError(nameInput, 'Name is required.');
    return false;
  }

  if (value.length < 2) {
    setError(nameInput, 'Name must be at least 2 characters long.');
    return false;
  }

  clearError(nameInput);
  return true;
};

const validateEmail = () => {
  const value = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!value) {
    setError(emailInput, 'Email is required.');
    return false;
  }

  if (!emailPattern.test(value)) {
    setError(emailInput, 'Please enter a valid email address.');
    return false;
  }

  clearError(emailInput);
  return true;
};

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();

  if (!isNameValid || !isEmailValid) {
    successMessage.textContent = '';
    successMessage.classList.remove('visible');
    return;
  }

  successMessage.textContent = 'Settings saved successfully.';
  successMessage.classList.add('visible');
});
