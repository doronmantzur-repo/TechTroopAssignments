let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6; // 0 = Sunday, 6 = Saturday
let discount;


if (customerType === "vip") {
  discount = 0.20;

} else if (customerType === "premium") {

  let isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);


  discount = isWeekend ? 0.15 : 0.10;


} else if (customerType === "regular") {
  discount =
    purchaseAmount > 100 ? 0.10 :
    purchaseAmount > 50  ? 0.05 :
    0;
}

console.log("Discount:", discount * 100 + "%");
console.log("Final price:", purchaseAmount * (1 - discount));
