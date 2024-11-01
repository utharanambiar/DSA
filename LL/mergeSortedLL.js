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

function printLL(head) {
  while (head != null) {
    console.log(head.data);
    head = head.next;
  }
}

function mergeSort(head1, head2) {
  let temp1 = head1,
    temp2 = head2;
  let dummy = new Node(-1);
  let tempp = dummy;
  while (temp1 != null && temp2 != null) {ṇ
    if (temp2.data > temp1.data) {
      dummy.next = temp1;
      temp1 = temp1.next;
    } else if (temp2.data < temp1.data) {
      dummy.next = temp2;
      temp2 = temp2.next;
    } else {
      dummy.next = temp;
      dummy.next.next = temp1;
      temp2 = temp2.next;
      temp1 = temp1.next;
    }
    dummy = dummy.next;
  }
  if (temp1 != null) {
    dummy.next = temp1;
    dummy = dummy.next;
  }
  if (temp2 != null) {
    dummy.next = temp2;
    dummy = dummy.next;
  }
  return tempp.next;
}

let head1 = null,
  head2 = null;
head1 = insertLL(head1, 2);
head1 = insertLL(head1, 4);
head1 = insertLL(head1, 8);
head1 = insertLL(head1, 10);
head2 = insertLL(head2, 1);
head2 = insertLL(head2, 3);
head2 = insertLL(head2, 3);
head2 = insertLL(head2, 6);
head2 = insertLL(head2, 11);
head2 = insertLL(head2, 14);

// printLL(head1);
// printLL(head2);

let res = mergeSort(head1, head2);

printLL(res);
