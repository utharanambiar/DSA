function sortStack() {
  if (s.length != 0) {
    let x = s.pop();

    sortStack(s);

    sortInsert(s, x);
  }
}

function sortInsert(s, x) {
  if (s.length === 0 || x > s[s.length - 1]) {
    s.push(x);
    return;
  }

  let temp = s.pop();
  sortInsert(s, x);
  sortStack(s);

  s.push(temp);
}

function printStack(s) {
  for (let i = s.length - 1; i >= 0; i--) {
    console.log(s[i] + " ");
  }
}

let s = [];

s.push(30);
s.push(-5);
s.push(18);
s.push(14);
s.push(-3);

sortStack(s);

printStack(s);
