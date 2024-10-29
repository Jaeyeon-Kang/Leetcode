/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let answer;
    
    for(let x of s){
        if(stack.length > 0){
            if(x === ')' && stack[stack.length-1] === '(') stack.pop()
            else if(x === ']' && stack[stack.length-1] === '[') stack.pop()
            else if(x === '}' && stack[stack.length-1] === '{') stack.pop()
            else stack.push(x)
        } else {
           stack.push(x)
        }
        //console.log(`x: ${x}, stack: ${stack}`)
    }
    
    answer = stack.length > 0 ? false : true;
    return answer;
};