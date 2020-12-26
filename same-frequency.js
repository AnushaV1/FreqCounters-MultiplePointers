// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    if(num1.toString().length !== num2.toString().length) return false;
    const num1Obj = makeFreqCounter(num1.toString());
    const num2Obj = makeFreqCounter(num2.toString());
    for(let key in num1Obj) {
    
        if(num1Obj[key] !== num2Obj[key]) return false;
        }
return true;
}

function makeFreqCounter(num) {
        let obj = {};
        for(let i of num) {
        obj[i] = obj[i] + 1 || 1;
        }
        return obj;
}


module.exports = sameFrequency;