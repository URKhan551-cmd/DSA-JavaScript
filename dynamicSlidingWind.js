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


  // **********************************

Longest Repeating Character Replacement
LeetCode #424
↗
Medium
✓ Solved

›
details
Variable window · invariant len − maxFreq ≤ k
Given a string and a budget of k character changes, find the length of the longest substring made of a 
  single repeated character after performing at most k replacements.


    function characterReplacement(s, k) {
    let maxLength = 0;

    // Choose the starting point
    for (let start = 0; start < s.length; start++) {

        // Frequency of characters in current substring
        const count = new Map();

        // Extend the substring
        for (let end = start; end < s.length; end++) {

            const char = s[end];

            // Increase frequency
            count.set(char, (count.get(char) || 0) + 1);

            // Find the highest frequency
            let maxFreq = 0;

            for (const freq of count.values()) {
                maxFreq = Math.max(maxFreq, freq);
            }
// Current substring length
            const windowLength = end - start + 1;

            // Characters that need to be replaced
            const replacements = windowLength - maxFreq;

            // Is this substring possible?
            if (replacements <= k) {
                maxLength = Math.max(maxLength, windowLength);
            }
        }
    }

    return maxLength;
}


    When you see Longest Repeating Character Replacement, think:
Grow window
     ↓
Count characters
     ↓
Find most frequent character
     ↓
How many other characters must I replace?
     ↓
windowLength - maxFrequency
     ↓
If > k → shrink
If <= k → record answer
And remember this sentence:
The window can contain different characters. We are checking whether we can replace the minority characters and turn the whole window into one repeated character using at most k replacements.
That is the core idea behind LeetCode 424.




OPTIMIZED APPROACH 
function characterReplacement(s, k) {
    const count = new Map();

    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        const char = s[right];

        // Add current character
        count.set(char, (count.get(char) || 0) + 1);

        // Update highest frequency
        maxFreq = Math.max(maxFreq, count.get(char));

        // Current window length
        const windowLength = right - left + 1;

        // Characters that need replacement
        const replacements = windowLength - maxFreq;
       
 // Window is invalid
        if (replacements > k) {

            const leftChar = s[left];

            count.set(leftChar, count.get(leftChar) - 1);

            left++;
        }

        // Record valid window
        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

I use a variable-size sliding window with a frequency map. The window is valid when windowLength - maxFreq <= k, because that value represents how many characters must be replaced to make the entire window one repeated character. I expand with right, shrink with left when replacements exceed k, and track the maximum valid window length.

Time: O(n)
Space: O(1) for the standard uppercase-English-character version.




// *****************************************************


  Minimum Window Substring
LeetCode #76
↗
Hard

›
details
Smallest window of s covering all of t
Given strings s and t, return the smallest substring of s that contains every character of t, 
  counting multiplicity. If no such window exists, return the empty string.


  The pattern

For this problem, memorize:

EXPAND → become valid → SHRINK → record smallest

More specifically:

right++
   ↓
add character
   ↓
does window contain everything in t?
   ↓
    YES
     ↓
move left forward
     ↓
keep shrinking while valid
     ↓
record smallest window

This is slightly different from the previous problems you've done.



function shortest(s, t){
if(t.length > s.length) return "";

let minWindow = "";

for(let left=0; left<s.length; left++){
 let windowCount = new Map();

 // expand the string
for(let right=left; right<s.length; right++){
  let char = s[right];

  windowCount.set(char, (windowCount.get(char) || 0) + 1);
  }
// check if current window countain t
if(countainAll(windowCount, t)){
   const currentWindow = s.slice(left, right + 1);

// first valid window or smaler window

if(minWindow === ""  || currentWindow.length < minWindow.length){
    minWindow = currentWindow;
     }

  }

}


}
return minWindow;
}



function containAll(minWindow, t){
  let requiredCount = new Map();
  for(const char of t){
 requiredCount.set(char, (requiredCount.get(char) || 0) + 1);
} 

for(const [char, needed] of requiredCount){
    const have = windowCount.get(char) || 0;

  if(have < needed) {
   return false;
    }
 }
return true;

}



Minimum Window Substring asks me to find the smallest contiguous part of s that contains all the characters required by t, including the required number of duplicates; I expand until the window is valid, then shrink it to make it as small as possible.

Once that sentence is completely clear, the code becomes much easier.

Next, the best move is to implement the brute-force JavaScript solution first, and we'll trace it on s = "ADOBECODEBANC", t = "ABC" before touching the optimized solution.




function minWindow(s, t) {

    if (t.length > s.length) {
        return "";
    }

    // 1. What characters do we need?
    const need = new Map();

    for (const char of t) {
        need.set(
            char,
            (need.get(char) || 0) + 1
        );
    }

    // 2. What characters are currently inside our window?
    const windowCount = new Map();

    let left = 0;
 
 // Number of character requirements currently satisfied
    let have = 0;

    // Number of unique character requirements
    const required = need.size;

    // Best answer found so far
    let minLength = Infinity;
    let resultStart = 0;

    // 3. Expand the window
    for (let right = 0; right < s.length; right++) {

        const char = s[right];

        // Add current character to the window
        windowCount.set(
            char,
            (windowCount.get(char) || 0) + 1
        );


        // Did this character just satisfy a requirement?
        if (
            need.has(char) &&
            windowCount.get(char) === need.get(char)
        ) {
            have++;
        }

        // 4. If window is valid, try to make it smaller
        while (have === required) {

            const windowLength = right - left + 1;

            // Is this our smallest valid window?
            if (windowLength < minLength) {
                minLength = windowLength;
                resultStart = left;
            }

            // Remove the leftmost character
            const leftChar = s[left];

 windowCount.set(
                leftChar,
                windowCount.get(leftChar) - 1
            );

            // Did removing it break a requirement?
            if (
                need.has(leftChar) &&
                windowCount.get(leftChar) < need.get(leftChar)
            ) {
                have--;
            }

            left++;
        }
    }

    // No valid window found
    if (minLength === Infinity) {
        return "";
    }

    // Return the best window
    return s.slice(
        resultStart,
        resultStart + minLength
    );
}


When our window contains:
A → enough
B → enough
C → enough
we have:
have = 3
need = 3
Therefore:
have === need
means:
The current window is valid.
