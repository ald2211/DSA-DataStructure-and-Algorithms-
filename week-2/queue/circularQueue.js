

class circularQueue{

    constructor(size){

        this.queue=[]
        this.size=size
    }

    enqueue(value){

        if(this.size===this.queue.length)return false
        
        this.queue.push(value)
        return true
    }

    dequeue(){
        if(this.isEmpty())return false
        this.queue.shift()
        return true
    }

    isEmpty(){
        return this.queue.length===0
    }

    front(){
        if(this.isEmpty())return false
        return this.queue[0]
    }

    rear(){
        if(this.isEmpty())return false
        return this.queue[this.queue.length-1]
    }

    isFull(){
        if(this.isEmpty())return false
        return this.size===this.queue.length
    }

    print(){
        if(this.isEmpty())return false
        let queue=""
        for(let i of this.queue){
            queue+=`${i} `
        }
        return queue
    }
    
}

let newQueue=new circularQueue(5)

newQueue.enqueue(4)
newQueue.enqueue(3)
newQueue.enqueue(6)
newQueue.enqueue(9)
newQueue.enqueue(36)
newQueue.dequeue()
console.log(newQueue.print())
newQueue.enqueue(33)
console.log(newQueue.print())
console.log(newQueue.isFull());
console.log('rear:',newQueue.rear());
console.log('front:',newQueue.front());
console.log('isEmpty:',newQueue.isEmpty());