(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global['arr-flatten'] = {}));
}(this, (function (exports) { 'use strict';

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

	exports.arrFlatten = arrFlatten;
	exports.default = arrFlatten;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
