let chai = require("chai");
let assert = chai.assert;
let func = require("../app.js");

describe("midChars", () => {
    it("should throw an error if the string is of odd length", () => {
        assert.throws(() => {func("odd")}, "string is of odd length");
        assert.throws(() => {func("one two three")}, "string is of odd length");
    })
    it("should return the middle two characters of the given string", () => {
        assert.equal(func("odds"), "dd");
        assert.equal(func("one two three!"), "o ");
    })
    it("should throw an error if string is empty", () => {
        assert.throws(() => {func("")}, "string of length 0 is invalid");
    })
})