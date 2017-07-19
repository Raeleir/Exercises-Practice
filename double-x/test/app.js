let chai = require("chai");
let assert = chai.assert;
let doubleX = require("../app.js");

describe("Function checking specific letter sequence in string", () => {
    it("Should return true if string contains x and the first x is xx", () => {
        assert.equal(doubleX("xx"), true);
        assert.equal(doubleX("double xx"), true);
        assert.equal(doubleX("fixxings and x blah"), true);
    })
    it("Should return false if the string has no x, or the first x is not xx", () => {
        assert.equal(doubleX("kxhxixyxixlxlx"), false);
        assert.equal(doubleX("dude it's x and xx bruh"), false);
        assert.equal(doubleX("kxhxxxx"), false);
    })
})