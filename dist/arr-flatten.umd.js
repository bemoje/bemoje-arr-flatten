(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/assert-args'), require('@bemoje/assert-type'), require('@bemoje/is-array')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/assert-args', '@bemoje/assert-type', '@bemoje/is-array'], factory) :
	(global = global || self, global['arr-flatten'] = factory(global.assertArgs, global.assertType, global.isArray));
}(this, (function (assertArgs, assertType, isArray) { 'use strict';

	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;
	isArray = isArray && Object.prototype.hasOwnProperty.call(isArray, 'default') ? isArray['default'] : isArray;

	/**
	 * Flattens the passed array recursively.
	 * @param {Array} arr - the array to flatten
	 * @returns {Array<any>}
	 */
	function arrFlatten(arr) {
		assertArgs(arr);
		assertType(Array, arr);

		function recurse(arr) {
			return arr.reduce((accum, element, i) => {
				if (isArray(element)) {
					arrFlatten(element).forEach((value) => accum.push(value));
				} else {
					accum.push(element);
				}
				return accum
			}, [])
		}
		return recurse(arr)
	}

	return arrFlatten;

})));
