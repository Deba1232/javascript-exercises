const reverseString = function(str) {
   let charArray = str.split("");
   let reverseCharArray = [];

   for(i=charArray.length-1;i>=0;i--){
    reverseCharArray.push(charArray[i]);
   }

   return reverseCharArray.join("").toString();
};

// Do not edit below this line
module.exports = reverseString;
