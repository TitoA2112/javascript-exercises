
const leapYears = function(yrIn) {
    
    let leapTf = false;
    
    if ((yrIn % 400) === 0) {
        leapTf = true;
    } else if ((yrIn % 100) === 0) {
        leapTf = false;
    } else if ((yrIn % 4) === 0) {
        leapTf = true;  
    }  //  if ((yrIn % 400) === 0)

    return leapTf;

};  //  const leapYears = function(yrIn)

// Do not edit below this line
module.exports = leapYears;
