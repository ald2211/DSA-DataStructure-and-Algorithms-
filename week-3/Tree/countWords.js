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

  findLongestCommonPrefix(words) {
    const trie = new Trie();
    for (const word of words) {
      trie.insert(word);
    }
    let prefix = "";
    let node = trie.root;
    while (Object.keys(node.children).length === 1 && !node.isEndOfWord) {
      const char = Object.keys(node.children)[0];
      prefix += char;
      node = node.children[char];
    }
    return prefix;
  }
}

// Usage
const words = ["apple", "app", "application", "apt"];
const trie = new Trie();
console.log(trie.findLongestCommonPrefix(words)); // Output: "ap"
