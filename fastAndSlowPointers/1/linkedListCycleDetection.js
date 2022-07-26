/*
Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const hasCycle = (head) => {
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

//Time Complexity O(n) => at worst k * O(n) nodes to move through
//Space Complexity O(1) => we only store two additional nodes

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

console.log(hasCycle(head)); // => should return false

head.next.next.next.next.next.next = new Node(1);
console.log(hasCycle(head)); // => should return false

head.next.next.next.next.next.next = head.next.next;
console.log(hasCycle(head)); // => should return true

head.next.next.next.next.next.next = head;
console.log(hasCycle(head)); // => should return true
