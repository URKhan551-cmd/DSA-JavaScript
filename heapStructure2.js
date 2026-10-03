K Closest Points to Origin
LeetCode #973
↗
Medium

›
details
Max-heap of size k, keyed by distance
Given an array of points on the plane and a value k, return 
  the k points closest to the origin, measured by Euclidean distance. The answer may be returned in any order.
  
  function kclosestPoints(arr, k) {
  if (k <= 0) return [];
  if (k >= arr.length) return arr;

  return arr
    .map(point => ({
      point,
      dist: point[0] * point[0] + point[1] * point[1]
    }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, k)
    .map(item => item.point);
}


function kclosestPoints22(arr, k){
 let n = arr.length;
if(n < 0) return [];
arr.sort((a,b) => {
 let distanceA = a[0] * a[0] + a[1] * a[1];
let distanceB = b[0] * b[0] + b[1] * b[1];

return distanceA - distanceB;
})
return arr.slice(0, k);
}


// max heap by ourown 

class MaxHeap{

  constructor(){
   this.heap = [];
 }

getParentIndex(){
   return Math.floor((index - 1) / 2); 
 }


getLeftIndex(){
   return index * 2 + 1;
  }

getRightIndex(){
   return index * 2 + 2;
 }

peek(){
 return this.heap[0];
}

size(){
  return this.heap.length;
}

insert(item){
 this.heap.push(item);

let index = this.heap.length - 1;  // last element

while(index > 0){
   let parentIndex = getParentIndex(index);

  if(this.heap[parentIndex].distance > this.heap[index].distance ){
      break;
     }

[this.heap[parentIndex], this.heap[index]] 
= 
[this.heap[index], this.heap[parentIndex]];

index = parentIndex;

 }
}


removeMax(){
  if(this.heap.length === 0) { return undefined; }

if(this.heap.length === 1){return this.heap.pop()};


let max = this.heap[0];

this.heap[0] = this.heap.pop();
let index = 0;
 
while(true){
  let leftIndex = this.getLeftIndex(index);
 let rightIndex = this.getRightIndex(index);
let largestIndex = index;

if( leftIndex < this.heap.length &&  
    this.heap[leftIndex].distance > this.heap[largestIndex].distance 
   ){  
    largestIndex = leftIndex  
   }

if(rightIndex < this.heap.length && 
   this.heap[rightIndex].distance > this.heap[largestIndex].distnace  ){

    largestIndex = rightIndex;
   }

if(largestIndex === index){
   break;
   }

[this.heap[index], this.heap[largestIndex]] 
=
 [this.heap[largestIndex], this.heap[index]];

index = largestIndex;
} 

return max;
}
}

// optimized approach 
function kClosest(points, k) {
    const maxHeap = new MaxHeap();

    for (const point of points) {
        const [x, y] = point;

        const distance = x * x + y * y;

        maxHeap.insert({
            point,
            distance
        });

        if (maxHeap.size() > k) {
            maxHeap.removeMax();
        }
    }

    return maxHeap.heap.map(item => item.point);
}

// ****************************************************

Kth Largest Element in an Array
LeetCode #215
↗
Medium
✓ Solved

›
details
Min-heap of size k as a top-k gate
Given an integer array and a value k, return the kth largest element by rank in sorted order, 
  which need not be a distinct value.

  function kthLargest(arr, k){
 let n = arr.length;
  if(n < k  || n <=0) return [];
let sortArr = arr.sort((a, b) => a-b);
let target = arr[n - k];
return target;

}


  
// optimized appproach 

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChildIndex(index) {
        return index * 2 + 1;
    }

    getRightChildIndex(index) {
        return index * 2 + 2;
    }

    peek() {
        return this.heap[0];
    }

size() {
        return this.heap.length;
    }

    insert(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = this.getParentIndex(index);

            if (this.heap[parentIndex] <= this.heap[index]) {
                break;
            }

            [this.heap[parentIndex], this.heap[index]] =
            [this.heap[index], this.heap[parentIndex]];

            index = parentIndex;
        }
    }
  
  removeMin() {
        if (this.heap.length === 0) {
            return undefined;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const min = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            const leftIndex = this.getLeftChildIndex(index);
            const rightIndex = this.getRightChildIndex(index);

            let smallestIndex = index;

if (
                leftIndex < this.heap.length &&
                this.heap[leftIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = leftIndex;
            }

            if (
                rightIndex < this.heap.length &&
                this.heap[rightIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = rightIndex;
            }

            if (smallestIndex === index) {
                break;
            }

            [this.heap[index], this.heap[smallestIndex]] =
            [this.heap[smallestIndex], this.heap[index]];

            index = smallestIndex;
        }
      return min;
    }
}



function findKthLargest(nums, k) {
    const minHeap = new MinHeap();

    for (const num of nums) {
        minHeap.insert(num);

        if (minHeap.size() > k) {
            minHeap.removeMin();
        }
    }

    return minHeap.peek();
}

Test:


// ¢$$$$$$$$


// Prob 

Find K Closest Elements
LeetCode #658
↗
Medium

›
details
Max-heap keyed by (distance, value)
Given a sorted array, a value k, and a target x, 
  return the k elements closest to x as a sorted list. When two elements are equally close, prefer the smaller one

const arr = [1, 2, 3, 4, 5];
const k = 4;
const x = 3;

const candidates = [];

for (let num of arr) {
    const distance = Math.abs(num - x);

    candidates.push({
        value: num,
        distance: distance
    });
}

console.log(candidates);

We get conceptually:

[
    { value: 1, distance: 2 },
    { value: 2, distance: 1 },
    { value: 3, distance: 0 },
    { value: 4, distance: 1 },
    { value: 5, distance: 2 }
]

Now we have transformed the original problem into a ranking problem.

  candidates.sort((a, b) => {
    return a.distance - b.distance;
});

Now:

[
    { value: 3, distance: 0 },
    { value: 2, distance: 1 },
    { value: 4, distance: 1 },
    { value: 1, distance: 2 },
    { value: 5, distance: 2 }
]


  candidates.sort((a, b) => {
    if (a.distance !== b.distance) {
        return a.distance - b.distance;
    }

    return a.value - b.value;
});

Now the ordering is explicitly:

distance ↑
    ↓
value ↑ when distance ties

[
    { value: 3, distance: 0 },
    { value: 2, distance: 1 },
    { value: 4, distance: 1 },
    { value: 1, distance: 2 },
    { value: 5, distance: 2 }
]

k = 4.

Therefore:

const result = candidates
    .slice(0, k)
    .map(item => item.value);

[3,2,4,1]
// but problem wants sorted
result.sort((a, b) => a - b);

Now:

[1, 2, 3, 4]



function findClosestElements(arr, k, x) {
    const candidates = [];

    // 1. Calculate distance for every element
    for (let num of arr) {
        const distance = Math.abs(num - x);

        candidates.push({
            value: num,
            distance: distance
        });
    }

    // 2. Sort by distance
    //    If distance ties, smaller value first
    candidates.sort((a, b) => {
        if (a.distance !== b.distance) {
            return a.distance - b.distance;
        }

return a.value - b.value;
    });

    // 3. Take k closest elements
    const result = candidates
        .slice(0, k)
        .map(item => item.value);

    // 4. Return them sorted
    result.sort((a, b) => a - b);

    return result;
}


// Optimized approach 
In pseudocode:

FOR each number in arr:
    calculate its distance from x

    IF heap size < k:
        insert candidate

    ELSE IF candidate is better than heap root:
        remove the root
        insert candidate

    ELSE:
        ignore candidate


Implement the max-heap in JavaScript

JavaScript doesn't provide a built-in binary max-heap, so we'll implement the data structure ourselves. This is useful for understanding the heap operations rather than hiding them inside a library.

We'll write three main pieces:

push() — insert a candidate and bubble it up.

pop() — remove the worst candidate and restore the heap.

peek() — inspect the root without removing it.

  
  
//   function isWorse(a, b) {
//     if (a.distance !== b.distance) {
//         return a.distance > b.distance;
//     }

//     return a.value > b.value;
// }
  
  
  class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Is a above b in our "worse candidate" ordering?
    isGreater(a, b) {
        if (a.distance !== b.distance) {
            return a.distance > b.distance;
        }

        return a.value > b.value;
    }

    insert(item) {
        this.heap.push(item);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (!this.isGreater(this.heap[index], this.heap[parentIndex])) {
                break;
            }
          [this.heap[index], this.heap[parentIndex]] =
                [this.heap[parentIndex], this.heap[index]];

            index = parentIndex;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

    while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let largest = index;

            if (
                left < this.heap.length &&
                this.isGreater(this.heap[left], this.heap[largest])
            ) {
                largest = left;
            }

            if (
                right < this.heap.length &&
                this.isGreater(this.heap[right], this.heap[largest])
            ) {
                largest = right;
            }

            if (largest === index) {
                break;
            }
         
            [this.heap[index], this.heap[largest]] =
                [this.heap[largest], this.heap[index]];

            index = largest;
        }

        return max;
    }
}
  

// ACTUAL IMPLEMENTATION    according to isWorse function 
          function findClosestElements(arr, k, x) {
    const heap = new MaxHeap();

    for (const num of arr) {
        const candidate = {
            value: num,
            distance: Math.abs(num - x)
        };

        // We still have an empty slot.
        if (heap.size() < k) {
            heap.push(candidate);
        }

        // The new candidate is better than the worst one.
        else if (isWorse(heap.peek(), candidate)) {
            heap.pop();
            heap.push(candidate);
        }

        // Otherwise, ignore the candidate.
    }
// Extract the selected values.
    const result = [];

    while (heap.size() > 0) {
        result.push(heap.pop().value);
    }

    // The problem requires ascending order.
    result.sort((a, b) => a - b);

    return result;
}


// implementation according to class has isGreater() METHOD
 function findClosestElements(arr, k, x) {
    const heap = new MaxHeap();

    for (const value of arr) {
        const distance = Math.abs(value - x);

        heap.insert({
            value,
            distance
        });

        if (heap.heap.length > k) {
            heap.pop();
        }
    }

    const answer = heap.heap.map(item => item.value);

    answer.sort((a, b) => a - b);

    return answer;
}
