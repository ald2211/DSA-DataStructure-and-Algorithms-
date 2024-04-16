class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  autoComplete(prefix) {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }
    return this._findAllWords(node, prefix);
  }

  _findAllWords(node, prefix) {
    let results = [];
    if (node.isEndOfWord) {
      results.push(prefix);
    }
    for (const char in node.children) {
      results = results.concat(
        this._findAllWords(node.children[char], prefix + char)
      );
    }
    return results;
  }
}

// Usage
const words = ["apple", "app", "banana", "bat", "cat"];
const trie = new Trie();
words.forEach((word) => trie.insert(word));

console.log(trie.autoComplete("app")); // Output: ["app", "apple"]
console.log(trie.autoComplete("ba")); // Output: ["banana", "bat"]
