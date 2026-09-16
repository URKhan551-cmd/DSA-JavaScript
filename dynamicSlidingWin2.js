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






  function maxWindow(arr, k){
if(!Array.isArray(arr)k> arr.length || k<=0) return [];
let n = arr.length;
let maxResult = new Array(n-k+1);
let q = new Int32Array(n);
let head =0, tail =0;
for(let i=0;i<n;i++){
 while(tail > head && arr[q[tail - 1]] <= arr[i]){
  tail--;
 }

q[tail++] = i;

if(q[head] < i-k+1) head++;
if(i>=k-1) maxResult[i-k+1] = arr[q[head]];
}
return maxResult;
}




  function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];

    for (let i = 0; i < nums.length; i++) {

        // Remove expired indexes
        while (deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        // Remove indexes whose values are smaller
        while (
            deque.length > 0 &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }
        // Add current index
        deque.push(i);

        // Window is complete
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}





  //
function maxSlidingWindow(nums, k) {
    const result = [];
    const deque = [];
    let head = 0;

    for (let i = 0; i < nums.length; i++) {

        // Remove expired indexes
        while (head < deque.length && deque[head] <= i - k) {
            head++;
        }

        // Remove smaller values from the back
        while (
            deque.length > head &&
            nums[deque[deque.length - 1]] <= nums[i]
        ) {
            deque.pop();
        }

        // Add current index
        deque.push(i);
    // Window is complete
        if (i >= k - 1) {
            result.push(nums[deque[head]]);
        }
    }

    return result;
}


I use a monotonic decreasing deque that stores indexes rather than values. For each new element, 
I remove indexes from the front that have fallen outside the current window, 
then remove smaller values from the back because they can never become the maximum while the new larger value is present.
The index at the front therefore always points to the maximum of the current window. 
Each index enters and leaves the deque at most once, giving O(n) time and O(k) auxiliary space.

"Why do you compare deque[0] with i - k instead of comparing the value?"

Your answer:

"Because deque[0] is an index, and i - k represents the last index outside the current window. 
  I'm checking whether the index has expired, not whether its value is small."
    
