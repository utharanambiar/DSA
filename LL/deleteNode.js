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

function deleteNode(head, dnode) {
  let temp = head;
  while (temp.data != dnode) {
    temp = temp.next;
  }
  temp.data = temp.next.data;
  temp.next = temp.next.next;
  return head;
}

let head = null;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3); //delete node 2

console.log("Before delete");
printLL(head);

head = deleteNode(head, 2);

console.log("After delete");
printLL(head);
