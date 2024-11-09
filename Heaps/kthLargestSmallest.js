class Heap {
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

  extractMin() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop();
    }
    let res = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.minHeap(0);
    return res;
  }

  extractMax() {
    let arr = this.arr;
    if (arr.length == 1) {
      return arr.pop();
    }
    let res = arr[0];
    arr[0] = arr[arr.length - 1];
    arr.pop();
    this.maxHeap(0);
    return res;
  }

  getKthSmallest(k) {
    let res;
    while (k > 0) {
      res = this.extractMin();
      k--;
    }
    return res;
  }

  getKthLargest(k) {
    let res;
    while (k > 0) {
      res = this.extractMax();
      k--;
    }
    return res;
  }

  minHeap(i) {
    let arr = this.arr;
    let smallest = i;
    let n = arr.length - 1;
    if (n == 1) {
      return arr[0];
    }
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
      this.minHeap(smallest);
    }
  }

  maxHeap(i) {
    let arr = this.arr;
    let largest = i;
    let n = arr.length;  // Use arr.length directly

    // Edge case for a single element
    if (n <= 1) return arr[0];
    let l = this.left(i);
    let r = this.right(i);

    if (l < n && arr[l] > arr[largest]) {
      largest = l;
    }
    if (r < n && arr[r] > arr[largest]) {
      largest = r;
    }
    if (largest != i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      this.maxHeap(largest);
    }
  }
}

let h = new Heap();
h.insertK(3);
h.insertK(2);
h.insertK(15);
h.insertK(5);
h.insertK(4);
h.maxHeap(0)
console.log(h.getKthLargest(2));
