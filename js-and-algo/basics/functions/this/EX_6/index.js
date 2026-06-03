const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12,
  },

  makeDrink: function (drinkType) {
    for (const drink in this.drinkRequirements) {
      if (drink === drinkType) {
        const leftBeans = this.beans - this.drinkRequirements[drink];
        if (leftBeans >= 0) {
          this.beans -= this.drinkRequirements[drink];
        } else {
          console.log("Sorry, we're all out of beans");
        }
        return;
      }
    }
    console.log("Sorry, we don't make " + drinkType);
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"
