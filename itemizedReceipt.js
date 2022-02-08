// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price



// Create an array of menu item objects
const items = [{
    descr: 'Burrito',
    price: 5.99
  },
  {
    descr: 'Chips & Salsa',
    price: 2.99
  },

  {
    descr: 'Mexi Fries',
    price: 1.99
  },

  {
    descr: 'Sprite',
    price: 1.99
  }

]

function logReceipt() {
  //set total cost to 0
  let totalCost = 0;

  //create list of items purchased and their price
  items.forEach(item => console.log(`${item.descr} - $${item.price}`))

  //create total line
  items.forEach(item => totalCost += item.price);
  console.log(`Total Cost - $${totalCost}`)

};

logReceipt();



// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97