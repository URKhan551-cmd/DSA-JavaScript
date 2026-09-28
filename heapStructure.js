Q: WHAT IS HEAP & MIN & MAX HEAP?
A heap is a special tree-like data structure.

There are two important types:

Min-Heap

The smallest value is always at the top.

        2
       / \
      5   8
     / \
    10  7

The important rule is:

parent <= children

So:

2 <= 5
2 <= 8
5 <= 10
5 <= 7
Therefore 2 is guaranteed to be at the top.

Max-Heap

The largest value is always at the top.

        10
       /  \
      7    8
     / \
    2   5

Rule:

parent >= children

So the maximum value is always immediately accessible.

The surprising part: Heap ≠ Sorted Array

This is very important.

A heap is not completely sorted.

For example, this is a valid min-heap:

        2
       / \
      5   3
     / \
    9   7

Look:

2 < 5
2 < 3

5 < 9
5 < 7

Everything follows the parent-child rule.


                //
        But notice:
5
3
They aren't sorted relative to each other.
So we cannot say:
[2, 3, 5, 7, 9]
from the heap.
The only guarantee we care about is:
the root contains the minimum in a min-heap.
or
The root contains the maximum in a max-heap.



*Heap as a JavaScript array: 
   How is a Heap stored in JavaScript?
Here's another important concept.
Although we visualize a heap as a tree:

        10
       /  \
      7    8
     / \
    2   5

we normally store it inside an array:
[10, 7, 8, 2, 5]
No actual Node objects are necessary.
This works because of the special relationship between indexes.

*The Heap Index Formula

For an element at index:
i
its children are:
(
leftChild  = 2 * i + 1
rightChild = 2 * i + 2
And its parent is:
parent = Math.floor((i - 1) / 2)
)

*Insert into a heap
*Remove from a heap
*A few examples by hand
//

        Let's use:

[10, 7, 8, 2, 5]

Visualize it:

             10
           /    \
          7      8
        /   \
       2     5

Array:

index:   0   1   2   3   4
value:  10   7   8   2   5

For 10:

index = 0;


children:

2(0) + 1 = 1
2(0) + 2 = 2

So:


array[1] = 7
array[2] = 8

Exactly.


INSERTION :
        Let's understand Min-Heap insertion

Suppose we have an empty min-heap.
Insert:
10
We get:
[10]
Tree:
10
Now insert:
5
First, we put it at the end:
[10, 5]
Tree:
    10
   /
  5
But this violates the min-heap rule:
parent <= child
because:
10 > 5
So we bubble up / heapify up.
Swap them:
[5, 10];
NOW VALID;
Insert 7

Put it at the end:
[5, 10, 7]

Tree:

      5
     / \
    10  7

Already valid:
5 < 10
5 < 7
Done.
Insert 2

Put it at the end:

[5, 10, 7, 2]

Tree:

       5
      / \
    10   7
   /
  2

Problem:
5 > 2
Swap:
[5, 2, 7, 10]
Tree:
Tree:

       5
      / \
     2   7
    /
   10

Still problem:

5 > 2

Swap again:

[2, 5, 7, 10]

Now:

       2
      / \
     5   7
    /
   10
The phrase "heapify"

You'll hear this word constantly.

Heapify means restoring the heap property.

For example:

       5
      / \
     2   7
This isn't a valid min-heap because:

5 > 2

We heapify:

       2
      / \
     5   7

Now valid.

There are two directions:
Heapify Up

Usually happens after insertion.

new element
     ↑
     ↑
     ↑
   root

The element moves toward the root.

Heapify Down

Usually happens after removing the root.

root
 ↓
 ↓
 ↓
leaf

We'll get into this carefully.
// ***********************

JavaScript doesn't have a native built-in MinHeap class that we normally use for LeetCode.

So we can build one ourselves.

class MinHeap{
constructor(){
        this.heap = [];
}
        getParentIndex(i){

                return Math.floor((i - 1) / 2);
        }

        getLeftIndex(i){
               return 2 * i + 1; 
        }

        getRightIndex(i){

                return 2 * i + 2;
        }

