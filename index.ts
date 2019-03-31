import { indexIsValid } from '@writetome51/index-is-valid';


export function errorIfIndexNotValidAfterOffsetWasAdded(index, arrayLength): void {
	let errorPrefix = `After the offset was added to the index of the passed value, the resulting index `;
	if (index < 0) {
		throw new Error(errorPrefix + `was a negative number. This is not allowed.`);
	}
	if (!(indexIsValid(index, arrayLength))) {
		throw new Error(errorPrefix + `was too high for this array`);
	}
}
