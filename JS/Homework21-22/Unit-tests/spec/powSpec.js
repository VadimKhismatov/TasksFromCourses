var app = require("../js/script.js");

describe("Pow method", function () {
    it("contains spec with an expectation", function () {
        //prepare
        var result;
        //act
        result = app.pow(2, 2);
        //assert

        expect(result).toBe(4);
    });
    it("contains spec with an expectation", function () {
        //prepare
        var result;
        //act
        result = app.pow(2, 3);
        //assert

        expect(result).toBe(8);
    });
    it("contains spec with an expectation", function () {
        //prepare
        var result;
        //act
        result = app.pow(8, 8);
        //assert

        expect(result).toBe(16777216);
    });
});