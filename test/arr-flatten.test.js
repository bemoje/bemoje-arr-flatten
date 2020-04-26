import arrFlatten from '../src/arr-flatten'

describe('arrFlatten', () => {
	test('works', () => {
		expect(arrFlatten([1, [2]])).toStrictEqual([1, 2])
		expect(arrFlatten([1, [2, [3]]])).toStrictEqual([1, 2, 3])
	})
})
