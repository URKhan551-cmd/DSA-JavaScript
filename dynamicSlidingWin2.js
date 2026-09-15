Sliding Window Maximum
LeetCode #239
↗
Hard

›
details
Monotonic deque · the front is always the window max
Given an array nums and a window size k, return the maximum of every contiguous window of size k as the window slides from left to right.

  function maxWindow(arr, k){
if(k> arr.length) return null;
let n = arr.length;
let maxResult = [];
for(let i=0;i<=arr.length-k;i++){
 let max = -Infinity;

for(let j=i;j<i+k; j++){
  max= Math.max(max, arr[j]);
}
maxResult.push(max);
}
return maxResult;
}
