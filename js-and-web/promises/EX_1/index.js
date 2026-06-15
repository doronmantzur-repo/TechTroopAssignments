function checkLuckyNumber(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 7 === 0 && num !== 0) {
        resolve("Lucky");
      } else if (num % 2 === 0 && num !== 0) {
        resolve("Not Lucky");
      } else if (num < 1) {
        reject("Invalid Number");
      }
    }, 800);
  });
}

checkLuckyNumber(0)
.then((result) => {
  console.log(result);
})
.catch((result) => {
    console.log(result);
});