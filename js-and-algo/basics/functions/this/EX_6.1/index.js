const coffeeShop = {
  beans: 40,
  money: 3000,
  drinkRequirements: {
    latte: {beanRequirement: 10, price: 5},
    americano: {beanRequirement: 5, price: 3},
    doubleShot: {beanRequirement: 15, price: 7},
    frenchPress: {beanRequirement: 12, price: 6},
  },
  buyDrink: function(drinkType) {
    const drinkMade = this.makeDrink(drinkType);
    if (drinkMade) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  },
  buyBeans: function(numBeans){
    const beansCost = 5;
    const leftMoney = this.money - numBeans * beansCost;
    if (leftMoney >= 0) {
      this.beans += numBeans;
      this.money = leftMoney;
    } else {
      console.log("Sorry, you don't have enough money to buy that many beans");
    }
  },
  makeDrink: function (drinkType) {
    let drinkMade = false;
    for (const drink in this.drinkRequirements) {
      if (drink === drinkType) {
        const leftBeans = this.beans - this.drinkRequirements[drink].beanRequirement;
        if (leftBeans >= 0) {
          this.beans -= this.drinkRequirements[drink].beanRequirement;
          drinkMade = true;
        } else {
          console.log("Sorry, we're all out of beans");
        }
        return drinkMade;
      }
    }
    console.log("Sorry, we don't make " + drinkType);
    return drinkMade;
  },
};

coffeeShop.buyBeans(10);
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");
coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered");
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress");

