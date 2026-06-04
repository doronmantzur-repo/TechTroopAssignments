function calcArmstrong(number) {
  const digits = number.toString().split('');
  const power = digits.length;
  let sum = 0;
  for (const digit of digits)
  {
    sum += Math.pow(Number(digit), power);
  }
  return sum === number;
}

function printArmstrongNumbers() {
  for (i=100; i<1000; i++) {
    if (calcArmstrong(i) === true)
    {
      console.log(i);
    }
  }
}


printArmstrongNumbers();