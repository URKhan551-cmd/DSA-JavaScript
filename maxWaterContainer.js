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
