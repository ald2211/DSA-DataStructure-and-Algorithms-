//array to linked list

class Node {
  constructor(value) {
    this.element = value;
    this.next = null;
  }
}

function arrayToLinkedList(arr) {
  if (!arr || arr.length === 0) {
    return false;
  }

  let head = new Node(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  return head;
}

const arr = [1, 2, 3, 4, 5];
let linkedList = arrayToLinkedList(arr);
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current != null) {
    result.push(current.element);
    current = current.next;
  }
  return result;
}

console.log(printLinkedList(linkedList).join(" ---> "));
