class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function insertLL(head, val) {
  let temp = head;
  let node = new Node(val);
  if (head == null) {
    head = node;
    return head;
  }
  while (temp.next != null) {
    temp = temp.next;
  }
  temp.next = node;
  return head;
}

function reverseLL(head) {
  let prev = null,
    curr = head,
    newNode;
  while (curr != null) {
    newNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = newNode;
  }
  return prev;
}

function middleLL(head) {
  let fast = head,
    slow = head;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function isPalindrome(first, second) {
  while (second != null) {
    if (first.data != second.data) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
}
let head = null;
head = insertLL(head, 2);
head = insertLL(head, 4);
head = insertLL(head, 8);
head = insertLL(head, 8);
head = insertLL(head, 4);
head = insertLL(head, 2);

let first = head;

let mid = middleLL(head);

let second = reverseLL(mid);

let res = isPalindrome(first, second);

console.log(res);
