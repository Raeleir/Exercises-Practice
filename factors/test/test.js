let chai = require("chai");
let assert = chai.assert;
let facts = require("../script.js");

describe("Factors counting function", () => {
    it("Should return a positive integer totalling the number of factors in the given number", () => {
        assert.equal(facts(10), 4);
        assert.equal(facts(24), 8);
    })
    it("Should return 'Prime' if only two factors exists in the given number", () => {
        assert.equal(facts(5), "Prime");
    })
})