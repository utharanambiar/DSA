class queueUsingArray {
  constructor() {
    this.arr = [];
    this.front = 0;
    this.rear = 0;
  }

  pop() {
    let res = this.arr[this.front];
    delete this.arr[this.front];
    this.arr = this.arr.slice(this.front + 1, this.arr.length)
    this.rear--;
    return res;
  }

  push(x) {
    this.arr[this.rear] = x;
    this.rear++;
  }
}

let que = new queueUsingArray();
que.push(1);
que.push(2);
que.push(3);
console.log(que); //correct
console.log(que.pop()); //correct
console.log(que); //correct
console.log(que.pop()); //correct
console.log(que);
que.push(4);
console.log(que.pop())
console.log(que);
