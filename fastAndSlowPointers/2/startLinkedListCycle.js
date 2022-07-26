/*
Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
*/

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

const findCycleStart = (head) => {
  let slow = head,
    fast = head,
    cycleDetector = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) break;
  }

  while (cycleDetector !== slow) {
    slow = slow.next;
    cycleDetector = cycleDetector.next;
  }

  return slow;
};

//Time Complexity O(n) => at worst k * O(n) nodes to move through
//Space Complexity O(1) => we only store three additional nodes

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);

head.next.next.next.next.next.next.next = head;
console.log(findCycleStart(head)); // => should return 1

head.next.next.next.next.next.next.next = head.next;
console.log(findCycleStart(head)); // => should return 2

head.next.next.next.next.next.next.next = head.next.next.next.next.next;
console.log(findCycleStart(head)); // => should return 6

head.next.next.next.next.next.next.next = head.next.next.next.next.next.next;
console.log(findCycleStart(head)); // => should return 7
