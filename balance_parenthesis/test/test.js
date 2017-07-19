let chai = require("chai");
let assert = chai.assert;
let func = require("../app.js");


describe("Parenthesis check", ()=> {
    it("should return true if all parenthesis have an opposite partner", ()=> {
        assert.equal(func("()()()()()()"), true);
        assert.equal(func("(((())))"), true);
        assert.equal(func("((()))()()"), true);
    })
    it("should return false if a closing parenthesis has no opening partner", () => {
        assert.equal(func("())()(()"), false);
        assert.equal(func(")()()()("), false);
    })
    it("should return false if an opening parenthesis has no closing partner", () => {
        assert.equal(func("((())"), false);
        assert.equal(func("()())("), false);
    })
})