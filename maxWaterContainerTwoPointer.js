Optimized Approach 
TWO POINTER
MAX WATER CONTAINER 

function maxWaterContainer(arr){
  let maxWater = 0;
  let i = 0;
  let j = arr.length - 1;
  
  while(i < j){
    let height = Math.min(arr[i], arr[j]);
    let width = j - i;

    let area = height * width;

    maxWater = Math.max(maxWater, area);

    arr[i] < arr[j] ? i++ : j--;
    
  }

  return maxWater;
};

// This is the core insight behind the O(n) solution.
// The area is:
// area = shorter height × width
// When you move either pointer inward, width always decreases.
// Therefore, if the left side is shorter:
// left = 2
// right = 8
// area = 2 × width
// Moving the right pointer cannot make the height greater than 2 because the left side is still 2.


// So there's no point keeping that left boundary.
// You move the shorter boundary and hope to find a taller line:
// arr[i] < arr[j] ? i++ : j--;
// That's why your approach changes the brute force:
// Brute force:
// check every pair
// O(n²)
// Two pointers:
// eliminate impossible pairs
// O(n)
// So yes, after changing i and j to indexes, your solution is correct and is the optimal approach.
