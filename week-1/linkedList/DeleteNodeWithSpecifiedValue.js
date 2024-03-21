//delete the node with specified value

class node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function deleteNodeWithValue(head, Value) {
  if (!head) return null;

  if (head.value === Value) {
    return head.next;
  }

  let prev = head;
  let current = head.next;

  while (current != null) {
    if (current.value === Value) {
      prev.next = current.next;
      break;
    }
    prev = current;
    current = current.next;
  }
  return head;
}

//create linkedList
let head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);

//print linkedList
function printLinkedList(head) {
  let current = head;
  let result = [];
  while (current !== null) {
    result.push(current.value);
    current = current.next;
  }
  console.log(result.join(" --> "));
}

console.log("orginal linkedList:");
printLinkedList(head);
console.log("\nmodified linkedList:");
const Value = 3;
const newHead = deleteNodeWithValue(head, Value);
printLinkedList(newHead);
