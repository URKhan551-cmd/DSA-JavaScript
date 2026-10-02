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
