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
