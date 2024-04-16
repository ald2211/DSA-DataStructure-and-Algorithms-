// adjacency list

//create a adjacency list representation of the graph
//          B
//        /   \
//      A       C

adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["A"]);
console.log(adjacencyList["B"]);
console.log(adjacencyList["C"]);
