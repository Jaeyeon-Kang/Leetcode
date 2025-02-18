/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer=Array.from({length: n}, x => x=0)
    for(let i=1; i<=n; i++){
        if(i%3 === 0 && i%5 === 0){
            answer[i-1] = "FizzBuzz"
        } else if(i%5 === 0){
            answer[i-1]="Buzz"
        } else if(i%3 ===0){
            answer[i-1]="Fizz"
        } else {
            answer[i-1]=`${i}`
        }
    }
    return answer
};