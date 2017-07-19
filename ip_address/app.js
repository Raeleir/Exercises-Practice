let isValidIP = (str) => {
    let arr = str.split(".");
    let isOfLength = str.length >= 7 && str.length <= 15 && arr.length === 4;
    let areNumsInRange = arr.reduce((value, item) => {
            return Number(item) < 0 || Number(item) > 255 || isNaN(item) ? false : value;
        }, true);
    if(isOfLength && areNumsInRange) return true;
    throw "not a valid IP address";
};


module.exports = isValidIP;