let chai = require("chai");
let assert = chai.assert;

let addContent = require("../script.js").addContent;
let lookUp = require("../script.js").lookUp;


describe("A dictionary to add and find words", () => {
    it("Should store an absent word when added", () => {
        addContent("blueberry", "a blue berry");
        assert.equal(lookUp("blueberry"), "a blue berry");
        addContent("pickle", "a pickled cuccumber");
        assert.equal(lookUp("pickle"), "a pickled cuccumber");
    })
    it("Should return null when finding absent words", () => {
        assert.equal(lookUp("fish"), null);
        assert.equal(lookUp("gobbledigoop"), null);
    })
    it("Should return null when adding a duplicate word", () => {
        addContent("brick", "a red rock");
        assert.equal(addContent("brick", "a red rock"), null);
        assert.equal(addContent("bricks", "a red rock"), null);
    })
})