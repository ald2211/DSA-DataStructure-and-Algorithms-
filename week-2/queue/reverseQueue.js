class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  reverse() {
    if (this.isEmpty()) {
      return;
    }

    const stack = [];
    while (!this.isEmpty()) {
      stack.push(this.dequeue());
    }

    while (stack.length !== 0) {
      this.enqueue(stack.pop());
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      for (let item of this.items) {
        console.log(item);
      }
    }
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Original queue:");
queue.print();

queue.reverse();

console.log("Reversed queue:");
queue.print();
