class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function reverseLL(head) {
  let curr = head,
    prev = null,
    nextNode = null;
  while (curr !== null) {
    nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;
}

function printLinkedList(head) {
  let temp = head;
  while (temp !== null && temp) {
    console.log(temp.data + " ");
    temp = temp.next;
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

function getKthNode(temp, k) {
  k = k - 1;
  while (temp !== null && k > 0) {
    temp = temp.next;
    k--;
  }
  return temp;
}

//k is how many in a block
function reverseK(head, k) {
  let temp = head,
    prevLast = null;

  while (temp !== null) {
    let kThNode = getKthNode(temp, k);

    if (kThNode == null) {
      if (prevLast) {
        prevLast.next = temp;
      }
      break;
    }

    let nextNode = kThNode.next;
    kThNode.next = null;

    reverseLL(temp);

    // Connect the last reversed group's last node to the current reversed head
    if (temp === head) {
      head = kThNode;
    } else {
      prevLast.next = kThNode;
    }

    prevLast = temp;
    temp = nextNode;
  }
  return head;
}

let head = null;
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 3);
head = insertNode(head, 4);
head = insertNode(head, 5);
head = insertNode(head, 6);
head = insertNode(head, 7);
head = insertNode(head, 8);

let newHead = reverseK(head, 3);

printLinkedList(newHead);
