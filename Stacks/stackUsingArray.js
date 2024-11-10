class StackUsingArray {
  constructor() {
    this.top = -1;
    this.arr = [];
  }
  push(x) {
    this.top++;
    this.arr[this.top] = x;
  }
  pop() {
    let res = this.arr[this.top];
    this.arr = this.arr.slice(0, this.arr.length - 1);
    this.top = this.top - 1;
    return res;
  }
  getTop() {
    return this.arr[this.top];
  }
}

let stck = new StackUsingArray();
stck.push(1);
stck.push(2);
stck.push(3);
console.log(stck.pop());
console.log(stck.pop());
console.log(stck)
console.log(stck.getTop());
