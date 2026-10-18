Kth Smallest in a Sorted Matrix
LeetCode #378
↗
Medium
✓ Solved

›
details
Binary search on values · count ≤ x probes
Given an n x n matrix whose rows and columns are each sorted in ascending order, 
find the kth smallest element in the matrix considering its sorted order, counting duplicate values separately.



function kthSmallest(matrix, k) {
  const values = [];

  // Step 1: Collect every element.
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      values.push(matrix[row][col]);
    }
  }

  // Step 2: Sort numerically in ascending order.
  values.sort((a, b) => a - b);

  // Step 3: Convert the 1-based rank to a 0-based index.
  return values[k - 1];
}

 // optimized solution 

function kthSmallest(matrix, k) {
  const n = matrix.length;

  let left = matrix[0][0];
  let right = matrix[n - 1][n - 1];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let count = 0;
    let row = 0;
    let col = n - 1;

    // Count elements <= mid.
    while (row < n && col >= 0) {
      if (matrix[row][col] <= mid) {
        count += col + 1;
        row++;
      } else {
        col--;

      }
    }

    if (count < k) {
      // Too few elements <= mid.
      left = mid + 1;
    } else {
      // At least k elements <= mid.
      right = mid;
    }
  }

  return left;
}

//

Minimum Shipping Capacity
LeetCode #1011
↗
Medium

›
details
Ship packages in D days · search the capacity
Given package weights that must be shipped in their given order,
  find the minimum ship capacity such that all packages can be shipped within a given number of days, 
  where each day loads consecutive packages without exceeding the capacity.


function findDaysTo(weights, days, capacity){
  let countDay = 1;
  let countCap = 0;
  for(let weight of weights){
    if(countCap + weight > capacity){
        countDay++;
        countCap = 0;
      
    }
    countCap += weight 
  }
  return countDay <= days;
}


function shipWithInDays(weights, days){

  let low = Math.max(... weights);
  let high = weights.reduce((a,b) => a + b, 0);

  for(let cap = low; cap <= high; cap++){
    if(findDaysTo(weights, days, cap)){

      return cap;
    }
  }
}


// optimized approach 
function daysToShip(weights, days, capacity){
let daysCount = 1;
  let totalCap = 0;
  for (const weight of weights){

    if(totalCap + weight > capacity){

      daysCount++;
      totalCap = 0;
    }
    totalCap += weight;
  }
  return daysCount <= days;
}



function findWithBinaryOptimized(weights, days){

let left = Math.max(...weights);
  let right= weights.reduce((a,b) => a+b, 0);

  while(left<right){
    let mid = Math.floor((right+ left)/2);
    if(daysToShip(weights,days,mid)){
      right= mid;
    } else {
      left  = mid + 1;
    }
    
  }
return left;
  
}
