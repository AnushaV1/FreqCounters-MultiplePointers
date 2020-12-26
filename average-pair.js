// add whatever parameters you deem necessary
function averagePair(array, average) {
let left = 0;
let right = array.length-1;

while(left < right) {
    let avgPair = (array[left] + array[right]) / 2;
    if(avgPair === average) {
        return true;
    } 
    else if(avgPair > average){
        right--;
    } else {
        left++;
    }
}
return false;

}
module.exports = averagePair;