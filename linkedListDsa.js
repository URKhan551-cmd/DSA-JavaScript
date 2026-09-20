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
