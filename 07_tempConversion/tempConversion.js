const ftoc = function(fahrenheitTemp) {
  let celTemp = (fahrenheitTemp - 32) * 5/9;
  
  if (Math.abs(celTemp % 1) > 0.01){
    return parseFloat(celTemp.toFixed(1));
  }
  else{
    return celTemp;
  }

};

const ctof = function(celciusTemp) {
  let fahrenTemp = ((9 * celciusTemp) / 5) + 32;
  
  if (Math.abs(fahrenTemp % 1) > 0.01) {
    return parseFloat(fahrenTemp.toFixed(1));
  }
  else {
    return fahrenTemp;
  }
  
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
