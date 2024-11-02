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

function checkLength(head1, head2) {
  let temp1 = head1,
    temp2 = head2;
  while (temp1 !== temp2) {
    temp1 = temp1 == null ? head2 : temp1.next;
    temp2 = temp2 == null ? head1 : temp2.next;
  }
  return temp1;
}

//using map
function interSectUsingMap(head1, head2) {
  let newMap = new Map();
  while (head1 != null) {
    newMap.set(head1);
    head1 = head1.next;
  }
  while (head2 != null) {
    if (newMap.has(head2)) {
      return head2.data;
    }
    head2 = head2.next;
  }
  return null;
}

//
let head = null;
head = insertNode(head, 1);
head = insertNode(head, 3);
head = insertNode(head, 1);
head = insertNode(head, 2);
head = insertNode(head, 4); //insert all
let head1 = head;
head = head.next.next.next; // move pointer to node where 2 lists intersect
let headsec = null;
headsec = insertNode(headsec, 3); //second LL
let head2 = headsec;
headsec.next = head; // point both to same node

let lessLen = checkLength(head1, head2);
console.log(lessLen);
let res = interSectUsingMap(head1, head2);
console.log(res);
