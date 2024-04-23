const reverseString = function(strIn) {
    let strOut = "";
    let curPos = 0;
    let strLen = strIn.length;
    let intCnt = 0;
    while (intCnt < strLen) {
        curPos = strLen - (1 + intCnt);
        strOut = strOut + strIn[curPos];
        intCnt = intCnt + 1;
    }
    return strOut;
};

// Do not edit below this line
module.exports = reverseString;
