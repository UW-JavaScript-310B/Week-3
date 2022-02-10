// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = function(...menuItems) {
  let total = 0;
  menuItems.forEach(menuItem => console.log(`descr: ${menuItem.descr}, price: $${menuItem.price}`))
  menuItems.forEach(menuItem => total += menuItem.price);
  console.log(`Total - $${total}`)
  
  // return receipt
}

// const array1 = ['a', 'b', 'c'];

// array1.forEach(element => console.log(element));

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
