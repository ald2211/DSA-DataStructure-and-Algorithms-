// stack implementation using object

 class stack{

    constructor(){

        this.items={}
        this.top=0
    }

    push(item){

        this.items[this.top]=item;
        this.top++;
    }

    pop(){
        if(this.isEmpty())return 'stack is empty'
        this.top--
        let item=this.items[this.top]
        delete this.items[this.top]
        return item
    }

    isEmpty(){
        return this.top===0
    }

    print(){
        console.log(this.items)
    }
 }

 let newStack=new stack()
 console.log(newStack.isEmpty());
 newStack.push(3)
 newStack.push(5)
 newStack.pop()
 newStack.pop()
 newStack.print()

 
// Operation	Best Case Time Complexity	Average Case Time Complexity	Worst Case Time Complexity

// Push	            O(1)	                          O(1)	                     O(1)
// Pop	            O(1)	                          O(1)	                     O(1)
// Peek	            O(1)	                          O(1)	                     O(1)
// Search	        O(n)	                          O(n)	                     O(n)

//space complexity O(n)