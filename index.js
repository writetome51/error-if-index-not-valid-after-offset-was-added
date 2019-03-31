"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_is_valid_1 = require("@writetome51/index-is-valid");
function errorIfIndexNotValidAfterOffsetWasAdded(index, arrayLength) {
    var errorPrefix = "After the offset was added to the index of the passed value, the resulting index ";
    if (index < 0) {
        throw new Error(errorPrefix + "was a negative number. This is not allowed.");
    }
    if (!(index_is_valid_1.indexIsValid(index, arrayLength))) {
        throw new Error(errorPrefix + "was too high for this array");
    }
}
exports.errorIfIndexNotValidAfterOffsetWasAdded = errorIfIndexNotValidAfterOffsetWasAdded;
