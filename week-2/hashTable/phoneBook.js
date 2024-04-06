// design a hash table to store phone numbers and corresponding names for a phone directory application.
//  The hash table should support the following operations:

// Insert a new phone number and name pair.
// Lookup the name associated with a given phone number.
// Remove a phone number and its associated name from the directory.
class PhoneDirectory {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(phoneNumber) {
    return phoneNumber % this.size;
  }

  insert(phoneNumber, name) {
    let index = this.hash(phoneNumber);
    if (!this.table[index]) {
      this.table[index] = [[phoneNumber, name]];
    } else {
      this.table[index].push([phoneNumber, name]);
    }
  }

  lookup(phoneNumber) {
    let index = this.hash(phoneNumber);
    if (this.table[index]) {
      for (let pair of this.table[index]) {
        if (pair[0] === phoneNumber) {
          return pair[1];
        }
      }
    }
    return "Not found";
  }

  remove(phoneNumber) {
    let index = this.hash(phoneNumber);
    if (this.table[index]) {
      let directory = this.table[index];
      for (let i = 0; i < directory.length; i++) {
        if (directory[i][0] === phoneNumber) {
          directory.splice(i, 1);
          return;
        }
      }
    }
  }
}

let phoneDir = new PhoneDirectory(100);
phoneDir.insert(1234567890, "Alice");
phoneDir.insert(9876543210, "Bob");
console.log(phoneDir.lookup(1234567890));
phoneDir.remove(9876543210);
console.log(phoneDir.lookup(9876543210));
