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



  
  this is the approach without creating newArr :
function moveZero(arr) {
  let n = arr.length;
  if (n === 0) return arr; // Return the empty array

  let insertPos = 0;

  // Step 1: Move all non-zero elements to the front
  for (let i = 0; i < n; i++) { // Changed i < n-1 to i < n to check the last element
    if (arr[i] !== 0) {
      arr[insertPos] = arr[i];
      insertPos++;
    }
  }

  // Step 2: Fill the remaining indices with zeros
  for (let i = insertPos; i < n; i++) {
    arr[i] = 0;
  }

  return arr;
}

// Example usage:
console.log(moveZero([0, 1, 0, 3, 12])); // Output: [1, 3, 12, 0, 0]




