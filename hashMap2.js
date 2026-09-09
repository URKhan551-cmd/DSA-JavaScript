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


//***************************
optimize O(n) Approach 

function longest(arr){
let setVal = new Set(arr);

let longest = 0;

for(let num of setVal){
  if(!setVal.has(num - 1)){
   let current = num;
   let streak = 1;

  while(setVal.has(current + 1)){
  current++;
streak++;
}

longest = Math.max(longest, streak);
  }


}
return longest;

}



                          //********************************************
Encode and Decode Strings
LeetCode #271
↗
Medium
✓ Solved

›
details
Round-trip a list of strings · survive any character
Design encode(list<string>) → string and decode(string) → list<string> so that the original list is recovered exactly. 
    The strings may contain ANY characters, including whatever you pick as a delimiter.


function encode(arr){
let result = "";

for(let str of arr){
 result += str.length + "#" + str;
} 
return result;
}

function decode(str){
  let result = [];
let i=0;
while(i < str.length){
 let j=i;
while(str[j] !== "#"){
 j++;
}
let length = parseInt(str.substring(i, j), 10);
let start= j+1;
let end = start + length;
result.push(str.substring(start, end));
i=end;
}
return result;
}


    Encode: Each string is prefixed with its length followed by #. This creates an unambiguous boundary: the number before # tells us exactly how many characters to read.

Decode: We repeatedly read the length up to the next #, then take exactly that many characters as the string.

Complexity
Time: O(N) for both encode and decode, where N is the total number of characters in all strings.

Space: O(N) for the encoded string and the result list.

    // Brute force: join with '#' and split on '#'
encode(strs) {
    return strs.join('#');
}

decode(s) {
    return s.split('#');
}



    // *********************************************8

Majority Element
LeetCode #169
↗
Easy

›
details
Boyer-Moore voting — one candidate, one counter
Given an array of size n, return the element that appears more than ⌊n/2⌋ times. You may assume such an element always exists.

function majority(arr){
let n = arr.length;

let count = 0;
let candidate= null;

for(let num of arr){
if(count === 0){
candidate = num;
}
count += (num === candidate) ? 1 : -1;

}
return candidate;
}

Optimized Boyer-Moore Voting Algorithm (O(n) time, O(1) space)
The Boyer-Moore Voting Algorithm is the most efficient solution for this problem. It identifies the majority element in a single pass without using extra space.
How it works
Maintain two variables: candidate and count.
Traverse the array:
If count is 0, set candidate = current element.
If the current element equals candidate, increment count; otherwise, decrement count.
At the end, candidate will be the majority element.


// ******************************
    Plus One
LeetCode #66
↗
Easy
✓ Solved

›
details
The carry that runs off the front
A non-negative integer is given as an array of digits, most significant first. Add one to it and return the resulting array of digits.


Brute Force (Using BigInt)
Convert the digit array to a string, then to a BigInt, add one, convert back to a string, and finally map each character to a number.

javascript
var plusOneBruteForce = function(digits) {
    // Convert array -> string -> BigInt -> add 1 -> string -> array of numbers
    const num = BigInt(digits.join('')) + 1n;
    return Array.from(String(num), Number);
};
Complexity
Time: O(n) – join, BigInt operations, and mapping each run in linear time.

Space: O(n) – additional strings and the resulting array.


    Returning a New Array
javascript
var plusOneOptimizedNewArray = function(digits) {
    const result = [...digits]; // copy to avoid mutating input
    for (let i = result.length - 1; i >= 0; i--) {
        if (result[i] < 9) {
            result[i]++;
            return result;
        }
        result[i] = 0;
    }
    result.unshift(1);
    return result;
};

Complexity

Time: O(n) – single pass over the array.

Space: O(1) extra for the in‑place version (excluding the input array); O(n) for the new‑array version due to the copy.

Key Idea
Instead of converting to a number, we directly simulate decimal addition. 
A digit less than 9 can be incremented without a carry, so we stop
 early. Otherwise we set it to 0 and continue. After the loop, 
