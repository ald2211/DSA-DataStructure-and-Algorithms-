// implementation of hash table

class hashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      return sameKeyItem[1];
    }
    return undefined;
  }

  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameKeyItem = bucket.find((item) => item[0] === key);
      bucket.splice(bucket.indexOf(sameKeyItem), 1);
      return;
    }
    return undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, ":", this.table[i]);
      }
    }
  }
}

let table = new hashTable(50);
table.set("name", "jingan");
table.set("age", 43);
table.set("country", "USA");
table.set("mane", "hockey"); //testing collision handling
table.display();

//time complexity
//average case- insertion -O(1),lookup-O(1),deletion-O(1)
//worst case-insertion-O(n),lookup-O(n),deletion-O(n)

//space complexity
// O(n)
