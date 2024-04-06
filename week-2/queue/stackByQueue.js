//implement stack using queues

class Stack {
  constructor() {
    this.queueOne = [];
    this.queueTwo = [];
  }

  push(value) {
    while (this.queueOne.length !== 0) {
      this.queueTwo.push(this.queueOne.shift());
    }
    this.queueOne.push(value);
    while (this.queueTwo.length !== 0) {
      this.queueOne.push(this.queueTwo.shift());
    }
  }

  pop() {
    this.queueOne.shift();
  }

  print() {
    console.log(this.queueOne);
  }
}

let newStack = new Stack();
newStack.push(4);
newStack.push(42);
newStack.push(2);
newStack.print();
newStack.pop();
newStack.print();
