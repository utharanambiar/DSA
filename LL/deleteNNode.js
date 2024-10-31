class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function insertNode(head, val) {
  let newNode = new Node(val);
  if (head == null) {
    head = newNode;
    return head;
  }
  let temp = head;
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = newNode;
  return head;
}
function printLL(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

function deleteNFromEnd(head, N) {
  let fast = head;
  for (let i = 0; i < N; i++) {
    fast = fast.next;
  }
  let slow = head;
  if (fast == null) {
    return head.next;
  }
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
}

let head = null;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3); //delete node at pos 2 from behind
head = insertNode(head, 4);

printLL(head);
let res = deleteNFromEnd(head, 4);
console.log("After");
printLL(res);
