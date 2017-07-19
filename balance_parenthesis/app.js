let parenCheck = (str) => {
    arr = [];
    for(i=0;i<str.length;i++){
        if(str[i] === "("){
            arr.push(str[i]);
        }
        if(str[i] === ")"){
            if(arr.length === 0) return false;
            arr.pop();
        }
    }
    return arr.length === 0;
}

module.exports = parenCheck;


//same both ways --> true
//( count !== ) count --> false
