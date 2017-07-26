let rs = require("readline-sync");

let grid = [];

let print = (arr) => {
    for(i=0;i<arr.length;i++){
      console.log(...arr[i]);
    }
    console.log("\n");
}

let genGrid = (num) =>{
    for(i=0;i<num;i++){
        grid.push([]);
        for(j=0;j<num;j++){
            grid[i].push("0");
        }
    }
    console.log(`Here is your ${num} x ${num} grid: \n`);
    print(grid);
}

let update = (char, x, y) => {
    grid[y - 1].splice(x - 1, 1, char.toUpperCase());
    console.log(`Here is your updated grid! \n`);
    print(grid);
}


let size = Number(rs.question("What size grid would you like? \n"));
genGrid(size);

let isActive = true;
while(isActive) {
    let char = rs.question("What character would you like to enter into the grid? \n");
    let x = Number(rs.question(`Which column would you like your "${char}" to go in? \n`));
    let y = Number(rs.question(`Which row would you like your "${char}" to go in? \n`));
    update(char, x, y);
    let cont = rs.keyInYN("Would you like to add another character? \n");
    !cont ? isActive = false: isActive = true;
}