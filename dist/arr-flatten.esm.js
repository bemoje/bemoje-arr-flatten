import isArray from '@bemoje/is-array';

/**
 * Flattens the passed array recursively.
 * @param {Array} arr - the array to flatten
 * @returns {Array<any>}
 */
function arrFlatten(arr) {
	return arr.reduce((accum, element, i) => {
		if (isArray(element)) {
			arrFlatten(element).forEach((value) => accum.push(value));
		} else {
			accum.push(element);
		}
		return accum
	}, [])
}

export default arrFlatten;
