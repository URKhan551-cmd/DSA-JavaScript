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

