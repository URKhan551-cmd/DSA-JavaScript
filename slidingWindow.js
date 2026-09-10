Note for LeetCode #643
LeetCode #643 is actually Maximum Average Subarray I, not max sum.
The logic is almost identical, but at the end you divide by k.

   








If the problem asks for maximum sum, return maxSum.
If it asks for maximum average, return maxSum / k.










Max Sum of Distinct Subarrays, Size K
LeetCode #2461
↗
Medium

›
details
Fixed window + a frequency map gate
Given an integer array and a length k, find the maximum sum among all contiguous subarrays of length k whose elements are all distinct.

// Brute force approach 
function slidiing(arr, k){
if(k <= 0 || arr.length < k) return null;
let n = arr.length;
let maxSum = 0;
for(let right=0; right< n-k;right++){
   let seen = new Set();
  let valid = true;
let sum = 0;

for(let i=right; i<right+k;i++){
 if(seen.has(arr[i])){
 valid = false;
  break;
}
seen.add(arr[i]);
sum += arr[i];
}
if(valid){
  maxSum = Math.max(maxSum, sum);
}

};
return maxSum
}
