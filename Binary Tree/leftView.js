class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function leftView(root, level, arr) {
  if (root == null) {
    return;
  }
  if (arr.length === level) {
    arr.push(root.data);
  }
  leftView(root.left, level + 1, arr);
  leftView(root.right, level + 1, arr);
}

function startLeftView(root) {
  const arr = [];
  leftView(root, 0, arr);
  return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

//console.log(root);
console.log(startLeftView(root));
