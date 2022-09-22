const repeatString = function(str,num) {
    let stringArray = [];

    if (num < 0){
        return 'ERROR';
    }

    else{
        for(i=0;i<num;i++){
            stringArray.push(str);
        }
        return stringArray.join("").toString();
    }
};

// Do not edit below this line
module.exports = repeatString;
