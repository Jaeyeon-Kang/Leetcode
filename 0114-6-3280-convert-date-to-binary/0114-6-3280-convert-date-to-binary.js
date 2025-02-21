/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    date = date.split('-')
    for(let i=0; i<date.length; i++){
       date[i] = Number(date[i]).toString(2)
    }
    return date.join('-')
};