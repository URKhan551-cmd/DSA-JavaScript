Longest Substring Without Repeats
LeetCode #3
↗
Medium
✓ Solved

›
details
Variable-size sliding window over a string
Given a string, find the length of the longest contiguous substring that contains no repeated characters.



let left = 0;
let sum =0;
let best = 0;

for(let right=0;right<nums.length;right++){
  // expand
  sum += nums[right];
  
  // repair
  while(sum > 7){
    sum -= nums[left];
    left++;
    
  }

  // record
  best = Math.max(best, right - left + 1);
}


function longest1(string){
let maxLength =0;
for(let start=0;start<string.length; start++){
  let seen = new Set();
for(let end=start; end<string.length; end++){
 const char = string[end];

if(seen.has(char)){
 break;
}
seen.add(char);
let currentLength = end - start + 1
maxLength = Math.max(currentLength, maxLength);

}
}
return maxLength;
}





function longest(string){
let seen = new Set();
let maxLength =0;
let left = 0;
for(let right=0;right<string.length; right++){

//duplicate found shrink the window.
  while(seen.has(string[right])){
   seen.delete(string[left]);
left++;
 }
// add current character to set
seen.add(string[right]);
//calculate the current length
maxLength = Math.max(maxLength, right - left + 1);
}
return maxLength;
}





function longest(string){
let map = new Map();
let maxLength =0;
let left = 0;
for(let right=0;right<string.length; right++){
  let char = string[right];
 if(map.has(char)){
   left = Math.max(left, map.get(char) + 1);
}
map.set(char, right);
maxLength = Math.max(maxLength, right - left + 1);
}
return maxLength;
}


    right expands the window one character at a time.
The Map stores each character's most recent index.
When a duplicate is found, left jumps to one position after the previous occurrence: map.get(char) + 1.
Math.max(left, ...) prevents left from ever moving backward.
After repairing the window, right - left + 1 gives the current valid window length, and we update maxLength.

Interview summary:

“I use a sliding window with two pointers and a hash map. 
  The map stores the latest index of each character. 
  When I encounter a duplicate inside the current window, 
  I move the left pointer past its previous occurrence. 
  This keeps the window free of duplicates and gives an O(n) time and O(n) space solution.”







function longestSubString(s, k){
 let n = s.length;
let best= 0;
for(let left=0; left<n; left++){
  let freq= new Array(26).fill(0);
let maxFreq= 0;
for(let right=left; right<n; right++){
let index = s.charCodeAt(right);
freq[index]++;

maxFreq= Math.max(maxFreq, freq[index]);

let windowLength= right - left + 1;
let changeNeed = windowLength - maxFreq;
if(changeNeed <= k){
best= Math.max(best, windowLength);
}
}
}
return best;
}
