/**
 * Create a new inventory item
 * @param {Object} product - Product details
 */
export const createInventoryItem = (product) => {
  return {
    id: product.id,
    name: product.name,
    quantity: product.quantity || 0,
    price: product.price || 0
  };
};

/**
 * Update inventory item quantity
 * @param {string} productId - Product ID
 * @param {number} newQuantity - New quantity
 */
export const updateInventoryQuantity = (productId, newQuantity) => {
  return {
    id: productId,
    quantity: newQuantity
  };
};

/**
 * Remove inventory item
 * @param {string} productId - Product ID
 */
export const removeInventoryItem = (productId) => {
  return { id: productId };
};

/**
 * Get inventory item details
 * @param {string} productId - Product ID
 */
export const getInventoryItem = (productId) => {
  return {
    id: productId,
    exists: true
  };
};