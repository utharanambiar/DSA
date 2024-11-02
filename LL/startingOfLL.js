class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function cycleInLL(head) {
  let fast = head,
    slow = head,
    temp = head;
  while (fast && slow && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast == slow) {
      slow = temp;
      while (fast != slow) {
        fast = fast.next;
        slow = slow.next;
      }
      return slow;
    }
  }
  return null;
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
fifth.next = third;

let isLoop = cycleInLL(head);

console.log(isLoop);
