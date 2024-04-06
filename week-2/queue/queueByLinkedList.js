// implementation of queue data stucture using linkedList
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class queue {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (this.isEmpty()) return "queue is empty";
    this.head = this.head.next;
    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }

  peek() {
    if (this.isEmpty()) return -1;
    return console.log("top:", this.head.value);
  }

  getSize() {
    return this.size;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let newQueue = new queue();
console.log(newQueue.isEmpty());
newQueue.enqueue(2);
newQueue.enqueue(4);

newQueue.dequeue();
newQueue.peek();
console.log("size:", newQueue.getSize());
newQueue.print();
