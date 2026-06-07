
let balance = 0;
export const myBank = function(){
  return {
    checkBalance: () => {
      return balance;
    },
    deposit: (a) => {
      balance += a;
      return balance;
    },
    withdraw: (a) => {
      balance -= a;
      return balance;
    }
  };
};
