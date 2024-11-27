//use map, queue for BFS traversal

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function verticalView(root) {
  let ans = [];
  if (root == null) {
    return ans;
  }
  let newMap = new Map();

  let q = [];

  q.push([root, [0, 0]]);

  while (q.length !== 0) {
    let [node, [x, y]] = q.shift();

    if (!newMap.has(x)) {
      newMap.set(x, new Map());
    }

    if (!newMap.get(x).has(y)) {
      newMap.get(x).set(y, new Set());
    }

    newMap.get(x).get(y).add(node.data);

    if (node.left != null) {
      q.push([node.left, [x - 1, y + 1]]);
    }

    if (node.right != null) {
      q.push([node.right, [x + 1, y + 1]]);
    }
  }

  newMap = [...newMap.entries()].sort((a, b) => a[0] - b[0]);
  for (let [key, val] of newMap) {
    const col = [];
    for (const [subKey, subValue] of val) {
      col.push(...subValue);
    }
    ans.push(col);
  }
  console.log(newMap);
  return ans;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

//console.log(root);
console.log(verticalView(root));
