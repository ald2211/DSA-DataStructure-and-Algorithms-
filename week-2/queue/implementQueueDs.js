//queue data structure implementation

class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue
  enqueue(data) {
    this.items.push(data);
  }

  // Dequeue
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.items.shift();
  }

  // Check if queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Size of the queue
  size() {
    return this.items.length;
  }

  // Print queue
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

let queue = new Queue();

queue.enqueue(5);
queue.enqueue(9);
queue.enqueue(10);
queue.enqueue(11);
queue.enqueue(14);
queue.dequeue();
queue.print();
console.log("empty:", queue.isEmpty());
console.log("size:", queue.size());
