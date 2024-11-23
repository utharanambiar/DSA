// root -> left -> right

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function preorder(root, arr) {
  if (root == null) {
    return;
  }

  //root
  arr.push(root.data);
  //left
  preorder(root.left, arr);

  //right
  preorder(root.right, arr);
}

function startPreorder(root) {
  const arr = [];
  preorder(root, arr);
  return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(root);
console.log(startPreorder(root));
