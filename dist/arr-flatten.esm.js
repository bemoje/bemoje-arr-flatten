const isArray = Array.isArray;

/**
 * Flattens the passed array recursively.
 * @param {Array} arr - the array to flatten
 * @returns {Array<*>}
 */
function arrFlatten(arr) {
	return arr.reduce((accum, elem) => {
		if (isArray(elem)) {
			accum.push(...arrFlatten(elem));
		} else {
			accum.push(elem);
		}
		return accum
	}, [])
}

export default arrFlatten;
export { arrFlatten };
