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





 // two array an extra space solution 
SECOND BEST OPTIMIZED WAYS TO SOLVE TRAPPING WATER 

BY HELP OF CREATING ARRAY FOR HOLDING LEFT MAX AND RIGHT MAX
 
function trappingRain(arr){
let n = arr.length;
if(n === 0)return 0;

let totalWater = 0;
let leftArr = new Array(n);
let rightArr = new Array(n);

leftArr[0] = arr[0]; 
for(let i=1;i<n; i++){
  leftArr[i] = Math.max(leftArr[i - 1], arr[i]);
}

rightArr[n-1] = arr[n -1];
for(let j=n-2; j>=0; j--){
 rightArr[j] = Math.max(rightArr[j+1], arr[j]);
}

for(let i=0;i<n;i++){
  let waterI =  Math.max(0, Math.min(leftArr[i], rightArr[i]) - arr[i]);
totalWater += waterI;
}
return totalWater;
}


// first brute force possible way to solve problem  
function trappingRain(arr){
let n = arr.length;
if(n === 0)return 0;

let totalWater = 0;
for(let i=0; i<n; i++){
  let leftMax = 0;
for(let j=0; j<i; j++){
 leftMax = Math.max(leftMax, arr[j]);
}

let rightMax = 0;

for(let k=i+1; k<n; k++){
  rightMax = Math.max(rightMax, arr[k]);
}

let waterAlt = Math.max(0, Math.min(leftMax, rightMax) - arr[i]);

totalWater += waterAlt;
}
return totalWater;
}
