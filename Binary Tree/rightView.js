class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function rightView(root, level, arr) {
  if (root == null) {
    return;
  }
  if (arr.length === level) {
    arr.push(root.data);
  }
  rightView(root.right, level + 1, arr);
  rightView(root.left, level + 1, arr);
}

function startRightView(root) {
  const arr = [];
  rightView(root, 0, arr);
  return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

//console.log(root);
console.log(startRightView(root));
