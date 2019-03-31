# errorIfIndexNotValidAfterOffsetWasAdded(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;arrayLength<br>): void

Triggers error if `index` is not valid, assuming an offset was recently added to it.  
For example, if you're writing a getIndex() function that gives you the option of adding  
an offset to modify the index it returns, `errorIfIndexNotValidAfterOffsetWasAdded()`  
might come in handy.  For more info, read the example below.

## Example
```ts
function getIndexSlightlyOff(value, array, offset){
    let index = array.indexOf(value);
    index += offset;
    // Now check if index still valid:
    errorIfIndexNotValidAfterOffsetWasAdded(index, array.length);
    return index;
}

let arr = [1,2,3,4,5];
let index = getIndexSlightlyOff(5, arr, 1);
// Error: "After the offset was added to the index, the resulting 
// index was too high for this array"

let arr = [1,2,3,4,5];
let index = getIndexSlightlyOff(2, arr, -2);
// Error: "After the offset was added to the index, the resulting 
// index was a negative number. This is not allowed."
```

## Installation
`npm install  error-if-index-not-valid-after-offset-was-added`

## Loading
```ts
// if using TypeScript:
import { errorIfIndexNotValidAfterOffsetWasAdded } 
    from 'error-if-index-not-valid-after-offset-was-added';
// if using ES5 JavaScript:
var errorIfIndexNotValidAfterOffsetWasAdded = 
    require('error-if-index-not-valid-after-offset-was-added')
    .errorIfIndexNotValidAfterOffsetWasAdded;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
