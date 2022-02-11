// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price


const priceTotal =() => {
  
}

const logReceipt = (...receipt) => { 
  let subTotal = 0;
  receipt.forEach(receipt => {
    console.log(`${receipt.descr} - ${receipt.price}`)
    subTotal += receipt.price;
  })
  let taxes = subTotal * 0.10;
  let total = taxes + subTotal;
  console.log(`Subtotal = ${subTotal}\nTaxes = ${taxes.toFixed(2)}\nTotal = ${total.toFixed(2)}`)
};

//print out array



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


// A(n) 'this' allows you to call the function above where the function is defined.