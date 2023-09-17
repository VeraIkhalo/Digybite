PLATES CO SALES SYSTEM
This is a simple sales system for Plates Co, allowing users to select dinner plates and calculate the total cost, including discounts and delivery charges.

HOW IT WORKS
The system has two main components:

ProductCatalogue.JS
Defines product details, delivery charge rules, and special offers.
Contains product names, prices, and rules for calculating delivery charges.
Supports special offers like "buy one red plate, get the second half price."

BASKET.JS
Allows users to add products to their basket.
Calculates the total cost considering discounts and delivery charges.
Discounts apply based on special offers.
Delivery charges depend on the order total and delivery charge rules.

ASSUMPTIONS
Unique Product Codes: Each product has a unique product code.
Special Offers: Supports one special offer; more can be added.
Rounding: Totals are rounded to two decimal places