



//Binary Search
LeetCode #704
↗
Easy

›
details
The canonical template · halve [lo, hi]
Given a sorted array of distinct integers and a target, 
return its index, or −1 if it is not present. Must run in O(log n).



function binarySearch(arr, target){
 if(arr.length === 0)return [];
let low = 0;
let high = arr.length - 1;

while(low <= high){
 let mid = Math.floor((low+high) / 2);
if(arr[mid] === target) {
 return mid;
} else if (arr[mid] < target){
  low= mid+1;
 hi = arr.length -1;
} else if(arr[mid] > target){
  low= low;
  hi= mid - 1;
} 

}

return -1;
}


 // *************

Search Insert Position
LeetCode #35
↗
Easy
✓ Solved

›
details
Where lo lands when the target is missing
Given a sorted array of distinct integers and a target, return the index of the target. If it is not present, 
return the index where it would be inserted to keep the array sorted. Must run in O(log n).
Understand the problem first

Suppose:

nums = [1, 3, 5, 6]
target = 5
Target exists:

index:  0  1  2  3
value:  1  3  5  6
              ↑

Answer:

2
But now:
nums = [1, 3, 5, 6]
target = 2
There is no 2.
Where could we insert it while keeping the array sorted?
[1, 2, 3, 5, 6]
    ↑
So answer is:
1
Notice something interesting: we don't actually have to insert anything. 
We only need to return the index where insertion would happen.
The key concept: low eventually lands on the answer

This is the big idea of #35.

In #704, when we can't find the target, we return:
-1
In #35, when we can't find it, we don't say:
"I failed."
Instead we ask:
"Where did my search stop?"
Consider:
nums = [1, 3, 5, 6]
target = 2
Initially:
low = 0
high = 3

Eventually the search space becomes empty:
low = 1
high = 0
Notice:
low > high
The search is finished.
But low is now:
1
And index 1 is exactly where 2 belongs.
So the important interview insight is:
When searching for an insertion position, low becomes the first valid position for the target.



 function biSearchInsertion(arr, target){
 let low = 0;
let high = arr.length - 1;
while(low <= high){
 let mid = Math.floor((low + high) / 2);
if(arr[mid] < target){
 low = mid + 1;
} else {
 high = mid-1;
}
}
return low;
}


 function linearSearch(arr, target){
for(let i=0;i<arr.length;i++){ 
if(arr[i] >= target){
 return i;
}
}
return arr.length;
}



//

 Peak Index in a Mountain Array
LeetCode #852
↗
Medium

›
details
Binary search without a sorted array
An array rises strictly to a single peak and then falls strictly away from it. Return the index of that peak in O(log n) time.


 function peakIndexInMountainArray(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }

  return -1;
}

console.log(peakIndexInMountainArray([0, 2, 5, 8, 6, 3, 1]));
// 3


Can we make the linear solution even simpler?
yes. The mountain property gives us another way to recognize the peak: the peak is the element immediately before the array starts decreasing.
We can compare adjacent elements:

function peakIndexInLinear(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return i;
    }
  }

  return -1;
}



function peakIndexInBinary(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // We are climbing: peak is to the right
      left = mid + 1;
    } else {
      // We are descending: peak is at mid or to the left
      right = mid;
    }
  }

  return left;
}

console.log(peakIndexInMountainArray([1, 3, 5, 7, 6, 4, 2]));
// Output: 3



 //
Maximum Candies Allocated to K Children
LeetCode #2226
↗
Medium

›
details
Binary search the answer, not the array
You have piles of candies and k children. A pile may be split into equal sub-piles, and leftovers are discarded; piles cannot be combined.
 Find the largest number of candies each child can receive, or 0 if it is impossible.
