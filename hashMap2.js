Longest Consecutive Sequence
LeetCode #128
↗
Medium
✓ Solved

›
details
Unordered · longest run of consecutive integers in O(n)
Given an unsorted array of integers, return the length of the longest sequence of consecutive integers (in any order). Solve it in O(n) time.


function(nums) {

    let longest = 0;

    for (let i = 0; i < nums.length; i++) {

        let current = nums[i];
        let length = 1;

        while (nums.includes(current + 1)) {
            current++;
            length++;
        }

        longest = Math.max(longest, length);
    }

    return longest;
};


O(n log n) approach with sort 
function longest(arr){
let n = arr.length;
if(n === 0) return 0;

let streak = 1;
let longest = 1;
let sortedArr = arr.sort((a, b) => a - b);
for(let i=1; i<n; i++){
if(sortedArr[i] === sortedArr[i - 1]){
  continue;
} 

if(sortedArr[i] === sortedArr[i -1] + 1){
  streak++;
} 

else {
 streak =1;
}
longest = Math.max(longest, streak);

}
return longest;
}


