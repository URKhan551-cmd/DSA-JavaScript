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
