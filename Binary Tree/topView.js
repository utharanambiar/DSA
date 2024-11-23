//use map, queue for BFS traversal

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function topView(root) {
  let ans = [];
  if (root == null) {
    return ans;
  }
  let newMap = new Map();

  let q = [];

  q.push([root, 0]);

  while (q.length !== 0) {
    let [node, pos] = q.shift();

    if (!newMap.has(pos)) {
      newMap.set(pos, node.data);
    }

    if (node.left != null) {
      q.push([node.left, pos - 1]);
    }

    if (node.right != null) {
      q.push([node.right, pos + 1]);
    }
  }

  newMap = [...newMap.entries()].sort((a, b) => a[0] - b[0]);
  for (let [key, val] of newMap) {
    ans.push(val);
  }

  return ans;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

//console.log(root);
console.log(topView(root));
