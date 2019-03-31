"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/********************
 function getIndexSlightlyOff(value, array, offset){
    let index = array.indexOf(value);
    index += offset;
    errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    return index;
}

 //let arr = [1,2,3,4,5];
 //let index = getIndexSlightlyOff(5, arr, 1);
 // Error: "After the offset was added to the index, the resulting
 // index was too high for this array"

 let arr = [1,2,3,4,5];
 let index = getIndexSlightlyOff(2, arr, -2);
 // Error: "After the offset was added to the index, the resulting
 // index was a negative number. This is not allowed."


 ********************/
