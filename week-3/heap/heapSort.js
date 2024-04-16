class MaxHeap {
  constructor() {
    this.heap = [];
  }

  parentIndex(index) {
    return Math.floor((index - 1) / 2); // Fix: Removed unnecessary `var`
  }

  leftChildIndex(index) {
    return 2 * index + 1; // Fix: Removed unnecessary `var`
  }

  rightChildIndex(index) {
    return 2 * index + 2; // Fix: Removed unnecessary `var`
  }

  swap(a, b) {
    let temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  insert(item) {
    this.heap.push(item);
    let index = this.heap.length - 1;
    let parent = this.parentIndex(index);
    while (
      this.heap[parent] !== undefined &&
      this.heap[parent] > this.heap[index]
    ) {
      this.swap(parent, index);
      index = this.parentIndex(index);
      parent = this.parentIndex(index);
    }
  }

  delete() {
    if (this.heap.length === 0) {
      return undefined; // Handle empty heap case
    }
    let item = this.heap[0];
    this.heap[0] = this.heap.pop();
    let index = 0;
    let leftChild = this.leftChildIndex(index);
    let rightChild = this.rightChildIndex(index);
    while (
      (this.heap[leftChild] !== undefined &&
        this.heap[leftChild] < this.heap[index]) ||
      (this.heap[rightChild] !== undefined &&
        this.heap[rightChild] < this.heap[index])
    ) {
      let max = leftChild;
      if (
        this.heap[rightChild] !== undefined &&
        this.heap[rightChild] < this.heap[max]
      ) {
        max = rightChild;
      }
      this.swap(max, index);
      index = max;
      leftChild = this.leftChildIndex(index);
      rightChild = this.rightChildIndex(index);
    }
    return item;
  }
}

function heapSort(arr) {
  let sorted = [];
  let heap1 = new MaxHeap();

  for (let i = 0; i < arr.length; i++) {
    heap1.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap1.delete());
  }

  return sorted;
}

console.log(heapSort([5, 1, 1, 2, 0, 0]));
