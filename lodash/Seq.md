# lodash - Seq

### _(value)

> 返回一个包装器对象以支持链式调用

> 链式调用是惰性的，直到最后需要得出结果它才会计算值

> 检索单个值或返回原始值的方法将自动终止链序列并返回未包装的值，可以显示调用_.value获取值

> 不支持链式的包装器方法：add, attempt, camelCase, capitalize, ceil, clamp, clone, cloneDeep, cloneDeepWith, cloneWith, conformsTo, deburr, defaultTo, divide, each, eachRight, endsWith, eq, escape, escapeRegExp, every, find, findIndex, findKey, findLast, findLastIndex, findLastKey, first, floor, forEach, forEachRight, forIn, forInRight, forOwn, forOwnRight, get, gt, gte, has, hasIn, head, identity, includes, indexOf, inRange, invoke, isArguments, isArray, isArrayBuffer, isArrayLike, isArrayLikeObject, isBoolean, isBuffer, isDate, isElement, isEmpty, isEqual, isEqualWith, isError, isFinite, isFunction, isInteger, isLength, isMap, isMatch, isMatchWith, isNaN, isNative, isNil, isNull, isNumber, isObject, isObjectLike, isPlainObject, isRegExp, isSafeInteger, isSet, isString, isUndefined, isTypedArray, isWeakMap, isWeakSet, join, kebabCase, last, lastIndexOf, lowerCase, lowerFirst, lt, lte, max, maxBy, mean, meanBy, min, minBy, multiply, noConflict, noop, now, nth, pad, padEnd, padStart, parseInt, pop, random, reduce, reduceRight, repeat, result, round, runInContext, sample, shift, size, snakeCase, some, sortedIndex, sortedIndexBy, sortedLastIndex, sortedLastIndexBy, startCase, startsWith, stubArray, stubFalse, stubObject, stubString, stubTrue, subtract, sum, sumBy, template, times, toFinite, toInteger, toJSON, toLength, toLower, toNumber, toSafeInteger, toString, toUpper, trim, trimEnd, trimStart, truncate, unescape, uniqueId, upperCase, upperFirst, value, and words

```js
var wrapped = _([1,2,3]);
var ret = wrapped.reduce(_.add);
l(ret); // 6

ret = wrapped.map(n => n*n);
l(ret); // LodashWrapper
l(ret.value()); // [1, 4, 9]
```

### _.chain(value)

> 显示的创建一个包装器，该包装器必须显示使用_.value来解出值

```js
var users = [
    { 'user': 'barney',  'age': 36 },
    { 'user': 'fred',    'age': 40 },
    { 'user': 'pebbles', 'age': 1 }
  ];
   
  var youngest = _
    .chain(users)
    .sortBy('age')
    .map(function(o) {
      return o.user + ' is ' + o.age;
    })
    .head()
    .value();

l(youngest); // pebbles is 1
```

### _.tap(value, interceptor)

> 拦截器，可以在链式中间进行interceptor处理

```js
_([1, 2, 3])
 .tap(function(array) {
// Mutate input array.
   array.pop();
 })
 .reverse()
 .value();
// => [2, 1]
```

### _.thru(value, interceptor)

> 拦截器，该方法可以在中间过程替换掉链式中的中间值

```js
_('  abc  ')
 .chain()
 .trim()
 .thru(function(value) {
   return [value];
 })
 .value();
// => ['abc']
```

### _.prototype[Symbol.iterator]()

> 使包装器可迭代

```js
var wrapped = _([1, 2]);
 
wrapped[Symbol.iterator]() === wrapped;
// => true
 
Array.from(wrapped);
// => [1, 2]
```

### _.prototype.at([paths])

> _.at 的包装器版本

```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
_(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]
```

### _.prototype.chain()

> 显示创建链式包装器的方法

### _.prototype.commit()

> 执行链序列并返回包装好的结果

```js
var array = [1, 2];
var wrapped = _(array).push(3);
 
console.log(array);
// => [1, 2]
 
wrapped = wrapped.commit();
console.log(array);
// => [1, 2, 3]
 
wrapped.last();
// => 3
 
console.log(array);
// => [1, 2, 3]
```

### _.prototype.next()

> 获取可迭代包装器的下一个值

```js
var wrapped = _([1, 2]);
 
wrapped.next();
// => { 'done': false, 'value': 1 }
 
wrapped.next();
// => { 'done': false, 'value': 2 }
 
wrapped.next();
// => { 'done': true, 'value': undefined }
```

### _.prototype.plant(value)

> 使用传入的值克隆一个包装器

```js
function square(n) {
  return n * n;
}
 
var wrapped = _([1, 2]).map(square);
var other = wrapped.plant([3, 4]);
 
other.value();
// => [9, 16]
 
wrapped.value();
// => [1, 4]
```

### _.prototype.reverse()

> _.reverse 的包装器版本

### _.prototype.value()

> 执行链序列解出值