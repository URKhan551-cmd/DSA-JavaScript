function binarySearch(arr, target){
 if(arr.length === 0)return [];
let low = 0;
let high = arr.length - 1;

while(low <= high){
 let mid = Math.floor((low+high) / 2);
if(arr[mid] === target) {
 return mid;
} else if (arr[mid] < target){
  low= mid+1;
 hi = arr.length -1;
} else if(arr[mid] > target){
  low= low;
  hi= mid - 1;
} 

}

return -1;
}
