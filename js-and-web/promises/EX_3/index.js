// Simulated inventory database
const inventory = {
  laptop: { price: 999, stock: 5 },
  mouse: { price: 25, stock: 10 },
  keyboard: { price: 75, stock: 0 }, // Out of stock
  monitor: { price: 299, stock: 3 },
};

function checkInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 500ms (simulating database check)
  // 2. Checks if all items are in stock
  // 3. Resolves with items if all available
  // 4. Rejects with specific item that's out of stock

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = [];
      for (item of items) {
        if (!inventory[item] || inventory[item].stock === 0) {
          reject(new Error(`${item} is out of stock`));
        } else {
          result.push(item);
        }
      }
      resolve(result);
    }, 500);
  });
}

function calculateTotal(items) {
  // TODO: Return a promise that:
  // 1. Waits 200ms
  // 2. Calculates total price including 8% tax
  // 3. Resolves with { subtotal, tax, total }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let result = [];
      let calc = { subtotal: 0, tax: 0, total: 0 };
      for (item of items) {
        calc.subtotal += inventory[item].price;
      }
      calc.tax = calc.subtotal * 0.08;
      calc.total = calc.subtotal + calc.tax;

      resolve(calc);
    }, 200);
  });
}

function processPayment(amount) {
  // TODO: Return a promise that:
  // 1. Waits 1500ms (simulating payment processing)
  // 2. 90% success rate
  // 3. Resolves with { transactionId, amount, status: 'success' }
  // 4. Rejects with payment failure error
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.random();
      if (random < 0.1) {
        reject(new Error("Payment failed"));
      } else {
        transactioId = random * 3000;
        result = { id: transactioId, sum: amount, status: "success" };
        resolve(result);
      }
    }, 1500);
  });
}

function updateInventory(items) {
  // TODO: Return a promise that:
  // 1. Waits 300ms
  // 2. Reduces stock for each item
  // 3. Resolves with updated inventory status
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      for (item of items) {
        inventory[item].stock -= 1;
      }
      resolve(inventory);
    }, 300);
  });
}

// TODO: Create a complete checkout function that:
// 1. Takes an array of item names
// 2. Chains all the above functions
// 3. Returns a promise with the final order result
// 4. Handles all possible errors appropriately

function checkout(itemNames) {
  // TODO: Implement the complete checkout flow
  let payment;
  let payemntStatus;
  let updatedInventory;
  return checkInventory(itemNames)
    .then((items) => {
      return calculateTotal(items);
      // return totalPayment;
    })
    .then((totalPayment) => {
      payment = totalPayment;
      return processPayment(totalPayment);
    })
    .then((payment) => {
      payemntStatus = payment;
      return updateInventory(itemNames);
      
    })
    .finally(() => {
      orderResult = `Ordered  ${itemNames}
       Oredr Subtotal: ${payment.subtotal} Tax: ${payment.tax} Total: Tax: ${payment.total}
       Paid ${payemntStatus.sum} Transaction ID: ${payemntStatus.id}`;
       console.log(orderResult)  ;
    });
}

// Test cases:
checkout(["laptop", "mouse"]) // Should succeed
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["laptop", "keyboard"]) // Should fail - keyboard out of stock
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));

checkout(["monitor", "mouse", "laptop"]) // Might fail at payment (10% chance)
  .then((result) => console.log("Order success:", result))
  .catch((error) => console.log("Order failed:", error.message));
