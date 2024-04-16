class MaxHeap {
  constructor() {
    this.storage = [];
    this.size = 0;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
  }

  hasParent(i) {
    return this.getParentIndex(i) >= 0;
  }

  hasLeftChild(i) {
    return this.getLeftChildIndex(i) < this.size;
  }

  hasRightChild(i) {
    return this.getRightChildIndex(i) < this.size;
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  insert(data) {
    this.storage[this.size] = data;
    this.size += 1;
    this.heapifyUp(this.size - 1);
  }

  heapifyUp(index) {
    while (
      this.hasParent(index) &&
      this.storage[this.getParentIndex(index)] < this.storage[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  removeMax() {
    if (this.size === 0) throw new Error("Empty Heap");
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size--;
    this.heapifyDown(0);
    return data;
  }

  heapifyDown(index) {
    let largest = index;
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    if (
      this.hasLeftChild(index) &&
      this.storage[leftChildIndex] > this.storage[largest]
    ) {
      largest = leftChildIndex;
    }

    if (
      this.hasRightChild(index) &&
      this.storage[rightChildIndex] > this.storage[largest]
    ) {
      largest = rightChildIndex;
    }

    if (largest !== index) {
      this.swap(index, largest);
      this.heapifyDown(largest);
    }
  }

  insertFromArray(arr) {
    for (let i of arr) this.insert(i);
  }
  print() {
    for (let i = 0; i < this.size; i++) {
      console.log(this.storage[i]);
    }
  }
  peek() {
    return this.storage[0];
  }
}

let maxHeap = new MaxHeap();
maxHeap.insertFromArray([10, 15, 30, 40, 50, 100, 40]);
maxHeap.print();
console.log("MaxElement:", maxHeap.peek());
maxHeap.removeMax();
console.log("after removal:");
maxHeap.print();
console.log("MaxElement:", maxHeap.peek());
