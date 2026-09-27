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
