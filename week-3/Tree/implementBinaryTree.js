class TreeNode {
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

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}

// Sample workout
const tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);

// Search for a value in the tree
function search(node, value) {
  if (node === null) {
    return false;
  }
  if (node.value === value) {
    return true;
  }
  if (value < node.value) {
    return search(node.left, value);
  } else {
    return search(node.right, value);
  }
}
console.log("Search for 7:", search(tree.root, 7)); // Output: true
console.log("Search for 12:", search(tree.root, 12)); // Output: false

//workout-2
//level order

function levelOrder(root) {
  const queue = [];
  queue.push(root);
  while (queue.length) {
    let current = queue.shift();
    console.log(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
}

levelOrder(tree.root);

//workout-3
//min and max root
function min(root) {
  if (!root.left) {
    return root.value;
  } else {
    return min(root.left);
  }
}
function max(root) {
  if (!root.left) {
    return root.value;
  } else {
    return max(root.right);
  }
}

console.log("minimum value in the tree:", min(tree.root));
console.log("maximum value in the tree:", max(tree.root));
