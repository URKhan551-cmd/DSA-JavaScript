function longest(s, k){
 let n = s.length;
let best= 0;
for(let left=0; left<n; left++){
  let freq= new Array(26).fill(0);
let maxFreq= 0;
for(let right=left; right<n; right++){
let index = s.charCodeAt(right);
freq[index]++;
