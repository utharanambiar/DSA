// without recursion
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function morrisInorder(root) {
  let inorder = [];
  let curr = root;
  while (curr !== null) {
    if (curr.left == null) {
      inorder.push(curr.data);
      curr = curr.right;
    } else {
      let prev = curr.left;
      while (prev.right != null && prev.right != curr) {
        prev = prev.right;
      }
      if (prev.right == null) {
        prev.right = curr;
        curr = curr.left;
      } else {
        prev.right = null;
        inorder.push(curr.data);
        curr = curr.right;
      }
    }
  }
  return inorder;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);

console.log(morrisInorder(root));
