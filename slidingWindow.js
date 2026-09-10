function slidiing(arr, k){
if(k <= 0 || arr.length < k) return null;
let n = arr.length;
let maxSum = 0;
for(let right=0; right< n-k;right++){
   let seen = new Set();
  let valid = true;
let sum = 0;

for(let i=right; i<right+k;i++){
 if(seen.has(arr[i])){
 valid = false;
  break;
}
seen.add(arr[i]);
sum += arr[i];
}
if(valid){
  maxSum = Math.max(maxSum, sum);
}

};
return maxSum
}
