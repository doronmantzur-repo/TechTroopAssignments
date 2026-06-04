
const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true, 
  fridge: {
    price: 500,
    works: false, 
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};

const radish = kitchen.fridge.items.find(item => item.name === "radish");

const daysExpired = date - radish.expiryDate;

const repairCost = kitchen.fridge.price / 2;

let message = `${kitchen.owner}'s ${radish.name} expired ${daysExpired} day ago.\n`;

if (kitchen.fridge.works) {
  message += "Weird, considering her fridge works.\n";
} else {
  message += "Probably because her fridge doesn't work.\n";
}

if (kitchen.hasOven) {
  message += "Luckily, she has an oven to cook the radish in.\n";
} else {
  message += "Too bad she doesn't have an oven to cook the radish in.\n";
}

if (!kitchen.fridge.works) {
  message += `And she'll have to pay ${repairCost} to fix the fridge.`;
}

console.log(message);