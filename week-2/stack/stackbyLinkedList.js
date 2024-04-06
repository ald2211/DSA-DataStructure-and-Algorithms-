//stack implementation by linkedList
class Node{
    constructor(value){
        this.value=value
        this.next=null
        
    }
}
class stack{

    constructor(){

        this.head=null;
        this.size=0
    }

    push(value){
        let newNode=new Node(value)
        if(this.isEmpty()){

            
            this.head=newNode
        }else{

            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
        }
        this.size++
    }

    pop(){

        if(this.isEmpty())return 'stack is empty'
        let current=this.head
        while(current.next.next){
            current=current.next
        }
        current.next=null
        this.size--
    }

    isEmpty(){
        return this.size===0
    }

    peek(){
        
        if(this.isEmpty())return -1
        let current=this.head
        while(current.next){
            current=current.next
        }

        return console.log('top:',current.value)
    }

    getSize(){
        return this.size
    }

    print(){

        let current=this.head
        while(current){
            console.log(current.value)
            current=current.next
        }
    }
}

let newStack=new stack()
console.log(newStack.isEmpty())
newStack.push(2)
newStack.push(4)
newStack.peek()
newStack.print()