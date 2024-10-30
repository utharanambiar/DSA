class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function middleLL(head){
    let fast = slow = head;
    while(slow && fast && fast.next!=null) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow.data
}

const head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(2);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

let res = middleLL(head)
console.log(res)