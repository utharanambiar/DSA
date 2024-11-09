class MinHeap {
  constructor() {
    this.arr = [];
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  getMin() {
    return this.arr[0];
  }

  insertK(k) {
    let arr = this.arr;
    arr.push(k);
    let i = arr.length - 1;
    while (i > 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i);
      [arr[this.parent(i)], arr[i]] = [arr[i], arr[this.parent(i)]];
      i = p;
    }
  }

  minHeapify(i) {
    let arr = this.arr;
    let n = arr.length;
    if (n === 1) {
      return;
    }
    let smallest = i;
    let l = this.left(i);
    let r = this.right(i);
    if (l < n && arr[l] < arr[smallest]) {
      smallest = l;
    }
    if (r < n && arr[r] < arr[smallest]) {
      smallest = r;
    }
    if (smallest != i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      this.minHeapify(smallest);
    }
  }

  extractMin() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop();
    }
    let res = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.minHeapify(0);
    return res;
  }

  decreaseKey(i, val) {
    let arr = this.arr;
    arr[i] = val;

    while (i !== 0 && arr[this.parent(i)] > arr[i]) {
      let p = this.parent(i);
      [arr[i], arr[p]] = [arr[p], arr[i]];
      i = p;
    }
  }

  deleteKey(i) {
    let arr = this.arr
    this.decreaseKey(i, arr[0] - 1);
    this.extractMin();
  }
}

let h = new MinHeap();
h.insertK(3);
h.insertK(2);
h.deleteKey(1);
h.insertK(15);
h.insertK(5);
h.insertK(4);
h.insertK(45);

console.log(h.extractMin() + " ");
console.log(h.getMin() + " ");
console.log(h);
h.decreaseKey(2, 1);
console.log(h.extractMin());
console.log(h);
