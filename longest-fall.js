function longestFall(array) {
    let maxCount = 0;
    let counter = 1;
    // edge case :
    if(array.length === 0) return 0;

    for(let i=1; i < array.length; i++) {

        if(array[i] < array[i-1]) {
            counter +=1;
            maxCount = Math.max(counter, maxCount);
        }
        else {
            counter = 1;  // Reset the counter if the number starts increasing
        }
    }
    return maxCount || 1;

}

module.exports = longestFall;