let rs = require("readline-sync");
let funcs = require("./grid-actions.js");

let size = Number(rs.question("What size grid would you like? \n"));
funcs.genGrid(size);

let isActive = true;
while(isActive) {
    let char = rs.question("What character would you like to enter into the grid? \n")
    
    let x = Number(rs.question(`Which column would you like your "${char}" to go in? \n`));
    let y = Number(rs.question(`Which row would you like your "${char}" to go in? \n`));
    
    funcs.update(char, x, y);
    
    !rs.keyInYN("Would you like to add another character? \n") ? isActive = false: isActive = true;
}