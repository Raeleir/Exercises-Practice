let cal = require("./script.js");
let add = cal.add;
let sub = cal.sub;
let mul = cal.mul;
let div = cal.div;
let mod = cal.mod;

let readlineSync = require("readline-sync");

let operator = readlineSync.question("What calculator operation would you like to use? \n");
let num1 = Number(readlineSync.question("What is your first number? \n"));
let num2 = Number(readlineSync.question("What is your second number? \n"));

if(operator.includes("add")){
    console.log(`solution: ${add(num1, num2)}`);
} else if(operator.includes("sub")) {
    console.log(`solution: ${sub(num1, num2)}`);
} else if(operator.includes("mul")) {
    console.log(`solution: ${mul(num1, num2)}`);
} else if(operator.includes("div")) {
    console.log(`solution: ${div(num1, num2)}`);
} else if(operator.includes("mod")) {
    console.log(`solution: ${mod(num1, num2)}`);
} else {
    console.log("you're dumb");
}