const {simplify} = require("./index");
describe("Should simplify the array", () => {
    test("Should simplify the array", () => {
        let string = "hjhkjhggigwqu!#.,'hkjh";
        let simplified = simplify(string);
        expect(simplified).toBe("hjhkjhggigwquhkjh");
        expect(simplify("")).toBe("");
        expect(simplify("!@#$%^&*()")).toBe("@$%^&*()");
    });
}); 