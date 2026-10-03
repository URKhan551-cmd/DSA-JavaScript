Merge K Sorted Lists
LeetCode #23
↗
Hard

›
details
Min-heap of the k current heads
Given an array of k linked lists, each sorted in ascending order, 
  merge them into a single sorted linked list and return its head.

  *** BRUTE FORCE APPROACH ***
class NodeList{
 constructor(val=0, next= null){
  this.val = val;
  this.next = next;
}
}

function mergeSort(lists){
  let values = [];
  for(let list of lists){
   let current = list;

  while(current !== null){
  values.push(current.val);
  current = current.next;
}
}
values.sort((a, b) => a - b);
let dummy = new ListNode(0);
let tail = dummy;
for(let value of values){
  tail.next = new ListNode(value);
  tail = tail.next
}
return dummy.next;
}
//

class MinHeap{
  constructor(){
   this.heap = [];
}

// Smallest element is always at index[0];

peek() {
    return this.heap[0];
}


push(node) {
    this.heap.push(node);

    let index = this.heap.length - 1;

    while (index > 0) {

        const parentIndex = Math.floor((index - 1) / 2);

        if (this.heap[parentIndex].val <= this.heap[index].val) {
            break;
        }

        [this.heap[parentIndex], this.heap[index]] =
        [this.heap[index], this.heap[parentIndex]];

        index = parentIndex;
    }
}

// Now the important one: pop() We want: remove smallest
// heap[0]  Suppose:
 //       1
  //     / \
   //   3   2
   //  / \
 //   7   5

// We need to remove 1.   But if we simply delete index 0, we'd create a hole.

pop() {
    if (this.heap.length === 0) {
        return null;
    }
    if (this.heap.length === 1) {
        return this.heap.pop();
    }
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;
    while (true) {
        const left = 2 * index + 1;
        const right = 2 * index + 2;
        let smallest = index;
}
if (
            left < this.heap.length &&
            this.heap[left].val < this.heap[smallest].val
        ) {
            smallest = left;
        }
        if (
            right < this.heap.length &&
            this.heap[right].val < this.heap[smallest].val
        ) {
            smallest = right;
        }
        if (smallest === index) {
            break;
        }
        [this.heap[index], this.heap[smallest]] =
        [this.heap[smallest], this.heap[index]];
        index = smallest;
    }
return min;

 isEmpty() {
        return this.heap.length === 0;
    }
}



function mergeKLists99(lists) {

    const heap = new MinHeap();

    // Put the first node of every list
    // into the heap.
    for (const list of lists) {

        if (list !== null) {
            heap.push(list);
        }
    }

    const dummy = new ListNode(0);
    let tail = dummy;

    while (!heap.isEmpty()) {

        // Get the smallest current node.
        const node = heap.pop();

        // Attach it to our answer.
        tail.next = node;
        tail = tail.next;
    // This list still has nodes.
        // Expose its next node to the heap.
        if (node.next !== null) {
            heap.push(node.next);
        }
    }

    return dummy.next;
}
