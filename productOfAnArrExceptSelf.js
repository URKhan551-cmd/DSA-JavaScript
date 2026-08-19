// FAmous LEETCODE PROBLEM 
// PRODUCT OF AN ARRAY EXCEPT SELF 
// where every element should multiply with in the arr except the present index one.

const nums = [1, 2, 3, 4];
// nowi will loop through the arr of nums 
let finalArr = [];

for(let i =0; i<nums.length; i++){
  let answer = 1;
  for(let j=0; j<nums.length; j++){
    if(j !== i){
      ans *= nums[j];
    }
    
  }
  finalArr.push(answer);
}


// OPTIMIZED APPROACH 

const number = [1, 2, 3, 4];
const answer = new Array(n);  // this will create n size array
const prefix = new Array(n).fill(1);
let suffix= new Array(n).fill(1);    // suffix = [1, 1, 1, 1]
const n = number.length;
// preffix
for(let i=1; i<n; i++){
  prefix[i] = prefix[i-1] * number[i-1];    // first loop prefix[1, 1]  2ndloop prefix[1,1,2,6];
};

for(let i=n-2; i>=0; i--){
  suffix[i] = suffix[i+1] * number[i+1];  // firstloop [1]   2ndloop suffix[, 4, 1]   3rdloop sfix[]
}

for(let i=0; i<n; i++){
  answer[i] = prefix[i] * suffix[i];  
}

// Prefix loop   → O(n)
// Suffix loop   → O(n)
// Answer loop   → O(n)

// Total         → O(3n)
//               → O(n)

// SPACE COMPLEXITY
// prefix  → O(n)
// suffix  → O(n)
// answer  → O(n)      
                  //  i neeed SAPCE COMPEXITY O(1)


const number = [1, 2, 3, 4];
const answer = new Array(n);  // this will create n size array
answer[0] = 1;
const n = number.length;
// preffix

for(let i=1; i<n; i++){
  answer[i] = answer[i-1] * number[i-1];    // first loop prefix[1, 1]  2ndloop prefix[1,1,2,6];
};

let suffix = 1;
for(let i=n-1; i>=0; i--){
  answer[i] *= suffix;  // firstloop [1]   2ndloop suffix[, 4, 1]   3rdloop sfix[]
  suffix *= number[i]
}

here the SPACE COMPLEXITY IS O(1);

