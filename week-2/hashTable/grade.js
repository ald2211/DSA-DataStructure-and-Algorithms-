// design a hash table to store student names and their corresponding grades.
// The hash table should support the following operations:

// Insert a new entry with a student's name and grade.
// Lookup the grade associated with a given student's name.
// Remove a student's entry from the table.

class StudentGradesHashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }

  _hash(name) {
    let total = 0;
    for (let i = 0; i < name.length; i++) {
      total += name.charCodeAt(i);
    }
    return total % this.size;
  }

  insert(name, grade) {
    const index = this._hash(name);
    this.table[index].push({ name, grade });
  }

  lookup(name) {
    const index = this._hash(name);
    const entries = this.table[index];
    for (const entry of entries) {
      if (entry.name === name) {
        return entry.grade;
      }
    }
    return null;
  }

  remove(name) {
    const index = this._hash(name);
    const entries = this.table[index];
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].name === name) {
        entries.splice(i, 1);
        return;
      }
    }
  }
}

// Usage example:
const gradesTable = new StudentGradesHashTable(100);
gradesTable.insert("Alice", "A");
gradesTable.insert("Bob", "B");
gradesTable.insert("Charlie", "C");

console.log(gradesTable.lookup("Bob"));

gradesTable.remove("Bob");

console.log(gradesTable.lookup("Bob"));
console.log(gradesTable.lookup("Alice"));
