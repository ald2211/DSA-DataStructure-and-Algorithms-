// sum of the elements inside the queue

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
}

function sumQueue(queue) {
  let sum = 0;
  while (!queue.isEmpty()) {
    sum += queue.dequeue();
  }
  return sum;
}

const queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.enqueue(11);

console.log(sumQueue(queue));
