TWO POINTER O(1) APPROACH
In this approach, we use two pointers, one starting from the left and one from the right, while keeping track of the highest bar seen from each side. 
At every step, we process the side with the smaller current height because that side determines the maximum possible water level at that position. 
If the current bar is lower than the maximum boundary on that side, we add the difference to the total trapped water; otherwise, we update the 
maximum height. We keep moving the pointers toward each other until they meet, which allows us to solve the problem in **O(n) time and O(1) space**
 without using extra arrays.




function trappingRain(arr){
let n = arr.length;
if(n === 0)return 0;

let totalWater = 0;
let left = 0;
let right = n-1;
let leftMax = 0;
let rightMax = 0;
let fix = 0;

while(left < right){
  if(arr[left] <= arr[right]){
    if(arr[left] >= leftMax){
   leftMax = arr[left];
} else{ 
   totalWater += leftMax - arr[left];
 }
left++;
} else {
  if(arr[right] >= rightMax){
   rightMax = arr[right];
} else {
  totalWater += rightMax - arr[right];
}
right--;
}
}
return totalWater;
}
