/**
 * Formats a number as currency
 * @param {number} amount - Amount to format
 * @param {string} currency - Currency code (default: 'USD')
 * @param {string} locale - Locale (default: 'en-US')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
};

/**
 * Parses a currency string into a number
 * @param {string} value - Currency string to parse
 * @returns {number} Parsed amount
 */
export const parseCurrency = (value) => {
  if (typeof value === 'number') return value;
  
  const cleanValue = value.replace(/[^0-9.-]+/g, '');
  return parseFloat(cleanValue);
};