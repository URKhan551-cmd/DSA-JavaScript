our algorithm effectively moves all zeros to the end while maintaining the order of non-zero elements.

The use of an auxiliary array newArr to store non-zero elements is a valid approach.
The logic for iterating through the original array and populating newArr is sound.
The algorithm runs in O(n) time and uses O(n) space, which meets the problem's requirements.
Nice! Solve the optimized approach to mark this problem done and keep your streak going.

function moveZero(arr){
let n = arr.length;
if(n === 0) return 0;

let newArr = new Array(n).fill(0);
let position = 0;
for(let i=0;i<n;i++){
  if(arr[i] !== 0){
   newArr[position] = arr[i];
   position++;
 }
}
return newArr;
}
