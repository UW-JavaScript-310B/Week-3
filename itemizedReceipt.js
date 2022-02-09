// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

function logReceipt(...receipt){
  let sum = 0; 
  let taxSum = 0; 
  
  const taxRate = 0.104;

  receipt.forEach(receipt => {
    taxSum += taxRate * receipt.price;
    sum += receipt.price; 
    console.log(`${receipt.descr} - $${receipt.price}`)
  });

  console. log (`Subtotal : $${sum}`)
  console. log (`Taxes : $${taxSum.toFixed(2)}`)  
  console. log (`Total : $${(sum + taxSum).toFixed(2)}`)
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
