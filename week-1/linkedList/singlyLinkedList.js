//implementation of singly linkedList

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new node(data);

    newNode.next = this.head;
    this.head = newNode;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return;
  }
  addLast(data) {
    const newNode = new node(data);
    if (this.head === null) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  removeLast() {
    if (!this.head) return;

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  addAt(index, data) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }
    let newNode = new node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new linkedList();
list.addFirst(3);
list.addFirst(7);
list.addFirst(8);
list.addLast(33);
list.addAt(2, 11);
list.removeAt(0);
list.removeFirst();
list.removeLast();
list.print();
console.log("size:", list.size());
