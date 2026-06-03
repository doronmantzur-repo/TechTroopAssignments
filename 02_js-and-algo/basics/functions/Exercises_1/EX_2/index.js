function isEven(number) {
  if (number % 2 === 0) {
    return true;
  }
  return false;
}

function isArrayEven(array) {
  for (const number of array) {
    if (!isEven(number))
    {
      console.log(number);
    }
  }
}

