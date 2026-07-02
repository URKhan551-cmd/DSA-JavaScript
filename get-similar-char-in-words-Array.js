function setChars(arr){
    if(!arr || arr.length === 0) return;

    let sortArr = arr.sort();
    let firstWord = sortArr[0];
    let lastWord = sortArr[sortArr.length - 1];

    let result = "";
    for(let i = 0; i < firstWord.length; i++){
        if(firstWord[i] === lastWord[i]){
            result += firstWord[i];
        } else {
            break;
        }
    }
   return result;
}

console.log(setChars(["khani", "khan", "khann"]))
// this will give us "khan" output that we want from our prog.

function foundSameChars(arr){
    if(!arr || arr.length === 0) return;

    let firstWord = arr[0];
    for(let i = 1; i < arr.length; i++){
      while(arr[i].indexOf(firstWord) !== 0){
       firstWord = firstWord.substring(0, firstWord.length - 1);
       if(firstWord === "") return "not found same char";

      }
    }
    return firstWord
}

console.log(foundSameChars(["silly", "khann", "jelly"]));  // not found same char 
console.log(foundSameChars(["wind", "windtalker", "windy"])); // wind