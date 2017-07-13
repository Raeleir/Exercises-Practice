let chai = require("chai");
let assert = chai.assert;
let func = require("../app.js");

describe("recursive function", () => {
    it("should return a concatenated string of the input string count number of times", () => {
        assert.equal(func("a", 4), "aaaa");
        assert.equal(func("monkey", 2), "monkeymonkey");
        assert.equal(func("I am", 3), "I amI amI am");
    })
    it("should return the given string if count is 1", () => {
        assert.equal(func("stuff n' things", 1), "stuff n' things");
    })
})