import arrFlatten from '../src/arr-flatten'

arrFlatten([1, [2]])
//=> [1, 2]

arrFlatten([1, [2, [3]]])
//=> [1, 2, 3]
