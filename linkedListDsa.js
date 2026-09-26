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

Why do we use % 10?

This is worth understanding deeply.

Suppose:
sum = 17
We need to put only:
7
inside the current node.
17 % 10
7
And the remaining:
1
becomes the carry.
Math.floor(17 / 10)
gives:
1
So:
17
 ↓
7  ← current digit
1  ← carry
Same idea for:
10
10 % 10 = 0
floor(10 / 10) = 1


function ListNode245(val, next){
 this.val = (val === undefined ? 0 : val);
 this.next = (next === undefined ? null : next);
}
function implementationOfNode(l1, l2){
 let dummy = new ListNode245(0);
 let current = dummy;

let carry = 0;
while(l1 !== null || l2 !== null || carry !== 0){
  let digit1 = l1 !== null ? l1.val : 0;
 let digit2 = l2 !== null ? l2.val : 0;

let sum = digit1 + digit2 + carry;

let digit = (sum % 10);
carry = Math.floor(sum / 10);

current.next = new ListNode245(digit);
current = current.next;

if(l1 !== null){
  l1 = l1.next;
}

if(l2 !== null){
 l2 = l2.next;
}
}
return dummy.next
}


// (((((((***************************

Linked List Cycle
LeetCode #141
↗
Easy

›
details
Floyd's tortoise & hare
Given the head of a singly linked list, determine whether the list contains a cycle, 
meaning some node can be reached again by repeatedly following next pointers.

    brute force visited set approach  

function markedAsDone(head){
 const visited = new Set();
let current = head;
while(current !== null){
  if(visited.has(current)){
  return true;
}

visited.add(current);
current = current.next;

}
return false;
}


while (fast !== null && fast.next !== null)

Because fast moves two steps:

fast = fast.next.next;

We need to make sure those two steps are safe.

Suppose:
1 → 2 → 3 → null
Eventually:
fast → 3
If we blindly do:
fast = fast.next.next;
then:
fast.next → null
and we'd be trying to access:
null.next
So:
fast !== null
and:
fast.next !== null
protect us.
Interview sentence
"Because the fast pointer advances by two nodes, 
I need to ensure both fast and fast.next exist before advancing it."


//


function markOptimised(head){
 let slow = head;
let fast = head;
while(fast !== null && fast.next !== null){
  slow = slow.next;
fast = fast.next.next;
if(fast === slow){
return true;
}
}
return false;
}
// *********************************************************

Remove Nth Node From End
LeetCode #19
↗
Medium

›
details
Two pointers locked n apart
Given the head of a singly linked list, remove the nth node counting from the 
    end of the list and return the head of the modified list.


function removeN(head, n){
let length = 0;
let current = head;
while(current !== null){
length++;
current = current.next;
}

let targetIndex = length - n;
if(targetIndex === 0){
 return head.next;
}
current = head;
for(let i=0; i< target.length - 1; i++){
  current = current.next;
}
current.next = current.next.next;
return head;
}

    FIRST PASS
──────────
Count nodes
     ↓
length = 5

SECOND PASS
───────────
Find where target is
     ↓
targetIndex = length - n
     ↓
Walk to node BEFORE target
     ↓
Stop walking
     ↓
Delete ONCE
     ↓
current.next = current.next.next
//

class ListNode999(value){
this.value = value;
this.next = next;
}

function removeN(head, n){
  let dummy = new ListNode(0);
  dummy.next = head;
let slow = dummy;
let fast = dummy;
for(let i=0;i<n;i++){
fast = fast.next;
}

while(fast.next !== null){
 slow = slow.next;
fast = fast.next;
}

slow.next = slow.next.next;

return dummy.next;

}


// ******************************************

Reorder List
LeetCode #143
↗
Medium
✓ Solved

›
details
Middle + reverse + alternate merge
Given the head of a singly linked list, reorder it in place by interleaving nodes from the front and back so the order becomes 
first, last, second, second-to-last, and so on. Only the node links may be changed, not the values.

function reorderList(head){
const nodes = [];
let current = head;
while(current !== null){
  nodes.push(current);
current = current.next;
}

let left = 0;
let right = nodes.length - 1;

while(right > left){
  nodes[left].next = nodes[right];
 left++;
nodes[right].next = nodes[left];
right--;
}
nodes[left].next = null;
}


