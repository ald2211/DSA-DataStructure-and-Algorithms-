//implement queue using stack

class queue{

    constructor(){
        this.stackOne=[]
        this.stackTwo=[]
    }

    enqueue(value){

        this.stackOne.push(value)
    }

    dequeue(){
        if(this.stackTwo.length===0){
            while(this.stackOne.length>0){
                this.stackTwo.push(this.stackOne.pop())
            }
        }
        return this.stackTwo.pop()

    }

    print(){
        let fullStack=[...this.stackOne,...this.stackTwo]
        console.log(fullStack)
    }
}

const newQueue=new queue()
newQueue.enqueue(3)
newQueue.enqueue(9)
newQueue.enqueue(5)
newQueue.print()
newQueue.dequeue()
newQueue.print()