const {removeAtLeastOne} = require("./index");
describe("Should remove at least one element from the array", () => {
    test("should remove at least one element from the array", () => {
        const arr = [1, 2, 3, 4, 5];
        const arr1 = [];
        const originalLength = arr.length;
        removeAtLeastOne(arr);
        expect(arr.length).toBe(originalLength - 1);
        expect(arr).not.toContain(1);
        expect(arr1).toBe(arr1); 
    });
});