var _ = require('../lodash');
// ---------------------------------------------------------------------------------
var ret = _.chunk([1,2,3,4,5,6,7,8,9], 2);
console.log(ret); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]
ret = _.chunk([1,2,3,4,5,6,7,8,9], 3);
console.log(ret); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// ---------------------------------------------------------------------------------
ret = _.compact([1, 0, "", false, undefined, NaN, null, [], {}]);
console.log(ret); // [1, [], {}]
// ---------------------------------------------------------------------------------
ret = _.concat(1, [2], [[3]]);
console.log(ret); // [1, 2, [3]]
// ---------------------------------------------------------------------------------
ret = _.difference([1,2], [2,3]);
console.log(ret); // [1]
// ---------------------------------------------------------------------------------
ret = _.differenceBy([1.2, 3.4], [1.4, 2.4, 3.5], Math.floor);
console.log(ret); // []
// ---------------------------------------------------------------------------------
ret = _.differenceWith([1,2,3], [11,2,3], function(val1, val2) {
    return val1 == val2;
});
console.log(ret); [1]
// ---------------------------------------------------------------------------------
ret = _.drop([1,2,3,4,5], 1);
console.log(ret); // [2,3,4,5]
// ---------------------------------------------------------------------------------
ret = _.dropRight([1,2,3,4,5], 1);
console.log(ret); // [1,2,3,4]
// ---------------------------------------------------------------------------------
ret = _.dropWhile([1,2,3,4,5], function(val) {
    return val < 3;
});
console.log(ret); // [3,4,5]
// ---------------------------------------------------------------------------------
ret = _.dropRightWhile([1,2,3,4,5], function(val) {
    return val > 3;
});
console.log(ret); // [1,2,3]
// ---------------------------------------------------------------------------------
ret = _.fill([1,2,3,4,5], "-", 2, 3);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.findIndex([1,2,3], function(val) {
    return val == 2;
}, 1);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.findLastIndex([1,2,3,4,5,6,7], function(val){
    return val > 5;
}, -1);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.flatten([1, [2, [3, 4]], [5, 6]]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.flattenDeep([1, [2, [3, 4]], [5, 6]]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.flattenDepth([1,[2,[3,4]],5,6], 1);
console.log(ret);
ret = _.flattenDepth([1,[2,[3,4]],5,6], 2);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.fromPairs([["a", 1], ["b", 2]]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.head([1,2]);
console.log(ret); 
// ---------------------------------------------------------------------------------
ret = _.last([1,2]);
console.log(ret); 
// ---------------------------------------------------------------------------------
ret = _.indexOf([1,2,3,4], 2, 2);
console.log(ret); 
ret = [1,2,3,4].indexOf(3);
console.log(ret); 
// ---------------------------------------------------------------------------------
ret = _.initial([1,2,3,4]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.intersection([1,2,3],[2,3,4],[3,4,5]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.intersectionBy([2.2,3.4], [3.1, 4.5], Math.floor);
console.log(ret);

ret = _.intersectionBy([{x: 1}, {x:2}], [{x:2}, {x:1}], 'x');
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.intersectionWith([1,2,3], [1,4,9], function(val1, val2){
    return Math.pow(val1, 2) === val2;
});
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.join(['a', 'b', 'c'], '~!~');
console.log(ret);
// ---------------------------------------------------------------------------------
var ary = [1,2,3,4,5];
ret = _.pull(ary, 1, 3);
console.log(ret);
console.log(ary);
// ---------------------------------------------------------------------------------
var ary = [1,2,3,4,5];
ret = _.pullAll(ary, [1, 3]);
console.log(ret);
console.log(ary);
// ---------------------------------------------------------------------------------
var ary = [1,2,3,4,5];
ret = _.pullAllBy(ary, [1.5,3.3], Math.round);
console.log(ret);
console.log(ary);
// ---------------------------------------------------------------------------------
var ary = [1,2,3,4,5];
ret = _.pullAllWith(ary, [2,3], function(val1, val2) {
    return val1 > val2;
});
console.log(ret);
console.log(ary);
// ---------------------------------------------------------------------------------
var ary = [1,2,3,4,5];
ret = _.remove(ary, function(val) {
    return val > 3;
});
console.log(ret);
console.log(ary);
// ---------------------------------------------------------------------------------
ret = _.sortedIndex([1,2,2,4,5], 3);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.sortedUniq([1,1,2,2,3,3,4,4,5]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.zip([1,2,3], ['a', 'b','c'], [true, false], [{},{}]);
console.log(ret);

ret = _.unzip(ret);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.unzipWith([[1,2,3], [4,5,6]], function(...res) {
    return res.reduce(function(sum, x) {return sum + x;});
});
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.without([1,2,3,4], 1,2);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.xor([1,2,3,4], [2,3,4,5]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.zipObject(['x', 'y'], [1, 2]);
console.log(ret);
// ---------------------------------------------------------------------------------
ret = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
console.log(ret);
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------



