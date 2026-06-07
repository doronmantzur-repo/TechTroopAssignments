
export const myBank = function(){
let balance = 0;
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
