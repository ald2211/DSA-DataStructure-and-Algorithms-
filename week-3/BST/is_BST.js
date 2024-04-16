//Validate whether a given tree is BST or not.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Helper function for in-order traversal
  inOrderTraversal(node, values) {
    if (node !== null) {
      this.inOrderTraversal(node.left, values);
      values.push(node.value);
      this.inOrderTraversal(node.right, values);
    }
  }

  // Function to check if the tree is a BST
  isBST() {
    if (this.root === null) {
      // Empty tree is considered as a BST
      return true;
    }
    const values = [];
    this.inOrderTraversal(this.root, values);
    // Check if the values are sorted
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] >= values[i + 1]) {
        return false;
      }
    }
    return true;
  }
}

const binaryTree = new BinaryTree();
binaryTree.root = new Node(4);
binaryTree.root.left = new Node(2);
binaryTree.root.right = new Node(6);
binaryTree.root.left.left = new Node(1);
binaryTree.root.left.right = new Node(3);
binaryTree.root.right.left = new Node(5);
binaryTree.root.right.right = new Node(7);

console.log(binaryTree.isBST()); // Output: true

const secondTree = new BinaryTree();
binaryTree.root = new Node(4);
binaryTree.root.left = new Node(8);
binaryTree.root.right = new Node(2);
console.log(binaryTree.isBST()); // Output: false
