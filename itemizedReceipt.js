// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price
const logReceipt = (...menuItems) => {
  // define total price var
  let totalPrice = 0;
  // scan through menuItems
  menuItems.forEach(menuItem => {
    // Output to console log
    console.log(`${menuItem.descr} - $${menuItem.price}`);
    // Calculate the total
    totalPrice += menuItem.price;

    // Display the output in HTML page
    // Create a <p> element and insert an HTML content
    const itemElement = document.createElement('p');
    itemElement.innerHTML = `${menuItem.descr} - <span class='approval'>$${menuItem.price}</span>`

    const itemList = document.getElementById("itemList");
    itemList.appendChild(itemElement);
  });
  // Display total price in console log
  console.log(`Total - $${totalPrice}`);

  // Display total price in HTML page
  document.getElementById('totalPrice').innerHTML = `Total - <span class='title'>$${totalPrice}</span>`;
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
