function checkExists(array, value) {
  for (const item of array) {
    if (item === value) {
      return true;
    }
  }
  return false;
}
