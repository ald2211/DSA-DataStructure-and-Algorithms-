// Consider a graph represented as an adjacency list
const graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"],
};

// Write a function to find all the neighbors of a given node in the graph
function findNeighbors(node) {
  if (graph[node]) {
    return graph[node];
  } else {
    return "Node not found in the graph.";
  }
}

// Test the function
console.log("Neighbors of node A:", findNeighbors("A"), "\n");
console.log("Neighbors of node D:", findNeighbors("D"), "\n");
console.log("Neighbors of node X:", findNeighbors("X"), "\n");
