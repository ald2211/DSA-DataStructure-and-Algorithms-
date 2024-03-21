// implementation of doubly linked list

class node {
  constructor(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(data) {
    const newNode = new node(data);
    newNode.next = this.head;
    if (this.head) {
      this.head.prev = newNode;
    }
    this.head = newNode;
  }

  addLast(data) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    newNode.prev = current;
    current.next = newNode;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    }
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
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
    const newNode = new node(data);
    if (index === 0) {
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.prev = current;
    newNode.next = current.next;
    if (current.next) {
      current.next.prev = newNode;
    }
    current.next = newNode;
  }

  removeAt(index) {
    if (index < 0 || index > this.size()) {
      console.error("invalid index");
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      }
      return;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    current.next.next.prev = current.next.prev;
    current.next = current.next.next;
  }

  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const list = new doublyLinkedList();
list.addFirst(3);
list.addFirst(7);
list.addFirst(8);
list.addLast(33);
list.addAt(2, 11);
list.removeAt(2);
list.removeFirst();
list.removeLast();

list.print();
console.log("size:", list.size());
