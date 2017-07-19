let duplicates = (str) => {
    let arr = str.split(" ");
    let dupList = [];
    let len = arr.length;
    for (i = 0; i < len; i++) {
        let temp = arr.splice(arr[i], 1);
        if (arr.includes(temp[0]) && !dupList.includes(temp[0])) {
            dupList.push(temp[0]);
        }
    }
    return dupList;
}



module.exports = duplicates;
