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

let numbers = [1, 2, 3, 4];
let answer = 1;
// preffix
for(){}
