/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = {
        'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000
    }
    let tmp = 0
    
    for(let i=0; i<s.length; i++){
        let cur = roman[s[i]]
        let next = roman[s[i+1]]
        console.log(cur, next)
        if(next > cur) {
            tmp += (next-cur)
            i++
        }
        else {
            tmp += cur
        }
        
    }
    //console.log(tmp)
   return tmp;
  
};
