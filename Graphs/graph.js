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
//console.log(isConnected("A", "E"));

// using adjacency matrix

let verticesIndex = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

let adjacencyMatrix = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 1, 0, 1, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0],
];

const findAdjacentNodeInMatrix = (node) => {
  let adjacencyNode = [];
  for (let i = 0; i < vertices.length; i++) {
    let nodeIdx = verticesIndex[node];
    if (adjacencyMatrix[nodeIdx][i] === 1) {
      adjacencyNode.push(vertices[i]);
    }
  }
  return adjacencyNode;
};

const isConnectedMatrix = (node1, node2) => {
  let nodeIdx1 = verticesIndex[node1];
  let nodeIdx2 = verticesIndex[node2];
  if (adjacencyMatrix[nodeIdx1][nodeIdx2] === 1) {
    return true;
  }
  return false;
};

console.log(isConnectedMatrix("A", "B"));
