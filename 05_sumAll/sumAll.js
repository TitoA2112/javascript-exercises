
// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8

const sumAll = function() {
    
    let begNo = 0;
    let endNo = 0;
    let ndx = 0;
    let numOut = 0;
    let strOut = "";
    
    if ((Array.isArray(arguments[0])) || (Array.isArray(arguments[1]))) {
        strOut = "ERROR";
    } else if ((Number.isInteger(arguments[0]) === false) || 
    (Number.isInteger(arguments[1]) === false)) {
        strOut = "ERROR";
    } else if ((arguments[0] < 0) || (arguments[1] < 0)) {
        strOut = "ERROR";
    } else if (arguments[0] > arguments[1]) {
        endNo = arguments[0];
        begNo = arguments[1];
    } else {
        begNo = arguments[0];
        endNo = arguments[1];
    }  //  if ((Array.isArray(arguments[0])) || (Array.isArray(arguments[1]))) 

    if (strOut === "ERROR") {
        return strOut;
    } else {
        for (ndx = begNo; ndx < (endNo + 1); ndx++) {
            numOut = numOut + ndx;
        }  //  for (ndx = begNo; ndx < (endNo + 1); ndx++)
        return numOut;
    }  //  if (strOut === "ERROR") 

};  //  const sumAll = function(arg1, arg2)

// Do not edit below this line
module.exports = sumAll;

// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8
