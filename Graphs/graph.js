let vertices = ["A", "B", "C", "D", "E"];
let edges = [
  ["A", "B"],
  ["A", "D"],
  ["B", "C"],
  ["C", "D"],
  ["C", "E"],
  ["D", "E"],
];

const findAdjacentNode = (node) => {
  let adjacencyList = [];
  for (let edge of edges) {
    let nodeIdx = edge.indexOf(node);
    if (nodeIdx > -1) {
      adjacencyList.push(nodeIdx === 0 ? edge[1] : edge[0]);
    }
  }
  return adjacencyList;
};

const isConnected = (node1, node2) => {
  return edges.some((edge) => {
    return edge.indexOf(node1) > -1 && edge.indexOf(node2) > -1;
  });
};

// console.log(findAdjacentNode("C"));
console.log(isConnected("A", "E"))
