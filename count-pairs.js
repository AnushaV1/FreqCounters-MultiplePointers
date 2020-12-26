// add whatever parameters you deem necessary
function countPairs(array, sum) {
    let counter = 0;
    let newSet = new Set(array);
    for(let value of array) {
    newSet.delete(value);
    if (newSet.has(sum - value)) {
        counter += 1;
        }
    }
return counter;
}

module.exports = countPairs;
