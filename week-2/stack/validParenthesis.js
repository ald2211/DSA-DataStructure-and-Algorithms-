// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the
// input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


var isValid = function(s) {
    let stack=[]
    for(let i=0;i<s.length;i++){
        let open=s[i]
        if(open==='('||open==='['||open==='{'){
            stack.push(open)
        }else if(open===')'||open===']'||open==='}'){
            
            if(stack.length===0){
                
                return false
            }
             let close=stack.pop()
        if((close==='(' && open!==')')||(close==='['&&open!==']')||(close==='{'&& open!=='}')){
            return false
        }
        }
       
    }
    return stack.length===0
};

console.log(isValid("(]"))
console.log(isValid("()"))
console.log(isValid('('));




