
let obj1={
    name:'Jamal',
    age:26,
    status:true
}

function clone(input){
    
    if(input===null || typeof input==='object')return input;
    
    let initialValue=Array.isArray(input)?[]:{}
    
    return Object.keys(input).reduce((acc,index)=>{
        
        acc[index]=input[index]
        return acc
    },initialValue)
}

let cloneObj1=clone(obj1)
console.log(obj1)
cloneObj1.cloned=true
console.log(cloneObj1)