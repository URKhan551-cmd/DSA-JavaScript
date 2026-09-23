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


//

function sorted22(list1, list2){
let dummy = new ListNode(0); // aik object link banayega 0 se
let tail = dummy;    usko tail allocate kiya.

let pt1 = list1;
let pt2 = list2;

while(pt1 !== null && pt2 !== null){
// her point pa or node pa dono point ma jo bi kam 
// hoga wahi hum assig karenge tail.next ko
 if(pt1.val <= pt2.val){  
  tail.next = pt1;
  pt1 = pt1.next;
  // yaha pt1 hamare sath aik point aage chala jayega 
   // take loop dobara check kare upcoming nodes ko.
} else {
  tail.next = pt2;
  pt2 = pt2.next;
}
tail = tail.next;
// last ma tail ka jo bi next pa node hoga usko hum tail 
  // consider karte ha issi tarah tail move karega aage.
}

if(pt1 !== null){
tail.next = pt1;
} else {
  tail.next = pt2;
}
return dummy.next
// yaha dummy jo k 0 node ha uska jo bi next hoga
// woo to ya pt1 ka small node hoga
// ya to pt2 ka small node hoga 

}


    // ******************************
Add Two Numbers
LeetCode #2
↗
Medium

›
details
Elementary addition · carry
Two non-negative numbers are stored as linked lists of digits in reverse order. 
    Add them and return the sum as a linked list, also in reverse order.



 Because the digits are stored in reverse order:

l1 represents 342
l2 represents 465
So:
342
+465
---
807
The answer must also be reversed:
[7 → 0 → 8]

The most important mental model
Don't think:
"I'm adding two linked lists."
Think:
"At every position, I'm performing one elementary-school addition."
Each iteration is:
       digit1
     + digit2
     + carry
     --------
       sum
Then split sum into:
       sum
                /     \
               /       \
          digit          carry
        sum % 10      floor(sum / 10)

So the algorithm is essentially:
while something remains:
    get digit from l1
    get digit from l2
    add:
        digit1
        digit2
        carry

    extract:
        current digit
        new carry
create result node
    move l1
    move l2

