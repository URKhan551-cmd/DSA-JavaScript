Binary Search
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



 function linearSearch(arr, target){
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
