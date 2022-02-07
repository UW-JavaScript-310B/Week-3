// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...menuItems) => {
  // define total price
  let totalPrice = 0;
  // scan through menuItems
  menuItems.forEach(menuItem => {
    // Display each item properties
    console.log(`${menuItem.descr} - $${menuItem.price}`);
    // Calculate the total
    totalPrice += menuItem.price;
  })
  // Display total price
  console.log(`Total - $${totalPrice}`);
};


// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
