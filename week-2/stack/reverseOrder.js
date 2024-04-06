// given an input string s, reverse the order of the words

//first solution

function reverseWords(str){
    let stack=[]

    for(let item of str.split(" ")){
        stack.push(item)
    }

    let finalString=""
    while(stack.length){
        let item=stack.pop()
        finalString+=`${item} `
    }

    return finalString
}

console.log(reverseWords('hello how are you'))