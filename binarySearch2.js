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
