export function validateDisplayName(value) {
  const trimmed = (value || '').trim();
  if (!trimmed) {
    return { valid: false, message: 'Display name is required.' };
  }
  if (trimmed.length < 2) {
    return { valid: false, message: 'Display name must be at least 2 characters long.' };
  }
  return { valid: true };
}

export function validateEmail(value) {
  const v = (value || '').trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!v) {
    return { valid: false, message: 'Email is required.' };
  }
  if (!emailPattern.test(v)) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }
  return { valid: true };
}
