// queue implementation using objects

class Queue {
  constructor() {
    this.items = {};
    this.rear = 0;
    this.front = 0;
  }

  enqueue(item) {
    this.items[this.rear] = item;
    this.rear++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    let item = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return item;
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  print() {
    console.log(this.items);
  }
}

let queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(4);
queue.dequeue();
queue.print();

// Operation	Best Case Time Complexity	Average Case Time Complexity	Worst Case Time Complexity

// Enqueue	            O(1)	                          O(1)	                     O(1)
// Dequeue	            O(1)	                          O(1)	                     O(1)
// Peek	                O(1)	                          O(1)	                     O(1)
// Search	            O(n)	                          O(n)	                     O(n)

//space O(n)
