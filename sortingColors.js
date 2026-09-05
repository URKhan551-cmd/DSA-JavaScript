Dutch National Flag · in-place · three pointers
Given an array of objects colored 0, 1, or 2, sort them in place so equal colors are grouped in that order, ideally in a single pass.

Our algorithm correctly implements the counting sort approach to 
sort the colors in a single pass through the array. It efficiently counts the 
occurrences of each color and then reconstructs the sorted array in place.


 We use three pointers: low, mid, and high to divide the array into 0s, 1s, 2s, and an unknown section. 
 The mid pointer scans the array: when we see 0, we swap it to the low side; when we see 1, 
 we simply move mid; and when we see 2, we swap it with high. 
 The important point is that after swapping a 2 with high, we do not move mid, 
 because the element coming from high has not been checked yet. 
 This lets us sort the array in-place in O(n) time and O(1) extra space.

🔑 Remember this in the interview

0 → send left
1 → leave it, move on
2 → send right, check again

And the main invariant to remember:
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



 // TWO POINTER APPROACH

 function sortColor(arr){
let n = arr.length;
if(n === 0 )return arr;
let low = 0;
let mid = 0;
let high = n-1;
while(mid <= high){
   if(arr[mid] === 0){ 
    [arr[low], arr[mid]] = [arr[mid], arr[low]];
   low++;
   mid++;
 }else if(arr[mid] === 1){
 mid++;
}else {
  [arr[mid], arr[high]] = [arr[high], arr[mid]];
 high--;
}


}

return arr;
}
