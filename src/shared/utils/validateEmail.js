/**
 * Validates an email address
 * @param {string} email - Email address to validate
 * @returns {boolean} True if email is valid
 */
export const validateEmail = (email) => {
  if (!email) return false;
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Normalizes an email address
 * @param {string} email - Email address to normalize
 * @returns {string} Normalized email address
 */
export const normalizeEmail = (email) => {
  if (!email) return '';
  return email.trim().toLowerCase();
};