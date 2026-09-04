LEETCODE PROBLEM   MAX WATERCONTAINER
// given number in the arr is height of the container.
// the width would be the distance between two index.

  // BRUTE FORCE  O(n2);
function getMaxWaterConatiner(arr){
let maxWater = 0;

  for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
      let height = Math.min(arr[i], arr[j]);
      let width = j - i;
      let area = height * width;
      maxWater = Math.max(maxWater, area); 
    }
  }
  return maxWater;
)}



function container(arr){
if(arr.length === 0) return [];

let n = arr.length;
if(n < 2) return [];
let max = 0;
for(let i=0; i<n-1; i++){
 for(let j=i+1; j<n; j++){
    let height = arr[i] < arr[j] ? arr[i] : arr[j];
    let base = j - i;  
  let area =  base * height;
if(area > max){
     max = area;
    }
   }
 }
return max;
}
