Unsorted · find a pair adding to target
Given an array of integers and a target, 
return the indices of the two numbers that add up 
to the target. Exactly one solution exists 
and you may not reuse an element.

  // BRUTE FORCEC 
  function sum(arr, target){
let n = arr.length;
if(n === 0) return arr;

for(let i=0;i<n-1;i++){
 for(let j=i+1; j<n; j++){
   if(arr[i] + arr[j] === target){
   return (i, j);
}
}
}
}


Use a Map to remember numbers we have already seen
 and their indices. For each number, calculate its 
complement = target - current number and check whether
 that complement is already in the Map. If it exists, 
return the stored index and the current index; otherwise, 
store the current number and continue. This gives us 
O(n) time and O(n) space, instead of checking 
every possible pair with O(n²).

  // HASH MAP APPROACH
  function sum(arr, target){
let n = arr.length;
if(n === 0)return arr;

let seen = new Map();
for(let i=0; i<n; i++){
  let complement = target - arr[i];
if(seen.has(complement)){
   return [seen.get(complement), i];
}
seen.set(arr[i], i);
}
return null;
}


// **************
