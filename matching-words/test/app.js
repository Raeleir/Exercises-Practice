var chai = require("chai");
var assert = chai.assert;
var duplicates = require("../app.js");

describe("duplicate word finder", () => {
    it("Should return a list of words that have repeats in given string", () => {
        assert.deepEqual(duplicates("this this word stuff"), ["this"]);
        assert.deepEqual(duplicates("Banh mi woke skateboard ipsum ipsum lorem, kombucha scenester banjo. Franzen mlkshk consequat, PBR&B irony listicle irony pop-up sriracha salvia. Shabby chic eu iceland next level iceland iceland drinking vinegar fanny pack woke minim chicharrones migas."), ["woke", "ipsum", "irony", "iceland"]);
        assert.deepEqual(duplicates("this is a string is this is a string"), ["this", "is", "a", "string"]);
    })
    it("Should return false if no repeats are found", () => {
        assert.deepEqual(duplicates("this is a string"), []);
    })
})