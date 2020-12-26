// add whatever parameters you deem necessary
function twoArrayObject(array1, array2) {
    let Obj = {};
    for(let el=0; el< array1.length; el++) {
    Obj[array1[el]] = array2[el] || null;
}
return Obj;
}


module.exports = twoArrayObject;



