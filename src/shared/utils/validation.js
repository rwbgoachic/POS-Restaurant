/**
 * Validates request body against required fields
 * @param {string[]} requiredFields - Array of required field names
 */
export const validateFields = (requiredFields, body) => {
  const missingFields = requiredFields.filter(field => !body[field]);
  if (missingFields.length > 0) {
    return {
      isValid: false,
      error: `${missingFields.join(', ')} ${missingFields.length > 1 ? 'are' : 'is'} required`
    };
  }
  return { isValid: true };
};