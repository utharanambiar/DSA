class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const isLeaf = (node) => {
  if (node == null) {
    return false;
  }
  return node.left === null && node.right === null;
};

const leftSum = (node) => {
  let res = 0;
  if (node != null) {
    if (isLeaf(node.right)) {
      res += node.right.data;
    } else {
      res += leftSum(node.left);
      res += leftSum(node.right);
    }
  }
  return res;
};

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
// ans = 4 + 6 = 10
// right = 5

console.log(leftSum(root));
