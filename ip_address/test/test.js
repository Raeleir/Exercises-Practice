let chai = require("chai");
let assert = chai.assert;
let func = require("../app.js");

describe("IP checker", () => {
    it("should return true if it is a valid IP address", ()=>{
        assert.equal(func("0.0.0.0"), true);
        assert.equal(func("255.255.255.255"), true);
        assert.equal(func("55.2.25.255"), true);
    })
    it("should return error if it is not a valid IP address", ()=>{
//        3 periods
        assert.throws(() => {func("0.0.0.0.0")}, "not a valid IP address");
        assert.throws(() => {func("3422.0.234")}, "not a valid IP address");
//        0 - 255 numbers inclusive
        assert.throws(() => {func("256.-1.840.300")}, "not a valid IP address");
//        7-15 characters inclusive
        assert.throws(() => {func("1.3.5.")}, "not a valid IP address");
        assert.throws(() => {func("255.255.255.0255")}, "not a valid IP address");
//        only integer & '.' characters
        assert.throws(() => {func("fish")}, "not a valid IP address");
        assert.throws(() => {func("not.an.ip.add")}, "not a valid IP address");
    })
})