Building a complete linked list manually

10 → 20 → 30 → 40 → null

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let node1 = new ListNode(10);
let node2 = new ListNode(20);
let node3 = new ListNode(30);
let node4 = new ListNode(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;



//********************************

Reverse Linked List
LeetCode #206
↗
Easy
✓ Solved

›
details
Flip every arrow · prev / curr / next
Given the head of a singly linked list, reverse the list and return the new head.

    function linkedReverse(head){
 let current = head;
let prev = null;

while(current !== null){
  let next = current.next; // current k next ko sambhal k 
                                state m raka.
  current.next = prev;   // usi current k next ko null banaya.
  prev = current;         // prev pehle null ta ab humne current 
                             //  ki value assign kiya prev= 1;
  current = next;        // ab ye point next wale position p chala
                           // jayega aur phir loop check hoga run hoga.
}
return prev;
}


// 

OPTIMIZED RECURSIVE APPROACH 

function recursiveLink1(head){
  if(head === null || head.next === null ){  // until unless the recursive call happen
  return head;                              // when head =null stop /  or head.next=null stop.
}

let newHead = recursiveLink(head.next); 
 
// if i do have  12345 with each head recursive call
// happen for head = 1  recursive call for 1 > 2 head.next
// second recursive call  head=2 head.next = 3
// third call with head=3 and head.next =4
// fourth call head=4 and head.next = 5
// fith call with head= 5 head.next = null stopppppp

// stack is full of recursive call now pop happen
// the last one call with head=4 head.next =5 now
// head.next =5  then head.next.next = nullbut put head = 4

head.next.next = head;
head.next = null; //  porane head.next ko null karo ab naya head 

return newHead;
 }


// **********************************************


Merge Two Sorted Lists
LeetCode #21
↗
Easy

›
details
Splice the smaller head · dummy node
Merge two sorted linked lists into one sorted list by splicing their nodes together, and return its head.

    function sorted(list1, list2){
let values = [];
let current = list1;
while(current !== null){
 values.push(current.value);
 current = current.next;
}

current = list2;
while(current !== null){
 values.push(current.value);
current = current.next;
}

values.sort((a,b) => a - b);
let dummy = new ListNode(0);
let currentNew = dummy;

for(let val of values){
  currentNew.next = new ListNode(val);
 currentNew = currentNew.next;
}

return dummy.next;
}
