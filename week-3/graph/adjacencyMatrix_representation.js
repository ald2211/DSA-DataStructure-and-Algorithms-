// adjacency matrix

//create a adjacency matrix representation of the graph
//          B
//        /   \
//      A       C

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

console.log(matrix[0][0]);
// it return zero because the vertex A doesn't contain a self loop

console.log(matrix[0][1]);
//it return one beacuse there is an connection exist from the vertexes A and B
