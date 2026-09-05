Dutch National Flag · in-place · three pointers
Given an array of objects colored 0, 1, or 2, sort them in place so equal colors are grouped in that order, ideally in a single pass.

Our algorithm correctly implements the counting sort approach to 
sort the colors in a single pass through the array. It efficiently counts the 
occurrences of each color and then reconstructs the sorted array in place.

function sortColor(arr){
let n = arr.length;
 
if(n === 0 ) return arr;
let count = [0, 0, 0];
for(let i=0; i<n; i++){
     count[arr[i]]++;
  }

let index = 0;
for(let color=0; color<=2; color++){
 for(let j=0; j<count[color]; j++){
  arr[index] = color;
  index++;
}
}


return arr;

}
