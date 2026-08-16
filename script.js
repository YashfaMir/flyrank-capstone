import { validateDisplayName, validateEmail as validateEmailValue } from './validation.js';

const form = document.getElementById('settings-form');
const displayNameInput = document.getElementById('displayName');
const emailInput = document.getElementById('email');
const notificationsSelect = document.getElementById('notifications');
const successMessage = document.getElementById('success-message');

const setError = (input, message) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.add('invalid');
  if (errorElement) errorElement.textContent = message;
};

const clearError = (input) => {
  const errorElement = document.getElementById(`${input.id}-error`);
  input.classList.remove('invalid');
  if (errorElement) errorElement.textContent = '';
};

const validateDisplayNameField = () => {
  const value = displayNameInput.value;
  const result = validateDisplayName(value);
  if (!result.valid) {
    setError(displayNameInput, result.message);
    return false;
  }
  clearError(displayNameInput);
  return true;
};

const validateEmailField = () => {
  const value = emailInput.value;
  const result = validateEmailValue(value);
  if (!result.valid) {
    setError(emailInput, result.message);
    return false;
  }
  clearError(emailInput);
  return true;
};

displayNameInput.addEventListener('input', validateDisplayNameField);
emailInput.addEventListener('input', validateEmailField);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const isDisplayNameValid = validateDisplayNameField();
  const isEmailValid = validateEmailField();

  if (!isDisplayNameValid || !isEmailValid) {
    successMessage.textContent = '';
    successMessage.classList.remove('visible');
    return;
  }

  const payload = {
    displayName: displayNameInput.value.trim(),
    email: emailInput.value.trim(),
    notifications: notificationsSelect.value,
  };

  successMessage.textContent = 'Settings saved successfully.';
  successMessage.classList.add('visible');
  // In a real app we'd send `payload` to the server here.
});
