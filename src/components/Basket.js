import React, { useState } from 'react';
import { productCatalogue, deliveryRules, offers } from '../ProductCatalogue';


function Basket() {
  const [items, setItems] = useState([]);

  const addItem = (productCode) => {
    setItems([...items, productCode]);
  };

  const calculateTotal = () => {
    let total = 0;
    const itemCounts = {};

    // Count the quantity of each item
    items.forEach((productCode) => {
      itemCounts[productCode] = (itemCounts[productCode] || 0) + 1;
    });

    for (const productCode in itemCounts) {
      const product = productCatalogue[productCode];
      const quantity = itemCounts[productCode];

      // Apply discounts if applicable
      if (offers[productCode] && quantity >= 2) {
        const { discount } = offers[productCode];
        total += product.price * quantity * (1 - discount);
      } else {
        total += product.price * quantity;
      }
    }

    // Calculate delivery charge
    const subtotal = Object.values(itemCounts).reduce((acc, quantity) => {
      const productCode = Object.keys(itemCounts).find(key => itemCounts[key] === quantity);
      const product = productCatalogue[productCode];
      return acc + product.price * quantity;
    }, 0);

    const deliveryCharge = deliveryRules.find(rule => subtotal >= rule.threshold)?.charge || 0;

    total += deliveryCharge;

    return total.toFixed(2); // Format total to two decimal places
  };

  return (
    <div className="basket-container">
      <h2>Plates Co Sales System</h2>
      <div className="product-buttons">
        <button onClick={() => addItem('R01')}>Add Red Plate</button>
        <button onClick={() => addItem('G01')}>Add Green Plate</button>
        <button onClick={() => addItem('B01')}>Add Blue Plate</button>
      </div>
      <p>Selected Items: {items.join(', ')}</p>
      <p>Total: ${calculateTotal()}</p>
    </div>
  );
}

export default Basket;
