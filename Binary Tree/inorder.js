// Left -> root -> right

//DFS

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function inorder(root, arr) {
  if (root == null) {
    return;
  }
  //left
  inorder(root.left, arr);

  //root
  arr.push(root.data);

  //right
  inorder(root.right, arr);
}

function startInorder(root) {
  const arr = [];
  inorder(root, arr);
  return arr;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(root);
console.log(startInorder(root));
