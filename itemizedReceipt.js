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
  let subTotal = 0;

  //create list of items purchased and their price
  items.forEach(item => console.log(`${item.descr} - $${item.price}`))

  //calculate total of all items purchased
  items.forEach(item => subTotal += item.price);

  //calculate tax
  const tax = parseFloat((subTotal * .01).toFixed(2)); 

  //calculate total with tax
  total = parseFloat((subTotal + tax).toFixed(2));

  //return totals and tax
const displaySub =  (`Subtotal - ${subTotal}`);
const displayTax =  (`Tax - ${tax}`);
const displayTotal =  (`Total Cost - ${total}`);

console.log (displaySub);
console.log(displayTax);
console.log(displayTotal);


};

logReceipt();



// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97