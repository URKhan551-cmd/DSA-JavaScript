Note for LeetCode #643
LeetCode #643 is actually Maximum Average Subarray I, not max sum.
The logic is almost identical, but at the end you divide by k.

var findMaxAverage = function(nums, k) {
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;

    for (let i = k; i < nums.length; i++) {
        sum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum / k;
};   


If the problem asks for maximum sum, return maxSum.
If it asks for maximum average, return maxSum / k.

// ***************************************************

    Max Sum Subarray of Size K
LeetCode #643
↗
Easy
✓ Solved

›
details
Find the K-length contiguous subarray with the largest sum
Given an integer array and a window size k, find the maximum sum among all contiguous subarrays of length k.

    function maxSumSubarrayBrute(nums, k) {
  if (k <= 0 || k > nums.length) return null;

  let maxSum = -Infinity;

  // Number of windows = n - k + 1
  for (let start = 0; start <= nums.length - k; start++) {
    let sum = 0;

    // Recompute sum for current window
    for (let i = start; i < start + k; i++) {
      sum += nums[i];
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}


// optimized approach
function buteForce(arr, k){
let n = arr.length;
if(n < k || k <= 0) return 0;
let windowSum = 0;

for(let i=0; i<k; i++){
  windowSum += arr[i];
}
let left = 0;
let maxVal = windowSum;
for(let right=k; right<arr.length; right++){
 windowSum += arr[right];
 windowSum -= arr[left];
left++;
maxVal = Math.max(maxVal, windowSum);
}



return maxVal;

}




// *************************

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


    // ***************************

Max Sum of Distinct Subarrays, Size K
LeetCode #2461
↗
Medium
✓ Solved

›
details
Fixed window + a frequency map gate
Given an integer array and a length k, find the maximum sum among all contiguous subarrays of length k whose elements are all distinct.
    
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



    If an interviewer asks "How did you 
optimize this?", a strong answer would be:

"The brute-force approach examines every 
window and recalculates its sum and 
distinctness in O(k), resulting in O(nk). 
Since consecutive windows overlap by k - 1 
elements, I maintain a fixed-size sliding window. 
I add the incoming element to a frequency 
map and running sum, and when the window exceeds k, 
I remove the outgoing element from both. 
A window is valid when its size is k and 
freq.size === k, meaning all elements are distinct. 
This reduces the time complexity to O(n) 
with O(k) auxiliary space."

    For LeetCode #2461, the constraints make 
nums[i] positive, so your 0 initialization is fine. 
But as a general sliding-window algorithm, 
I'd initialize from the first valid window or use -Infinity.

For example:

let maxSum = -Infinity;

Then:

maxSum = Math.max(maxSum, sum);

works even with negative numbers.
