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


// ***************************** **************

Contains Duplicate
LeetCode #217
Easy
details
Any value appear twice?
Given an integer array, return true if any value appears at least twice, and false if every element is distinct.

  // BRUTE FORCE 
  function contains(arr){
let n = arr.length;
if(n === 0) return arr;

for(let i =0; i<n-1; i++){
 for(let j=i+1; j<n;j++){
  if(arr[i] === arr[j]){
   return true;
   }
 }
}
return false;
}
  

// OPTIMIZE HASH MAP APPROACH 

function contains(arr){
let n = arr.length;
if(n === 0) return arr;

let seen = new Map();
for(let i=0; i<n; i++){
  if(seen.has(arr[i])){
   return true;
 } 
seen.set(arr[i], i);
}

return false;
}

//  2ND VERSION 

function containsDuplicate(nums) {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}


// We use a Set to keep track of the values we have already seen. For each number, we check whether it is 
// already in the Set; if it is, we immediately know there is a duplicate. Otherwise, 
// we add it and continue. We use a Hash Set because it gives us average O(1) lookup, 
// reducing the solution from O(n²) brute force to O(n) time at the cost of O(n) extra space.



      // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// PROBLEM
What does "Valid Anagram" actually mean?

An anagram means:

Two strings contain exactly the same characters, 
with exactly the same frequency, but the characters can be in a different order.

function anagram(s, t){
 if(s.length !== t.length){
  return false;
}

let sortedS = s.split("").sort();
let sortedT = t.split("").sort();

return sortedS.join("") === sortedT.join("")
}
}

//   Time:  O(n log n)
// Space: O(n)

// The important idea is:

// If two strings are anagrams, their
//  sorted versions must be identical.


  
