class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function detectLoop(head) {
  let fast = head,
    slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      return true;
    }
  }
  return false;
}

const head = new Node(1);
const second = new Node(2);
const third = new Node(3);
const fourth = new Node(4);
const fifth = new Node(5);

head.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;
fifth.next = null;

const res = detectLoop(head);
console.log(res);
