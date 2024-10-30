class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function reverseLL(head) {
  let curr = head,
    prev = null,
    nextNode;
  while (curr != null) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

function printLinkedList(head) {
  let temp = head;
  while (temp !== null) {
    console.log(temp.data + " ");
    temp = temp.next;
  }
  console.log();
}

// Create a linked list with
// values 1, 3, 2, and 4
const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);

let res = reverseLL(head);
printLinkedList(res);
