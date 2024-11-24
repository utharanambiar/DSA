// without recursion
//root -> left -> right
class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function morrisPreorder(root) {
  let curr = root;
  let preorder = [];
  while (curr != null) {
    if (curr.left == null) {
      preorder.push(curr.data);
      curr = curr.right;
    } else {
      let prev = curr.left;
      while (prev.right != null && prev.right != curr) {
        prev = prev.right;
      }
      if (prev.right == null) {
        prev.right = curr;
        preorder.push(curr.data);
        curr = curr.left;
      } else {
        prev.right = null;
        curr = curr.right;
      }
    }
  }
  return preorder;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.right = new Node(6);

console.log(morrisPreorder(root));
