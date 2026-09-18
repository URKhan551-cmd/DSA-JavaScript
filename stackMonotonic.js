What does "Monotonic Stack" mean?
A monotonic stack is simply:
A stack that we deliberately(puely intentionaly) keep ordered while we process elements.
Normal stack:
push whatever comes i
Monotonic stack:
push an element
↓
but first remove elements that violate our desired order

then push the new element
But a monotonic stack lets us remember the elements that are still waiting for their answer.
That's where this phrase comes from:
"Bigger arrivals resolve the waiters."

Let's start with a classic problem
Next Greater Element
Given:
[2, 1, 5, 3, 4]
For every element, find the first greater number to its right.
Expected:
2 → 5
1 → 5
5 → -1
3 → 4
4 → -1
Result:
[5, 5, -1, 4, -1]
Now change your perspective
Instead of asking:
"What is the next greater element for this number?"
ask:
"Which previous numbers are currently waiting for a greater number?"
This is the mental shift that makes monotonic stacks click.
So:
5
↓
resolves 1
↓
resolves 2
The while keeps resolving waiters until the top is no longer smaller.


  function monotonic1(arr){
 let stack =[];
let result = new Array(arr.length).fill(-1);

for(let i=0; i<arr.length;i++){
  let current = arr[i];

  while(stack.length > 0 && stack[stack.length -1] < current){
  let prev = stack.pop();
}
stack.push(current)
}
return result;
}

But there's a problem.
We're only storing values.
We don't know where those values came from.
For DSA problems, we usually need the index.
So let's improve it.
* here we are not updating result 



function monotonic2(arr){
 let stack =[];
let result = new Array(arr.length).fill(-1);

for(let i=0; i<arr.length;i++){
  let current = arr[i];

  while(stack.length > 0 && arr[stack[stack.length -1]] < current){
  let prev = stack.pop();
  result[prev] = current;
}
stack.push(i);
}
return result;
}

Understand this strange-looking expression
This:
nums[stack[stack.length - 1]]
looks ugly at first.
Break it apart.
Suppose:
stack = [0, 1]
Then:      
stack.length
is:
2
So:
stack.length - 1
is:
1
Therefore:  stack[stack.length - 1]  => stack[1]
which is:  0 or 1 depending on stac  Suppose it is: 1
Then: nums[1]   gets the actual number.
So: nums[stack[stack.length - 1]] means:  "Give me the value at the index stored at the top of the stack."


  //* *****************************************************************

  Daily Temperatures
LeetCode #739
↗
Medium

›
details
Monotonic stack · new days resolve waiting days
Given an array of daily temperatures, return an array where each entry is the number of 
days you must wait after that day to encounter a warmer temperature. Use 0 if no warmer day ever follows.

  function dailyTemp(arr){
let n = arr.length;
if(n === 0) return [];
const stack = [];
let result = new Array(n).fill(0);
for(let i=0;i<n;i++){
 for(let j=i+1; j<n;j++){
   if(arr[i] < arr[j]){
    result[i] = j - i;
break;
  }
}
}
return result;
}

For each day i, look ahead to every future day j.
If temperatures[j] > temperatures[i], store j - i and stop looking.
If no warmer day is found, it stays 0.
Complexity:
Time: O(n^2)
Space: O(1) extra, aside from the result array


//
function dailyTemp2(arr){
let n = arr.length;
if(n === 0) return [];
const stack = [];
let result = new Array(n).fill(0);
for(let  i=0;i<n;i++){
  while(stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]){
 let prev = stack.pop();
 result[prev] = i - prev; 
}
stack.push(i);
}
return result;
}
