// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
let strIdx = 0;
if(!str1) return true;
for(let char of str2) {
    if(char === str1[strIdx]) {
        strIdx++;
    }
    if(strIdx === str1.length) return true;
}
return false;

}
module.exports = isSubsequence;