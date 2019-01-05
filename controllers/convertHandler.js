/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var unitRegex = /[a-zA-Z]+/;
    const checkNumRegex = /\d/;
    const unitIndex = input.search(unitRegex);
    const num = input.slice(0, unitIndex);

    if(num.length < 1) {
    result = 1
    }else if(eval(num) === Infinity) {
    result = 'invalid number'
    }else {
    result = eval(num);
    }
    console.log(result);
    return result;
    
  };
  
  this.getUnit = function(input) {
    var result = input;
    var unitRegex = /[a-zA-Z]+/;
    const unitIndex = result.search(unitRegex);
    let unit = result.slice(unitIndex);
    
    if(unit != 'mi' && unit != 'lbs' && unit != 'gal' && unit != 'kg' && unit != 'L'
        && unit != 'km'){
    unit = 'invalid unit';
      
    }
    return unit;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result = initUnit;
    switch(result){
      case 'mi': result = 'km';
        break;
      case 'lbs': result = 'kg';
        break;
      case 'gal': result = 'L';
        break;
      case 'km': result = 'mi';
        break;
      case 'L': result = 'gal';
        break;
      case 'kg': result = 'lbs';
        break;
      default: result;
                   }
    //console.log(result);
    return result;
  };

  this.spellInitialUnit = (unit) => {
  switch(unit) {
    case 'mi': unit = 'miles';
      break;
      case 'gal': unit = 'gallons';
      break;
      case 'lbs': unit = 'pounds';
      break;
      case 'L': unit = 'liters';
      break;
      case 'kg': unit = 'kilograms';
      break;
      case 'km': unit = 'miles';
      break;
    default: unit;
             }
    //console.log(unit);
    return unit;
  }
  
  this.spellOutUnit = function(unit) {
    var result = unit;
    switch(result){
      case 'km': result = 'kilometers';
        break;
      case 'kg': result = 'kilograms';
        break;
      case 'L': result = 'Liters';
        break;
      case 'lbs': result = 'pounds';
        break;
      case 'mi': result = 'miles';
        break;
      case 'gal': result = 'gallons';
        break;
      default: result;
                 }
    //console.log(result);
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch(initUnit){
      case 'mi': result = Number.parseFloat(initNum * miToKm).toFixed(5);
        break;
      case 'lbs': result = Number.parseFloat(initNum * lbsToKg).toFixed(5);
        break;
      case 'gal': result = Number.parseFloat(initNum * galToL).toFixed(5);
        break;
      case 'km': result = Number.parseFloat(initNum / miToKm).toFixed(5);
        break;
      case 'kg': result = Number.parseFloat(initNum / lbsToKg).toFixed(5);
        break;
      case 'L': result = Number.parseFloat(initNum / galToL).toFixed(5);
      default: result;
                   }
  
    return Number(result);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit, spellInitialUnit, spellUnit) {
    var result;
    if(initUnit == 'invalid unit' && initNum == 'invalid number'){
      result = 'invalid unit and number';
      console.log('case1');
    }
     else if(initUnit == 'invalid unit') {
    result = initUnit;
       console.log('case2');
    }else if(initNum == 'invalid number') {
    result = initNum;
    }
    else{
    result =  `${initNum} ${spellInitialUnit} converts to ${returnNum} ${spellUnit}`;
    }
    //console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
