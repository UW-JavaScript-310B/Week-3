// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price


// const logReceipt = function(...menuItems) {
// then iterate over menuItems

const logReceipt = function(...items) {
  let total = 0;
  const tax = .1025;
       items.forEach(function (item) {
        total += item.price;
        taxes = item.price * tax;
        total += taxes;
        console.log(`${item.descr} - ${item.price} with tax ${(item.price + taxes).toFixed(2)}`);
        }
      )
      console.log(`Total with tax - ${total.toFixed(2)}`)
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
