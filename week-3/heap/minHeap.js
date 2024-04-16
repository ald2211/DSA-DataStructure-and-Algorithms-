class minHeap {
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
    if (
      this.hasParent(index) &&
      this.storage[this.getParentIndex(index)] > this.storage[index]
    ) {
      this.swap(this.getParentIndex(index), index);
      this.heapifyUp(this.getParentIndex(index));
    }
  }

  removeMin() {
    if (this.size === 0) throw new Error("empty Heap");
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size -= 1;
    this.heapifyDown(0);
    return data;
  }
  heapifyDown(index) {
    let smallest = index;
    if (
      this.hasLeftChild(smallest) &&
      this.storage[smallest] > this.storage[this.getLeftChildIndex(index)]
    ) {
      smallest = this.getLeftChildIndex(index);
    }
    if (
      this.hasRightChild(index) &&
      this.storage[smallest] > this.storage[this.getRightChildIndex(index)]
    ) {
      smallest = this.getRightChildIndex(index);
    }
    if (smallest != index) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
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
}

let minheap = new minHeap();
minheap.insertFromArray([23, 34, 45, 56, 78654, 0, 2547]);
minheap.print();
minheap.removeMin();
console.log("after removal:");
minheap.print();

function heapSort(arr) {
  var sorted = [];
  var heap1 = new minHeap();

  for (let i = 0; i < arr.length; i++) {
    heap1.insert(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    sorted.push(heap1.removeMin());
  }
  return sorted;
}

console.log(heapSort([5, 1, 1, 2, 0, 0]));
