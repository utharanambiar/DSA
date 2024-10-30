class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function addLL(l1, l2) {
  let carry = 0;
  let dummy = new Node(0);
  let temp = dummy;
  while (l1 != null || l2 != null || carry) {
    let sum = 0;
    if (l1 != null) {
      sum += l1.data;
      l1 = l1.next;
    }
    if (l2 != null) {
      sum += l2.data;
      l2 = l2.next;
    }
    sum = sum + carry;
    carry = Math.floor(sum / 10);
    let node = new Node(sum % 10);
    temp.next = node;
    temp = temp.next;
  }
  return dummy.next;
}

function printLinkedList(head) {
    let temp = head;
    while (temp !== undefined) {
      console.log(temp.data + " ");
      temp = temp.next;
    }
    console.log();
  }

const l1 = new Node(1);
l1.next = new Node(2);
l1.next.next = new Node(3);
//let res1 = reverseLL(l1);

const l2 = new Node(1);
l2.next = new Node(2);
l2.next.next = new Node(3);
//let res2 = reverseLL(l2);

let res3 = addLL(l1, l2);

printLinkedList(res3);
