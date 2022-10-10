const sumAll = function(firstNum,secondNum) {
    let sum = 0;

    if ((firstNum > 0 && secondNum > 0) && (Number.isInteger(firstNum) && Number.isInteger(secondNum))){
        if (firstNum < secondNum) {
            for (i = 0; i < secondNum; i++) {
                sum += firstNum;
                firstNum++;
            }
        }

        else if (firstNum > secondNum) {
            for (i = 0; i < firstNum; i++) {
                sum += secondNum;
                secondNum++;
            }
        }
    }

    else{
        return 'ERROR';
    }
    
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
