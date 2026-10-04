Median from Data Stream
LeetCode #295
↗
Hard

›
details
Two heaps straddling the middle
Design a data structure that supports adding integers from a stream and returning the median of all values seen so far at any time. 
  The median is the middle value, or the average of the two middle values when the count is even.

  
class DataMedian{
 constructor(){
   this.nums= [];
}

add(num){
  this.nums.push(num);
}

median(){
 let copyArr = [...this.nums];
  let sortArr = copyArr.sort((a,b) => a - b);
let n = sortArr.length;
if(n % 2 === 1){
 return sortArr[Math.floor(n / 2)];
}
const right = n / 2;
const left = right - 1;

return (sortArr[right] + sortArr[left]) / 2;
}
}
