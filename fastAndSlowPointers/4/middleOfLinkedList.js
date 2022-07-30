/*
Given the head of a Singly LinkedList, write a function to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const linkedListMiddlePoint = (head) => {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

//Time Complexity O(n) => at worst k * O(n) nodes to move through
//Space Complexity O(1) => we only store two additional nodes

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(linkedListMiddlePoint(head).value); // should return 4

head.next.next.next.next.next.next = new Node(7);

console.log(linkedListMiddlePoint(head).value); // should return 4

head.next.next.next.next.next.next.next = new Node(8);
console.log(linkedListMiddlePoint(head).value); // should return 5
