let chai = require("chai");
let assert = chai.assert;
let func = require("../index.js");

describe("Time translator", () => {
    it("should return a string of numbers as a string of words describing the time", () => {
        assert.equal(func("00:00"), "It's twelve AM");
        assert.equal(func("01:30"), "It's one thirty AM");
        assert.equal(func("12:05"), "It's twelve o five PM");
        assert.equal(func("14:01"), "It's two o one PM");
        assert.equal(func("20:29"), "It's eight twenty-nine PM");
        assert.equal(func("21:00"), "It's nine PM");
    });
    it("should return an error if input is not of '00:00' format, or not of type string", () => {
        assert.throws(() => {func("0000")}, "Invalid Input");
        assert.throws(() => {func(20900)}, "Invalid Input");
    });
});