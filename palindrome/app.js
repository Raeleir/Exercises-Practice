var palStr = function(str){
    var str = str.toLowerCase();
    var arr = Array.from(str);
    var letCheck = function(char){
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet.includes(char);
    }    
    var arr = arr.filter(letCheck);
    var strRev = arr.slice().reverse().join("");
    var str = arr.join("");
    return str === strRev;
}

module.exports = palStr;