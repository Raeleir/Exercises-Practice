let chai = require("chai");
let assert = chai.assert;
let sleepIn = require("../app.js");

describe("sleeping in calculator", () => {
    it("should return true if it is a vacation", ()=>{
        assert.equal(sleepIn("Monday", true), true);
        assert.equal(sleepIn("Saturday", true), true);
    })
    it("should return true if it is not a weekday", ()=>{
        assert.equal(sleepIn("Saturday", true), true);
        assert.equal(sleepIn("Sunday", false), true);
    })
    it("should return false if it is a weekday and it is not a vacation", ()=>{
        assert.equal(sleepIn("Wednesday", false), false);
    })
    it("should return error if it is not a valid weekday", ()=>{
        assert.throws(() => {sleepIn("blubesday", false)}, "not a calendar day");
    })
})