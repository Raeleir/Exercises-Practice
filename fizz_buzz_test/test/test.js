let chai = require("chai");
let assert = chai.assert;
let func = require("../index.js");

describe("fizzbuzz", () =>{
    it("Should return array in which numbers divisible by 3, 5, or both are entered as 'fizz', 'buzz' and 'fizzbuzz' respectively", () => {
        assert.deepEqual(func(), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"]);
    });
})