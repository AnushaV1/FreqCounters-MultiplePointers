// This function is something like a balance where the load is maximum in one end(right) and empty/zero at other end (left).
// Shift the load towards center by adding to left and removing from right.
function pivotIndex(array) {
    let leftSum = 0;
    let rightSum = array.reduce((x,y) => x + y, 0);
    let pivotIdx = -1; // set to -1 which is returned if there is no pivot index present
    for(let i=0; i < array.length; i++) {
        leftSum += array[i];
        if(leftSum === rightSum) {
            pivotIdx = i;
            break;
        }
        rightSum -= array[i];
    }
return pivotIdx;

}

module.exports = pivotIndex;