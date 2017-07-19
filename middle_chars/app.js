module.exports = (str) => {
    let mid = str.length / 2;
    if(str.length === 0) throw "string of length 0 is invalid";
    if(str.length % 2 !== 0) throw "string is of odd length";
    return str[mid - 1] + str[mid];
}