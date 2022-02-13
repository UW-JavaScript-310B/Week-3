// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price



// Check
let logReceipt =[
  { descr: 'Burrito', 
    price: 5.99,
    type: 'Food'
  },
  { descr: 'Chips & Salsa', 
    price: 2.99,
    type: 'Food'
  },
  { descr: 'Sprite', 
    price: 1.99,
    type:'Drink',
    oz: 12,
    sugar: true
  }
]
  ;
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97

// source: https://dor.wa.gov/get-form-or-publication/publications-subject/tax-topics/seattle-s-sweetened-beverage-tax
const seattleSugarTaxRate = .0175

//source: http://www.salestaxstates.com/sales-tax-calculator-washington-seattle-98101
const washingtonSalesTax = .065
const seattleSaleTax = .0375
const wholeSalesTax = washingtonSalesTax + seattleSaleTax

function Receipt(){
  let sugarTaxTotal = 0;
  let totalBeforeTax = 0;
  let totalSalesTax = 0;
  totalWithTax = 0;
  console.log(`
        THANK YOU FOR SHOPPING AT CARLITO's 
  -----------------------------------------------------------------
  ITEM - PRICE`)
  for(let i =0; i<logReceipt.length; i++){
    if(logReceipt[i].type == 'Drink'){
      if(logReceipt[i].sugar == true){
        sugarTaxTotal += logReceipt[i].oz * seattleSugarTaxRate
      }
    }
    totalBeforeTax +=logReceipt[i].price
    totalSalesTax +=logReceipt[i].price*wholeSalesTax
    console.log(`
  ${logReceipt[i].descr} - $${logReceipt[i].price}`)
  }
  totalWithTax += totalBeforeTax + totalSalesTax + sugarTaxTotal
  console.log(`
  -----------------------------------------------------------------
  Amount:                      $${totalBeforeTax}
  Sales Tax:                   $${totalSalesTax.toFixed(2)}
  Seattle's Sugar Tax:         $${sugarTaxTotal.toFixed(2)}
  -----------------------------------------------------------------
  Total:                       $${totalWithTax.toFixed(2)} 
  -----------------------------------------------------------------
                  THANK YOU!
  `)
}
Receipt(logReceipt)