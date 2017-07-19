//ADD
function add(param1, param2) {
    return param1 + param2;
}

//centuryFromYear
function centuryFromYear(year) {
    if(year % 100 === 0){
        return year / 100;
    } else {
        return Math.floor(year / 100 + 1);
    }
}

//checkPalindrome
function checkPalindrome(inputString) {
    var rev = Array.from(inputString).slice().reverse().join("");
    return inputString === rev;
}

//adjacentElementsProduct
function adjacentElementsProduct(inputArray) {
    let store = [];
    for(i=0;i<inputArray.length - 1;i++){
        store.push(inputArray[i] * inputArray[i+1]);
    }
    return Math.max.apply(Math, store);
}

//shapeArea
function shapeArea(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2);
}

//make array consecutive
function makeArrayConsecutive2(statues) {
    let missing = [];
    let max = Math.max.apply(null, statues);
    let min = Math.min.apply(null, statues);
    for(i=min;i<max;i++){
        if(statues.includes(i) === false){
            missing.push(i);
        }
    }
    return missing.length;
}

//almostIncreasingSequence
function almostIncreasingSequence(sequence) {
  let strikes = 0;
  let currHigh = -100000000000;
  let secHigh = -100000000000;
  for(i=0;i<sequence.length;i++){
    if(sequence[i] > currHigh){
      secHigh = currHigh;
      currHigh = sequence[i];
    } else if (sequence[i] > secHigh) {
      currHigh = sequence[i];
      strikes++;
    } else {
      strikes++;
    }
  }
  return strikes < 2;
}

//matrixElementsSum
function matrixElementsSum(matrix) {
  let total = 0;
  let bad = [];
  for(i=0;i<matrix.length;i++){
    for(x=0;x<matrix[i].length;x++){
      if(matrix[i][x] === 0) bad.push(x);
      if(matrix[i][x] > 0 && !bad.includes(x)) total += matrix[i][x];
    }
  }
  return total;
}

//allLongestStrings
function allLongestStrings(arr) {
    let result = [];
    let high = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i].length > high) high = arr[i].length;
    }
    for(i=0;i<arr.length;i++){
        if(arr[i].length === high) result.push(arr[i]);
    }
    return result;
}

//commonCharacterCount
function commonCharacterCount(s1, s2) {
    let total = 0;
    let str1 = Array.from(s1);
    let str2 = Array.from(s2);
    for(i=0;i<str1.length;i++){
        for(o=0;o<str2.length;o++){
            if(str1[i] === str2[o]){
                total++;
                str2.splice(o, 1);
                break;
            }
        }
    }
    return total;
}

//isLucky
function isLucky(n) {
    var n = n.toString();
    let nLen = n.length;
    let half1 = n.substring(0, nLen/2);
    let half2 = n.substring(nLen/2, nLen);
    let sum1 = 0, sum2 = 0;
    for(i=0;i<nLen/2;i++){
        sum1 += Number(half1[i]);
        sum2 += Number(half2[i]);
    }
    return sum1 === sum2;
}

