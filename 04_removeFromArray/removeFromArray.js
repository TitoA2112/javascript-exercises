
// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8

const removeFromArray = function() {
    //  init
    let arrayIn = arguments[0];
    let arrayInLen = arrayIn.length
    let numToRemove = (arguments.length - 1);
    let arrayOut = [];
    let matchSw = false;
    let ndx1 = 0;
    let ndx2 = 0;
    //  main loop
    for (ndx1 = 0; ndx1 < arrayInLen; ndx1++) {
        matchSw = false;
        for (ndx2 = 1; ndx2 < (numToRemove + 1); ndx2++) {
            if (arrayIn[ndx1] === arguments[ndx2]) {
                matchSw = true;
                break;
            }  //  if (arrayIn[ndx1] === arguments[ndx2]) 
        }  //  for (ndx2 = 1; ndx2 < (numToRemove + 1); ndx2++)
        if (matchSw === false) {
            arrayOut.push(arrayIn[ndx1]);
        }
    }  //  for (ndx1 = 0; ndx1 < arrayInLen; ndx1++)
    //  term
    return(arrayOut)
};  //  const removeFromArray = function() 

// Do not edit below this line
module.exports = removeFromArray;

// .+... 1 ...+... 2 ...+... 3 ...+... 4 ...+... 5 ...+... 6 ...+... 7 ...+... 8
