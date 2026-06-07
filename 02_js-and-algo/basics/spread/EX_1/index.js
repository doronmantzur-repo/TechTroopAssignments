let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr, vegetableArr[0]]
vegetableArr = [...vegetableArr.slice(1)]
console.log(meatArr)
console.log(vegetableArr)