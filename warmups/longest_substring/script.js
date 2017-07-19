let noRepeat = (str) => {
  for(y=0;y<str.length;y++){
    for(x=y + 1;x<str.length;x++){
      if(str[y] === str[x]){
        return false;
      }
    }
  }
  return true;
}

let longestSubstring = (str) => {
  let result = "";
  for(i=0;i<=str.length;i++){
    for(j=i + 1;j<=str.length;j++){
      let subStr = str.substring(i, j);
      if(str.substring(i, j).length > result.length && noRepeat(subStr)){
        result = str.substring(i, j);
      }
    }
  }
  return result;
}