if we haven’t returned, all digits were 9, so we add a leading 1.


    In‑Place Mutation
javascript
var plusOneOptimizedInPlace = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // carry over
    }
    // If we are here, all digits were 9 -> [9,9,9] becomes [1,0,0,0]
    digits.unshift(1);
    return digits;
};



    function plusOne(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {

        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    return [1, ...digits];
}
    
// ********************************************************

Intersection of Two Arrays
LeetCode #349
↗
Easy

›
details
The set is the shape of the answer
Given two integer arrays, return an array of their intersection. Each value in the result must appear only once, and the order does not matter.


function intersection(arr1, arr2){
let n1 = arr1.length;
let n2 = arr2.length;

if(n1 ===0 || n2 === 0)return 0;
let result =[];

for(let i=0;i<n1;i++){
  for(let j=0;j<n2;j++){
   if(arr1[i] === arr2[j]){
   if(!result.includes(arr1[i])){
  result.push(arr1[i]);
} else { 
continue;
}
  }
}
}

return result;
}



var intersection = function(nums1, nums2) {
    const result = [];
    const seen = new Set();  // keeps track of values already added to result

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                // Found a common element
                if (!seen.has(nums1[i])) {
                    seen.add(nums1[i]);
                    result.push(nums1[i]);
                }
                break; // No need to keep checking the rest of nums2 for this element
            }
        }
    }
return result;
}


Nested loops – For every element num in nums1, we scan through 
all elements of nums2 to see if it exists.
Uniqueness – A Set (seen) is used to make sure we only add each
 common value once. Without it, duplicates in the input
 arrays would cause duplicate values in the result (which is not allowed).

Early exit – Once we find a match for the current nums1[i], 
we break the inner loop. This avoids extra work because 
we already know this value is present and have recorded it (if it was new).

Return – The result array contains all unique common elements. 
The order follows the order of first appearance in nums1.

    Time: O(n × m) where n = nums1.length and m = nums2.length. In the 
worst case (no common elements), every pair is compared.

Space: O(min(n, m)) for the seen set and the result array 
(at most the number of distinct common elements).


     // ******************************

         Distribute Candies
LeetCode #575
↗
Easy

›
details
Whichever ceiling binds first
Alice has n candies of various types and her doctor tells her to eat only n/2 of them. 
    Return the maximum number of different types she can keep while eating exactly n/2 candies.

    function candies(arr){
let seen = new Set(arr);
let halfSheKeep = arr.length/2;
return Math.min(seen.size(), halfSheKeep);
}



    function distributeCandies(candies) {
    const uniqueTypes = new Set(candies);

    const numberOfTypes = uniqueTypes.size;

    const candiesAliceCanKeep = candies.length / 2;

    return Math.min(
        numberOfTypes,
        candiesAliceCanKeep
    );
}


    Count distinct types – Create a Set from the candyType array. The 
Set automatically stores only unique values, so its size gives the total number of different candy types available.
Compute the limit – Alice can eat exactly n / 2 candies (n is always even).
Return the minimum – The maximum number of different types she can eat is limited by two factors:
The number of different types she actually has (uniqueTypes.size).
The number of candies she is allowed to eat (candyType.length / 2).
She cannot eat more different types than she has, and she cannot eat 
more different types than the total number of candies she consumes.

Time: O(n) – Building the Set requires one pass over the array of length n.
Space: O(n) – In the worst case, all candies are of different types, so the Set stores n elements.




    //***************************************

    Count Inversions
✓ Solved

›
details
Counted in blocks during a merge
An inversion is a pair of indices i < j where arr[i] > arr[j] — a measure of how far the array is from sorted. Count them all.

An inversion is simply a pair of numbers that are in the wrong order.
The definition says:
i < j
AND
arr[i] > arr[j]
In normal language:
Pick two positions. The left number must be bigger than the right number.

    function countInversion(arr){
let n= arr.length;
let count = 0;
for(let i=0; i<n-1;i++){
  for(let j=i+1; j<n;j++){
  if(arr[i] > arr[j]){
  count++;
}
}
}

return count;
}


    
