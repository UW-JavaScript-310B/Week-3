// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt = (...args) =>
{
  let subtotal = 0;
  let taxrate = 0.103
  args.forEach(obj =>
  {     
        subtotal += obj.price;
        console.log (`${obj.descr} - $${obj.price} - Sub total: $${subtotal}`);
  })
  // calculate total after tax
  total = subtotal + (subtotal * taxrate);
  console.log(`Total after tax - $${total.toFixed(2)}`);
}


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
