//prefix tree
class Node {
  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    for (let letter of word) {
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new Node());
      }
      currentNode = currentNode.children.get(letter);
    }

    currentNode.isEnd = true;
  }

  search(word) {
    if (!word.length) return false;
    let currentNode = this.root;
    for (let letter of word) {
      if (!currentNode.children.has(letter)) return false;
      currentNode = currentNode.children.get(letter);
    }
    return currentNode.isEnd;
  }

  startsWith(prefix) {
    if (!prefix.length) return false;
    let currentNode = this.root;
    for (let letter of prefix) {
      if (!currentNode.children.has(letter)) return false;
      currentNode = currentNode.children.get(letter);
    }
    return true;
  }

  remove(word) {
    this._removeHelper(this.root, word, 0);
  }

  _removeHelper(node, word, index) {
    if (index === word.length) {
      if (!node.isEnd) return false; // Word not found in the Trie
      node.isEnd = false; // Mark as not end of word
      return node.children.size === 0; // Check if the node has no children
    }
    const char = word[index];
    if (!node.children.has(char)) return false; // Word not found in the Trie
    const shouldDeleteCurrentNode = this._removeHelper(
      node.children.get(char),
      word,
      index + 1
    );
    if (shouldDeleteCurrentNode) {
      node.children.delete(char); // Delete the node
      return node.children.size === 0; // Return true if the current node has no other children
    }
    return false;
  }
}

let trie = new Trie();
trie.insert("hello");
trie.insert("helloWorld");
console.log(trie.search("hello"));
console.log(trie.search("helloWorld"));
console.log(trie.search("hey"));
console.log("prefixStartWith-he:", trie.startsWith("he"));
console.log("prefixStartWith-ag:", trie.startsWith("ag"));
trie.remove("hello");
console.log(trie.search("hello")); // false
console.log(trie.startsWith("he")); // true
