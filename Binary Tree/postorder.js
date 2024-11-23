// Left -> right -> root

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function postorder(root, arr) {
  if (root == null) {
    return;
  }
  //left
  postorder(root.left, arr);

  //right
  postorder(root.right, arr);

  //root
  arr.push(root.data);
}

function startPostorder(root) {
  const arr = [];
  postorder(root, arr);
  return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(root);
console.log(startPostorder(root));
