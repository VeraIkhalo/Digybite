const productCatalogue = {
    R01: { name: 'Red Plate', price: 32.95 },
    G01: { name: 'Green Plate', price: 24.95 },
    B01: { name: 'Blue Plate', price: 7.95 },
  };
  
  const deliveryRules = [
    { threshold: 90, charge: 0 },
    { threshold: 50, charge: 2.95 },
    { threshold: 0, charge: 4.95 },
  ];
  
  const offers = {
    'R01': { quantity: 2, discount: 0.5 },
  };
  
  export { productCatalogue, deliveryRules, offers };
  