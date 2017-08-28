# Lodash

Lodash是封装了诸多对字符串、数组、对象等常见数据类型的处理函数的类库

## Array

### _.chunk(array, splitNumber)

> 按splitNumber来平分array为多个数组，如果不能平分，则剩余部分组成最后一个数组

```js
var ret = _.chunk([1,2,3,4,5,6,7,8,9], 2);
console.log(ret); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9 ] ]

ret = _.chunk([1,2,3,4,5,6,7,8,9], 3);
console.log(ret); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
```

### _.compact(array)

> 输出一个数组，包含array中不为假值的项, 假值包括：0 "" false undefined null NaN

```js
ret = _.compact([1, 0, "", false, undefined, NaN, null, [], {}]);
console.log(ret); // [1, [], {}]
```

### _.concat(array/value)

> 创建一个新数组，包含传入的数组的项或其他值

```js
ret = _.concat(1, [2], [[3]]);
console.log(ret); // [1, 2, [3]]
```

### _.difference(array, [values])

> 返回一个数组，包含array中不再[values]中的项

```js
ret = _.difference([1,2], [2,3]);
console.log(ret); // [1]
```

### _differenceBy(array, [values], filter)

> 返回一个数组，包含array与[values]中使用filter函数过滤之后，array不再[values]中的项

```js
ret = _.differenceBy([1.2, 3.4], [1.4, 2.4, 3.5], Math.floor);
console.log(ret); // []
```

### _.differenceWith(array, [values], comparator)

> 返回一个数组， 使用comparator进行比较，返回array不同于[vales]的项

```js
ret = _.differenceWith([1,2,3], [11,2,3], function(val1, val2) {
    return val1 == val2;
});
console.log(ret); // [1]
```

### _.drop(array,  num)

> 返回一个数组，包含从array开头删除num个的项之后剩余的项

```js
ret = _.drop([1,2,3,4,5], 1);
console.log(ret); // [2,3,4,5]
```

### _.dropRight(array, num)

> 返回一个数组，包含array从最末开始去掉num个项之后剩余的项

```js
ret = _.dropRight([1,2,3,4,5], 1);
console.log(ret); // [1,2,3,4]
```

### _.dropWhile(array, predicate)

> 返回一个数组，从头开始删除直到predicate函数返回false，包含剩余的项

```js
ret = _.dropWhile([1,2,3,4,5], function(val) {
    return val < 3;
});
console.log(ret); // [3,4,5]
```

### _.dropRightWhile(array, predicate)

> 返回一个数组，从尾开始删除知道predicate函数返回false， 包含剩余的项

```js
ret = _.dropRightWhile([1,2,3,4,5], function(val) {
    return val > 3;
});
console.log(ret); // [1,2,3]
```