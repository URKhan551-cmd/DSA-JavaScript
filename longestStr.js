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



