function longest(s, k){
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


// **********"*"
function characterReplacement(s, k) {
    const n = s.length;
    
    // Edge case: budget is larger than or equal to string length
    if (k >= n) {
        return n;
    }

    const count = new Map();
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;
for (let right = 0; right < n; right++) {
        const char = s[right];
        count.set(char, (count.get(char) || 0) + 1);
        
        maxFreq = Math.max(maxFreq, count.get(char));

 // If the window requires more changes than k, shift left pointer
        if ((right - left + 1) - maxFreq > k) {
            const leftChar = s[left];
            count.set(leftChar, count.get(leftChar) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}




// *************

function permutations(s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }

    // What s1 requires
    const map1 = new Map();

    for (let char of s1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    const windowSize = s1.length;

    // What the current window has
    const map2 = new Map();

    let left = 0;

for (let right = 0; right < s2.length; right++) {

        // 1. Add right character
        const rightChar = s2[right];

        map2.set(
            rightChar,
            (map2.get(rightChar) || 0) + 1
        );

        // 2. If window became too large,
        // remove the character at left
        if (right - left + 1 > windowSize) {

            const leftChar = s2[left];

            map2.set(
                leftChar,
                map2.get(leftChar) - 1
            );

            if (map2.get(leftChar) === 0) {
                map2.delete(leftChar);
            }

            left++;
        }

        // 3. Now the window has exactly s1.length
        if (right - left + 1 === windowSize) {

            if (mapsAreEqual(map1, map2)) {
                return true;
            }
        }
    }

    return false;
}
