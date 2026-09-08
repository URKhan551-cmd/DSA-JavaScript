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
