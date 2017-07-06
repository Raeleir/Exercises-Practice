var chai = require("chai");
var assert = chai.assert;
var app = require("../app.js");
var digitMatch = app.digitMatch;
var stringStrip = app.stringStrip;

describe("Last Digit Match", function(){
    it("should return true if last digits are equal", function(){
        //assert statements
        assert.equal(digitMatch(27, 57), true);
        assert.equal(digitMatch(257, 537), true);
    });
    it("should return false if last digits are !=", function(){
        assert.equal(digitMatch(18, 23), false);
        assert.equal(digitMatch(108, 223), false);
    });
});

describe("String strip", function(){
    it("should return string stripped of first and last character", function(){
        //assert statements
        assert.equal(stringStrip("fish"), "is");
        assert.equal(stringStrip("wiggle"), "iggl");
    });
});