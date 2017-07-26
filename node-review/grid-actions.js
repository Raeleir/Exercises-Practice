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
    isNaN(char) ? grid[y - 1].splice(x - 1, 1, char.toUpperCase()) : grid[y - 1].splice(x - 1, 1, char)
    console.log(`Here is your updated grid! \n`);
    print(grid);
}

module.exports = {
    print,
    genGrid,
    update
}