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
