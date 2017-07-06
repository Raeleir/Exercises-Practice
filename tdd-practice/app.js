var digitMatch = function(a, b){
    var aLast = a % (Math.floor(a / 10) * 10);
    var bLast = b % (Math.floor(b / 10) * 10);
    if(aLast === bLast){
        return true;
    } else {
        return false;
    }
};

var stringStrip = function(str){
    var newStr = str.substring(1, str.length - 1);
    return newStr;
}

console.log(digitMatch(27, 57));

var funcs = {
    digitMatch: digitMatch,
    stringStrip: stringStrip
};

module.exports = funcs;