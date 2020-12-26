// add whatever parameters you deem necessary
function constructNote(msgStr, letterStr) {
if(!letterStr) return false;
if(!msgStr) return true;
const msgObj = makeFreqCounter(msgStr);
const letterObj = makeFreqCounter(letterStr);

for (let char in msgObj) {
    if(!letterObj[char]) {
        return false;
    }

    if(!(msgObj[char] <= letterObj[char])) return false;
}

return true;
}

function makeFreqCounter(str) {
    let freqObj = {};
    for(let char of str) {
        freqObj[char] = (freqObj[char] + 1) || 1;
    }
    return freqObj;
}


module.exports = constructNote;