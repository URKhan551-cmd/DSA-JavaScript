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
