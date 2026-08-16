import assert from 'assert';
import { validateDisplayName, validateEmail } from '../validation.js';

console.log('Running validation tests...');

// Display name tests
assert.deepStrictEqual(validateDisplayName(''), { valid: false, message: 'Display name is required.' });
assert.deepStrictEqual(validateDisplayName('   '), { valid: false, message: 'Display name is required.' });
assert.deepStrictEqual(validateDisplayName('A'), { valid: false, message: 'Display name must be at least 2 characters long.' });
assert.deepStrictEqual(validateDisplayName('Ab'), { valid: true });

// Email tests
assert.deepStrictEqual(validateEmail(''), { valid: false, message: 'Email is required.' });
assert.deepStrictEqual(validateEmail('abc'), { valid: false, message: 'Please enter a valid email address.' });
assert.deepStrictEqual(validateEmail('a@b'), { valid: false, message: 'Please enter a valid email address.' });
assert.deepStrictEqual(validateEmail('a@b.com'), { valid: true });

console.log('All validation tests passed.');