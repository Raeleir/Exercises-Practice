let fizzBuzz = () => {
    let arr = [];
    for(i=1;i<=20;i++){
        if(i % 3 === 0 && i % 5 === 0){
            arr.push("FizzBuzz");
        } else if(i % 3 === 0){
            arr.push("Fizz");
        } else if(i % 5 === 0){
            arr.push("Buzz");
        } else {
            arr.push(i);
        }
    }
    return arr;
}

module.exports = fizzBuzz;