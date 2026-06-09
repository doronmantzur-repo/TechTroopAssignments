function validate(arr) {
  let trueCount = 0;
  let falseCount = 0;
  if (arr.length === 0) {
    return { error: "Need at least one boolean" };
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "boolean") {
      if (arr[i]) {
        trueCount++;
      } else {
        falseCount++;
      }
    }
  }
    if (trueCount === 0 && falseCount === 0) {
      return { error: "Need at least one boolean" };
    }
    return trueCount > falseCount;
}

module.exports = validate;