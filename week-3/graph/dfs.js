class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
    if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }

  dfsRecursive(startingVertex) {
    const visited = {};
    const result = [];

    const dfs = (vertex) => {
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
    };

    dfs(startingVertex);

    return result;
  }

  dfsIterative(startingVertex) {
    const visited = {};
    const result = [];
    const stack = [startingVertex];

    while (stack.length) {
      const currentVertex = stack.pop();

      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }

    return result;
  }
}

let newGraph = new Graph();
newGraph.addVertex("A");
newGraph.addVertex("B");
newGraph.addVertex("C");
newGraph.addEdge("A", "B");
newGraph.addEdge("B", "C");
newGraph.display();
console.log(newGraph.dfsRecursive("A"));
