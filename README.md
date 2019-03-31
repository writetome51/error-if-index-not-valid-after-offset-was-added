# errorIfIndexIsNegative(index): void

Triggers error if `index` is negative number, saying "value not found in array".  
This function is intended to be called after you've called Array.indexOf(), or any  
function that returns a negative number if the value being searched for in the array   
was not found.  You then pass that resulting index to this function to make sure if  
the value was found.

## Example
```
let arr = [1,2,3,4];
let index = arr.indexOf(5);
errorIfIndexIsNegative(index);
// "Error:  value not found in array"
```

## Installation
`npm install  error-if-index-is-negative`

## Loading
```
// if using TypeScript:
import { errorIfIndexIsNegative } from 'error-if-index-is-negative';
// if using ES5 JavaScript:
var errorIfIndexIsNegative = 
    require('error-if-index-is-negative').errorIfIndexIsNegative;
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
