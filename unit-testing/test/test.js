//import code
var calc = require("../app.js");
var add = calc.add;
var sub = calc.sub;
var mult = calc.mult;
var div = calc.div;
var rem = calc.rem;

var chai = require("chai");
var assert = chai.assert;

describe("A calculator", function(){
    it("should return the sum of two numbers", function(){
        assert.equal(add(2,2), 4);
        assert.equal(add(2,-2), 0);
    });
    it("should return the difference of two numbers", function(){
        assert.equal(sub(2, 2), 0);
    })
    it("should return the product of two numbers", function(){
        assert.equal(mult(2, 2), 4);
    })
    it("should return the quotient of two numbers", function(){
        assert.equal(div(2, 2), 1);
    })
    it("should return the division remainder of two numbers", function(){
        assert.equal(rem(2, 2), 0);
    })
});