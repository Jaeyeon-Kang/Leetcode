/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman = ['I','V','X','L','C','D','M']
    const romanNum = [1,5,10,50,100,500,1000]
    let tmp = 0
    
    for(let i=0; i<s.length; i++){
        let indexFirst = roman.indexOf(s[i])
        let indexSecond = roman.indexOf(s[i+1])
        console.log(indexFirst, indexSecond)
        if(roman.indexOf(s[i]) >= roman.indexOf(s[i+1])) tmp += romanNum[indexFirst]
        else if(roman.indexOf(s[i]) < roman.indexOf(s[i+1])) {
            tmp += (romanNum[indexSecond]-romanNum[indexFirst])
            i++   
        }
        else if(roman.indexOf(s[i+1]) === -1) return
        console.log(tmp)
        
    }
    //console.log(tmp)
   return tmp;
  
};
