TWO POINTER O(1) APPROACH

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
