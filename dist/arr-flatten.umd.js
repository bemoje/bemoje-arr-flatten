(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-array')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-array'], factory) :
	(global = global || self, global['arr-flatten'] = factory(global.isArray));
}(this, (function (isArray) { 'use strict';

	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;

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

	return arrFlatten;

})));
