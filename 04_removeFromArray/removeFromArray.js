const removeFromArray = function(arr,...elementsToRemove) {
    
    for(i=0;i<elementsToRemove.length;i++){

        if(arr.indexOf(elementsToRemove[i]) != -1){
            let elementIndex = arr.indexOf(elementsToRemove[i]);
            arr.splice(elementIndex,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
