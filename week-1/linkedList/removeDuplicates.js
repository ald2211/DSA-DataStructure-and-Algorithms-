//remove duplicates

class node{

    constructor(val){
        this.value=val;
        this.next=null;
    }
}

function removeDuplicate(head){
    if(!head || head.next==null){
        return head
    }

    let current=head;
    while(current && current.next){
        if(current.value ===current.next.value){
            current.next=current.next.next
        }else{
            current=current.next
        }
    }
    return head
}

// create a linked list

let head=new node(1)
head.next=new node(1)
head.next.next=new node(2)
head.next.next.next=new node(2)
head.next.next.next.next=new node(3)
head.next.next.next.next.next=new node(4)

//print linkedList
console.log('orginal Linkedlist:')
function printLinkedList(head){
    let current=head;
    let result=[]
    while(current!==null){
        result.push(current.value)
        current=current.next
    }
    console.log(result.join(' --> '))
}
printLinkedList(head)
//remove duplicate
 removeDuplicate(head)
 console.log('\nmodified Linkedlist:')
 printLinkedList(head)