What pattern are they asking for?
The original list:
1 → 2 → 3 → 4 → 5
We take:
first → last → second → second-last → ...
Visually:
1 → 2 → 3 → 4 → 5
↑               ↑
first           last
1 → 5
Then:
2 → 4
Then:
3
Combine them:
1 → 5 → 2 → 4 → 3
So this is essentially interleaving the front half and reversed back half.
Important requirement: don't change values
This sentence is very important:
Only the node links may be changed, not the values.
Suppose we have actual nodes:
Node A       Node B       Node C
value: 1     value: 2     value: 3
   ↓            ↓            ↓
  next         next         next
We're not allowed to do something like:
node.value = ...
We're supposed to change:
node.next
So we're actually rearranging the nodes.
What does "in place" mean?
Eventually the optimized solution will rearrange the existing linked-list nodes without creating another list of nodes.
But for our brute-force solution, we're deliberately going to use extra memory:
Linked List
     ↓
[Node1, Node2, Node3, Node4, Node5]
That's your idea:
Put references to all the existing nodes into an array.
This makes the problem much easier to understand.


    // optimized  
function reorderList2(head){
let slow = head;
let fast = head;
while(fast !== null && fast.next !== null){
 slow = slow.next;
fast = fast.next.next;
}
 let second = slow.next;
 slow.next = null;

let prev = null;
let current = second;
// current = 4
while(current !== null){
  let next = current.next;
// next = 5

current.next = prev; // prev=null
prev = current;  //pev = 5
current = next;
}

second = prev;

let first = head;
while(second !== null){
 let firstNext = first.next;
let secondNext = second.next;

first.next = second;
second.next = firstNext;
first = firstNext;
second= secondNext;
}

}


// *************************************************

Swap Nodes in Pairs
LeetCode #24
↗
Medium

›
details
Three arrows per pair · dummy head
Given the head of a singly linked list, swap every two adjacent nodes and return the new head. 
You must swap the actual nodes rather than just their values.

function swapNodes(head){
let nodes = [];
let current = head;
while(current !== null){
 nodes.push(current);
current = current.next;
}
if(nodes.length < 2){
return head;
}

let newHead = nodes[1];
for(let i=0; i+1 <nodes.length; i += 2){
 let first = nodes[i];
let second = nodes[i + 1];

second.next = first;
if(i+3<nodes.length){
  first.next = nodes[i+3]
}else if(i+2<nodes.length){
  first.next = nodes[i+2];
}else{
 first.next = null;
}

}
return newHead;
}


    // 
:: OPTIMIZED SOLUTION

function swapNodes22(head){
  let dummy = new ListNode(0);
dummy.next = head;
let prev = dummy;
while(prev.next !== null && prev.next.next !== null){
  let first = prev.next;
 let second = first.next;
 let nextPair = second.next;

prev.next = second;
second.next = first;
first.next = nextPair;

prev = first;
}
return dummy.next;
}



// *************************************************

LRU Cache
LeetCode #146
↗
Medium
✓ Solved

›
details
Hash map + doubly linked list · O(1) get / put
Design a data structure for a Least-Recently-Used (LRU) cache with a fixed capacity. Support get(key) and put(key, value),
both in O(1) average time. When the cache is full, evict the least-recently-used entry.

class ListNode{
constructor(key, value){
this.key = key;
this.value = value;
this.prev = null;
this.next = null;
}
}

class LRUCache{
constructor(){
 this.capacity = capacity;
 this.map = new Map();

this.head = new ListNode(0, 0);
this.tail = new ListNode(0, 0);

this.head.next = this.tail;
this.tail.prev = this.head
}

addToFront(node){
  node.next = this.head.next;
 node.prev = this.head;

this.head.next.prev = node;
this.head.next = node;
}
remove(node){
 node.prev.next = node.next;
 node.next.prev = node.prev;
}

get(key){
 if(!this.map.has(key)){
  return -1;
}
let node = this.map.get(key);

this.remove(node);
this.addToFront(node);
return node.value;
}

put(key, value){
  if(this.map.has(key)){
  let node =  this.map.get(key);
  node.value = value;

 this.remove(node);
this.addToFront(node);
return;
 }
  const node = new ListNode(key, value);
  this.map.set(key, node);
  this.addToFront(node);
if(this.map.size() > this.capacity){
  let lru = this.tail.prev;

this.remove(lru);
this.map.delete(lru.key);
 }
  
}
}

The entire LRU idea in one sentence

Map finds the node in O(1), while the doubly linked list moves that node between MRU/LRU positions in O(1).

And the most important mental picture to remember is:

                 HashMap
              key ───────► node
                            │
                            ▼
HEAD <-> MRU <-> ... <-> LRU <-> TAIL

Every get() makes the accessed node MRU.
Every new put() makes the new node MRU.
When capacity is exceeded, tail.prev is the LRU node, so we remove it.
