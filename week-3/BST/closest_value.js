//Find the closest value to a given number in a Tree.

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (root.value > newNode.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.value < newNode.value) {
        if (root.right === null) {
          root.right = newNode;
        } else {
          this.insertNode(root.right, newNode);
        }
      }
    }
  }
  findClosestValue(target) {
    let closest = this.root.value;
    let minDiff = Math.abs(closest - target);
    let current = this.root;
    while (current) {
      let diff = Math.abs(current.value - target);
      if (diff < minDiff) {
        minDiff = diff;
        closest = current.value;
      }
      if (target < current.value) {
        current = current.left;
      } else if (target > current.value) {
        current = current.right;
      } else {
        return current.value;
      }
    }
    return closest;
  }
}
const bst = new BinarySearchTree();
bst.insert(9);
bst.insert(4);
bst.insert(17);
bst.insert(3);
bst.insert(6);
bst.insert(22);
bst.insert(5);
bst.insert(7);
bst.insert(20);

console.log(bst.findClosestValue(21));
console.log(bst.findClosestValue(3));
