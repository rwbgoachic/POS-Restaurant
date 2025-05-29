import { 
  createInventoryItem, 
  updateInventoryQuantity, 
  removeInventoryItem, 
  getInventoryItem 
} from '../shared/utils';

export const trackInventory = (item) => {
  const inventory = {
    addItem: createInventoryItem,
    updateQuantity: updateInventoryQuantity,
    removeItem: removeInventoryItem,
    getItem: getInventoryItem
  };

  return inventory;
};