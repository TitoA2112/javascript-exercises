
// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8

const repeatString = function(strIn, numIn) {

    let strOut = "";

    if ((numIn < 0) || (isNaN(numIn))) {
        strOut = "ERROR";
    } else {
        let loopCount = 0;
        while (loopCount < numIn) {
            loopCount = loopCount + 1;
            strOut = strOut + strIn;
        }  //  while
    }  //  else
    return strOut;
};  //  const repeatString

// Do not edit below this line
module.exports = repeatString;

// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8
