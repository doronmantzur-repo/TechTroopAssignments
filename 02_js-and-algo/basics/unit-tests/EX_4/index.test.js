const validate = require("./index");

describe("validate", () => {

  test("returns error when array is empty", () => {
    expect(validate([])).toEqual({ error: "Need at least one boolean" });
  });

  test("returns error when array contains no booleans", () => {
    expect(validate(["a", 1, null])).toEqual({ error: "Need at least one boolean" });
  });

  test("returns true when more trues than falses", () => {
    expect(validate([true, false, true])).toBe(true);
  });

  test("returns false when more falses than trues", () => {
    expect(validate([false, true, false])).toBe(false);
  });

  test("returns false when trues and falses are equal", () => {
    expect(validate([true, false])).toBe(false);
  });

  test("returns true when all values are true", () => {
    expect(validate([true, true, true])).toBe(true);
  });

  test("returns false when all values are false", () => {
    expect(validate([false, false, false])).toBe(false);
  });

});
