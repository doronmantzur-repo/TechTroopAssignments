const {isEven} = require("./index");
describe("Test isEven method", () => {
    test("should return true if n is even, false otherwise", () => {
        expect(isEven(2)).toBeTruthy();
        expect(isEven(3)).toBeFalsy();
        expect(isEven(-1)).toBeFalsy();
        expect(isEven()).toBeFalsy();
        expect(isEven("k")).toBeFalsy();
    });
});