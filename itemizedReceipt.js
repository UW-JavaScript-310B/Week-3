// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price



// Check
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
purchases = items.forEach(item => console.log(`${item.descr} - $${item.price}`))
totalCost = items[0].price + items[1].price + items[2].price;
console.log(`Total - ${totalCost}`);
};

logReceipt();


//use for loop to get total cost
// function totalCost2() {
//   let sum = 0;
//   let price = items.price;

// for (let i = 0; i < items.length; i++) {
//     sum += items[i];
// }
// console.log(sum);
// }

// totalCost2()


//get total like you got it for adopt a dog project
// function sumCost(price) {
//   let totalCost = 0;
// totalCost = parseFloat((items.price + totalCost).toFixed(2)); 
// console.log('Total Purchases - $' + totalCost.toFixed(2));
// }

// const sumNumbers = function () {
//   let sum = 0;
//   const args = Array.from(items);
//   args.forEach(function (price) {
//   sum += price;
//   });
//   console.log(sum);
//   };

// let sum = items.reduce(function(previousValue, currentValue) {
//   //let newprice  = previousValue.price + currentValue.price;
//   return {
//     price: previousValue.price + currentValue.price
//   }
// }, 0);
// console.log(sum);

//**Use reduce to determine total price
// let val = items.reduce(function (previousValue, currentValue) {
//   return {
//     price: previousValue.price + currentValue.price

//   }
 
// });
// console.log(val);
// expected output: 15

// console.log(`Total Price - ${val}`);

// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97