        insert(value){

                this.heap.push(value);
                let index = this.heap.length - 1;  // the newly added element index position 
                while (index > 0){

                   const parent = this.getParentIndex(index);
                        if(this.heap[parent] <= this.heap[index]){  // yaha values compare ki jati ha 
                          break;
                        }
                        [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];  // ager parent index ki value as compare to index zyada ha to swap karo bhaadi value ko index p karo parent p chooti value karo

                        index = parent;
                }
        }

        removeMin(){
           if(this.heap.length === 0) return undefined;
           if(this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let index = 0;
        while(true){
                let leftIndex = this.getLeftIndex(index);  // return 2 * index + 1
                let rightIndex = this.getRightIndex(index); // return 2 * index + 2

                let smallestIndex = index;

                if(leftIndex < this.heap.length && 
                   this.heap[leftIndex] < this.heap[smallestIndex]){
                        smallestIndex = leftIndex;
                   }
                if(rightIndex < this.heap.length && 
                   this.heap[rightIndex] < this.heap[smallestIndex]){
                        smallestIndex = rightIndex;
                   }

                if(smallestIndex === index ){
                        break;
                }

                [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];

                index = smallestIndex;
        }
        return min;
                
        }
}


const heap = new MinHeap(); // []
minHeap.insert(10);  // [10]
minHeap.insert(5); // [10, 5]   swap [5, 10]
minHeap.insert(8); // [5, 10, 8]   no swap
minHeap.insert(2);  // [2, 5, 8, 10]
minHeap.insert(1);  // [1, 2, 8, 5, 10]
        1
       / \
      2   8
     / \
    10  5

Notice:

heap[0] === 1

The minimum is immediately available.


        // ****************************

        function findKthLargest555(nums, k) {
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

console.log(
    findKthLargest([3, 2, 1, 5, 6, 4], 2)
);

Output:

5

// ***********************

Why Is the Root Guaranteed to Be the Kth Largest?
This is the heart of the proof.
Suppose:
k = 3
At the end, our heap contains:
[10, 20, 30]
These are the three largest values.
Because it's a min-heap:

        10
       /  \
      20  30
The root is:
10
Among the three largest values, 10 is the smallest.
Therefore:

10 = 3rd largest

Generalizing:
heap contains top k
        ↓
root is smallest of top k
        ↓
root is kth largest

Complexity

There are n numbers.

For every number we perform:

insert → O(log k)

If the heap becomes too large:

removeMin → O(log k)

Therefore:

n × O(log k)

Overall:

Time: O(n log k)

The heap contains at most k elements:

Space: O(k)

Compare this with sorting:

Brute force:
Time:  O(n log n)
Space: depends on sorting implementation
Optimized heap:
Time:  O(n log k)
Space: O(k)
This is particularly useful when
k << n
For example:
n = 10,000,000
k = 10
We don't need to maintain a heap containing a million elements.
We maintain:
only 10

Important Edge Cases

k = 1

nums = [3, 2, 1, 5, 6, 4]
k = 1
We maintain only one element.
Eventually:
[6]
Answer: 6

k = nums.length
nums = [3, 2, 1, 5]
k = 4
We keep all four numbers.
The smallest among them is:
1
which is the 4th largest.

Duplicate values
nums = [5, 5, 4, 3]
k = 2
Largest ranks:
5 → 1st
5 → 2nd
Answer:
5
The algorithm handles this naturally.

16. The Pattern You Should Remember
Don't memorize the code first.
Memorize this pattern:
Need TOP K largest
        ↓
Use MIN-HEAP
        ↓
Keep heap size <= K
        ↓
If size > K
        ↓
remove minimum
        ↓
At the end:
heap root = kth largest

And the opposite pattern:
Need TOP K smallest
        ↓
Use MAX-HEAP
        ↓
Keep heap size <= K
        ↓
If size > K
        ↓
remove maximum
        ↓
At the end:
heap root = kth smallest
This is one of the most useful heap patterns for interviews.


      //
        The brute-force approach is to sort the array and return the element
at index n - k, which takes O(n log n). An optimized approach is
to maintain a min-heap containing only the k largest elements. For
every number, I insert it into the heap, and if the heap grows beyond
k, I remove the minimum. This ensures the heap always contains the
top k elements seen so far. At the end, the minimum element in that
heap is the kth largest element. The time complexity is O(n log k)
and the space complexity is O(k)."
