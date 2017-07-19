var chai = require("chai");
var assert = chai.assert;
var palStr = require("../app.js");


describe("palStr", function(){
    it("should return true if plain word is palindrome", function(){
        assert.equal(palStr("mom"), true);
    })
    it("should return false if plain word is not palindrome", function(){
        assert.equal(palStr("fish"), false);
    })
    it("should return true if palindrome includes caps, punctuation, etc", function(){
        assert.equal(palStr("I madam, I made radio! So I dared! Am I mad?? Am I?!"), true);
    })
})