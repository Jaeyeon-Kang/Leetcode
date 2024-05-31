/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let answer=[]
    for(let x of s){
        if(x !== '*'){
            answer.push(x)
        } else answer.pop()
    }
    return answer.join('');
};