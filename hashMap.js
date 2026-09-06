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

  // BRUTE FORCE APPROACH
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


  // HASH MAP APPROACH

    function anagram(s, t){
 if(s.length !== t.length){
  return false;
}

const arr = new Array(26).fill(0);
for(let i=0; i<s.length; i++){
  arr[s.charCodeAt(i) - 97]++;
  arr[t.charCodeAt(i) - 97]--;
}
return !arr.some(item => item !== 0);
}

   
anagram("listen", "silent")
Both contain exactly the same characters with the same frequencies:
listen :  silent
 So:   true

Your algorithm uses an array of 26 positions to represent:
a b c d e f g ... z
0 1 2 3 4 5 6 ... 25

  if (s.length !== t.length) {
    return false;
}

Anagrams must have the same length.
For example:
"cat" → 3 characters
"dog" → 3 characters
Could potentially be anagrams.
This is an optimization because we don't need to  inspect the characters if the lengths are different.

s.charCodeAt(i)
JavaScript strings internally represent characters  using numeric character codes.
For ordinary English characters, these are based on Unicode code points / UTF-16 code units, anD the ASCII values for a-z are consecutive.
  
What does charCodeAt(i) actually mean?
Suppose: const word = "cat";
The indexes are:
index:  0   1   2
        ↓   ↓   ↓
       "c" "a" "t"

word.charCodeAt(0)
means: Give me the numeric UTF-16 code unit of the character at index 0.

word.charCodeAt(1)   gives:  "a" → 97
word.charCodeAt(2)  gives:  "t" → 116

So subtract 97.

For example:  a: 97 - 97 = 0
b: 98 - 97 = 1    c:99 - 97 = 2    d:100 - 97 = 3
...
z:122 - 97 = 25       That's how we convert a character into an array index.

s → +1
t → -1

This is a very clever trick.
Instead of creating two frequency arrays:
frequencyS    frequencyT    you use one array.


  arr[s.charCodeAt(i) - 97]++;  Let's break it apart.
Suppose:
s[i] = "c "
s.charCodeAt(i)

gives:
99  
99 - 97 = 2
arr[2]++;
Therefore we're saying:
Increase the count of c.
arr[t.charCodeAt(i) - 97]--;
does the opposite.
It subtracts the frequency of characters from t.
return !arr.some(item => item !== 0);
Let's understand .some() separately;
.some() asks:
Does at least one element satisfy this condition?


JavaScript checks:
2 > 5 ❌
4 > 5 ❌
7 > 5 ✅
As soon as it finds 7, .some() returns:
true
It doesn't need to check the remaining elements.


  arr = [0,0,0,0,0,...]

There is no non-zero element.
Therefore;
arr.some(item => item !== 0)
returns:
false
!arr.some(item => item !== 0)
So:
!false
becomes:
true
If every frequency difference is zero →
 the strings are anagrams → return true.



   arr.some(item => item !== 0)
finds -1.
Therefore:
true
Then:
!true  === false



  // HASH MAP APPROACH  
3rd HASHMAP APPROACH

// more flexible for unicode or extended char
function isAnagram(s, t){
if(s.length !== t.length){
 return false;
}

// more flexible than array for non-ASCII chars
let charMap = new Map();

// first pass count all chars in string. s
for(let char of s){
 //   increment count for each char
// if char is not exists in map, default =0 then add 1;

// common frequency pattern;
charMap.set(char, (charMap.get(char) || 0) + 1);

// second pass  substract char from string t

for(let char of t){
  // if char doesnot exist or count = 0
// then t has a char not in s or too many occurences

if(!charMap.has(char) || charMap.get(char) === 0){
  return false;
}

// ddecrement count for this char
// this effectively use up char from s
charMap.set(char, charMap.get(char) -  1);
// if we have proccessed all char without getting false
// lenngth is also equal then the string must be anagrams
}
}
};


 
  // ********************************************
