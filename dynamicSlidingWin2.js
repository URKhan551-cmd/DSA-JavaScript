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


nums + k
   ↓
choose window starting at i
   ↓
look at k elements using j
   ↓
find maximum
   ↓
push maximum into result
   ↓
move i one step
   ↓
repeat




  // OPTIMIZED APPROACH

Maintain a deque of indices where the values nums[deque[i]] are in strictly decreasing order.

Front of deque = index of the maximum in the current window.

Before adding a new index i, pop from the back any indices whose value is ≤ nums[i] — they can never be the max again while i is in the window.

Pop from the front any index that has slid out of the window (< i - k + 1).

Each index is pushed once and popped at most once → O(n) time.
    //*************************************************
