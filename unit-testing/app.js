var add = function(a, b){
    return a + b;
}

var sub = function(a, b){
    return a - b;
}

var mult = function(a, b){
    return a * b;
}

var div = function(a, b){
    return a / b;
}

var rem = function(a, b){
    return a % b;
}
    
var calculator = {
    add: add,
    sub: sub,
    mult: mult,
    div: div,
    rem: rem
};

module.exports = calculator;