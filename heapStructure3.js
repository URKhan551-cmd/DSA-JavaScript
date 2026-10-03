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
