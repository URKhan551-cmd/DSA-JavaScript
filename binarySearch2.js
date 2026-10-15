Search in Rotated Sorted Array
LeetCode #33
↗
Medium

›
details
One half is always sorted, use it to steer
Given an ascending sorted array that has been rotated at an unknown pivot, 
find the index of a target value in O(log n) time, returning -1 if it is not present.

  function sortedReverse(arr, target){
 for(let i=0; i<arr.length; i++){
 if(arr[i] === target){
  return i;
}
}
return -1;
}

  
function sortedOptimized(arr, target){
 let left = 0;
let right = arr.length - 1;
while(left <= right){
 let mid = Math.floor((right + left ) / 2);

if(nums[mid] === target){
  return mid;
}
if(nums[left] <= nums[mid]){
 if(target >= nums[left] && target < nums[mid]){
 right = mid - 1;
}else {
 left = mid + 1;
}
}else {
  if(target > nums[mid] && target <= nums[right]){
  left = mid + 1;
} else {
  right = mid - 1;
}
}
}
return -1;
}


//

Find Minimum in Rotated Sorted Array
LeetCode #153
↗
Medium
✓ Solved

›
details
Compare mid to hi to find the cliff
An ascending sorted array of unique values was rotated at an unknown pivot. Return its minimum element in O(log n) time.

Key observation
Compare the middle element with the rightmost element.
- If nums[mid] > nums[right], the minimum must be to the right of mid.
- If nums[mid] <= nums[right], the minimum is at mid or to its left.
Why compare against right? It tells us which side contains the rotation boundary, or cliff.

// BEST prcatices  
// let mid = Math.floor(left + (right - left) / 2)
  
  function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}


  //

Search a 2D Matrix
LeetCode #74
↗
Medium
✓ Solved

›
details
Treat the grid as one flat sorted array · binary search 0..m·n−1
Given an m x n matrix where each row is sorted left-to-right and the first integer of each 
  
row is greater than the last integer of the previous row, 
  determine whether a target value exists in the matrix in O(log(m·n)) time.
  
const matrix = [
  [1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];


Suppose the target is 16.
We must return true because 16 exists in the matrix. If the target were 13, we would return false


  function searchMatrixBruteForce(matrix, target) {
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === target) {
        return true;
      }
    }
  }

  return false;
}


Understand the loops
- row selects a row.
- col selects a column within that row.
- matrix[row][col] accesses an individual element.
- If the element equals target, return true immediately.
- If both loops finish without finding it, return false.
