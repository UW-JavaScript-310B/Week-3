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
    descr: 'Sprite',
    price: 1.99
  }

]

// purchases = items.forEach(item => console.log(`${item.descr} - $${item.price}`))
// totalCost = items[0].price + items[1].price + items[2].price;
// console.log(`Total - ${totalCost}`);

function logReceipt() {
  //set total cost to 0
  let totalCost = 0;
  let totalCost2 = 0;
  //create list of items purchased and their price
  purchases = items.forEach(item => console.log(`${item.descr} - $${item.price}`))

  //create total line
  //attempt 1 use for each produces an amount for each row want to limit to last sum
  totalCost = items.forEach(item => console.log('Total Cost - ' + (totalCost += item.price)));
  
  //attempt 2  tried to eliminate for each to get final sum shows up as NaN
  totalCost2 = totalCost += items.price;
 
  console.log(totalCost2);
};

  logReceipt();



  // should log something like:
  // Burrito - $5.99
  // Chips & Salsa - $2.99
  // Sprite - $1.99
  // Total - $10.97