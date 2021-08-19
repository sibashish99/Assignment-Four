/*
2. Write a function filterLongWords() that takes an array of words and a number i and returns the array of words that are longer than i.
**/

var arr= ['uyhduigd','gdqhii','bh'];
console.log(filterLongWords(arr,3));

function filterLongWords(arr, int){
    var length= arr.length;
    var newArr = [];
    for (i = 0; i < length; i++) {
      if (arr[i].length > int) {
        newArr[newArr.length] = arr[i];
      }
    }
    return newArr;
  }