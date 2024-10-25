/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort();
    //console.log(folder)
    
    let result = [];
    result.push(folder[0]);
    
    // console.log(result);
    for (let i=1; i<folder.length; i++){
        if(!folder[i].startsWith(`${result[result.length-1]}/`)){
            result.push(folder[i])
        }
    }
    // console.log(result)
    return result
    
};