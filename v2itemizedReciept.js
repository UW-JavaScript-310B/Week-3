// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

const logReceipt=(...object)=>{
    let amount =0;
    let title =0;
    object.forEach(object=>{
        if(title<1){
            console.log(`
        Thank you For shopping`)
        }
        console.log(
            `
            ${object.descr} - ${object.price}`
            )
        amount+=object.price
        title+=1
    })
    let tax =(amount*.1);
    let total = (tax + amount)
  console.log(`
            Amount: ${amount}
            Tax: ${tax.toFixed(2)}
            Total: ${total.toFixed(2)}`
        
        )
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