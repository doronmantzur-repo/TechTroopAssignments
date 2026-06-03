export const Bank = {
  money: 500,
  deposit: function (cash) {
    this.money += cash;
  },
  showBalance: function () {
    console.log(this.money);
  },
};
