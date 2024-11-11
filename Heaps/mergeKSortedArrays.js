class Node {
  constructor(val, row, col) {
    this.val = val;
    this.row = row;
    this.col = col;
  }
}

class PQ {
  constructor() {
    this.items = [];
  }

  enqueue(x) {
    let contains = false;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].val > x.val) {
        this.items.splice(i, 0, x);
        contains = true;
        break;
      }
    }
    if (!contains) {
      this.items.push(x);
    }
  }

  dequeue() {
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length == 0;
  }
}

function mergeKSortedArrays(arr) {
  // first add row 1 elements to queue and make a min heap
  let pq = new PQ();
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    pq.enqueue(new Node(arr[i][0], i, 0));
  }

  //loop to merge
  while (!pq.isEmpty()) {
    let node = pq.dequeue();
    res.push(node.val);
    if (node.col + 1 < arr[node.row].length) {
      pq.enqueue(new Node(arr[node.row][node.col + 1], node.row, node.col + 1));
    }
  }
  return res;
}

let arr = [
  [3, 5, 9],
  [1, 2, 3, 8],
];
let k = 2;
//op: [1,2,3,3,5,8,9]
console.log(mergeKSortedArrays(arr));
