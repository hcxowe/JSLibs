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

### _.fill(array, value, start, end)

> 返回一个数组， array中start - end（不包括）使用value替换

```js
ret = _.fill([1,2,3,4,5], "-", 2, 3);
console.log(ret); // [1,2,'-',4,5]
```

### _.findIndex(array, predicate, fromIndex)

> 返回一个数字，array中的fromIndex项开始使predicate返回true的索引

```js
ret = _.findIndex([1,2,3], function(val) {
    return val == 2;
}, 1);
console.log(ret); // 1
```

### _.findLastIndex(array, predicate, fromIndex)

```js
ret = _.findLastIndex([1,2,3,4,5,6,7], function(val){
    return val > 5;
}, -1);
console.log(ret); // 6
```

### _.flatten(array)

> 返回一个数组，减少array中的纬度

```js
ret = _.flatten([1, [2, [3, 4]], [5, 6]]);
console.log(ret); // [1, 2, [3, 4], 5, 6]
```

### _.flattenDeep(array)

> 返回一个数组，一纬化array

```js
ret = _.flattenDeep([1, [2, [3, 4]], [5, 6]]);
console.log(ret); // [1,2,3,4,5,6]
```

### _.flattenDepth(array, depth)

> 返回一个数组，可以定义去纬的次数depth，相当于调用flatten多少次返回的结果

```js
ret = _.flattenDepth([1,[2,[3,4]],5,6], 1);
console.log(ret); // [ 1, 2, [ 3, 4 ], 5, 6 ]
ret = _.flattenDepth([1,[2,[3,4]],5,6], 2);
console.log(ret); // [ 1, 2, 3, 4, 5, 6 ]
```

### _.fromPairs(pairs)

> 返回一个对象，可以将[键,值]方式的数组转换成对象{键: 值}

```js
ret = _.fromPairs([["a", 1], ["b", 2]]);
console.log(ret); // {a: 1, b: 2}
```

### _.head(array)

> 返回一个对象，array中第一个项

### _.last(array)

> 返回一个对象，array中最后一个项

### _.nth(array, index)

> 返回一个对象，array中指定index索引的项

### _.indexOf(array, value, fromIndex)

> 返回一个数值，array中从fromIndex索引开始查找value，返回找到值的索引，未找到返回-1

### _.lastIndexOf(array, value, fromIndex)

> 返回一个数值，array中从fromIndex索引开始倒序查找value，返回找到值的索引，未找到返回-1

### _initial(array)

> 返回一个数组，array去掉最后一项

### _.intersection(...arrays)

> 返回一个数组，arrays的交集

```js
ret = _.intersection([1,2,3],[2,3,4],[3,4,5]);
console.log(ret); // [3]
```

### _.intersectionBy(arrays, iteratee)

> 返回一个数组，指定计算规则，按第一个数组的顺序返回项

```js
ret = _.intersectionBy([2.2,3.4], [3.1, 4.5], Math.floor);
console.log(ret); // [3.4]

ret = _.intersectionBy([{x: 1}, {x:2}], [{x:2}, {x:1}], 'x');
console.log(ret); // [{x: 1}, {x:2}]
```

### _.intersectionWith(arrays, comparator)

> 返回一个数组， 使用comparator比较arrays中交叉的项，返回第一个数组的项

```js
ret = _.intersectionWith([1,2,3], [1,4,9], function(val1, val2){
    return Math.pow(val1, 2) === val2;
});
console.log(ret); // [1,2,3]
```

### _.join(array, separator)

> 返回一个字符串, separator连接array

### _.pull(array, values)

> 返回一个数组并改变原数组，从array中去掉values之后剩余的项， 返回数组跟原数组项一样

```js
var ary = [1,2,3,4,5];
ret = _.pull(ary, 1, 3);
console.log(ret); // [2,4,5]
console.log(ary); // [2,4,5]
```

### _.pullAll(array, [values])

> 与pull方法一样，只是第二个参数可以传入数组

### _.pullAllBy(array, [values] iteratee)

> 在比较array与[values]之前对他们每项都进行iteratee函数处理一下，然后在做pullAll方法一样的事情

```js
var ary = [1,2,3,4,5];
ret = _.pullAllBy(ary, [1.5,3.3], Math.round);
console.log(ret);
console.log(ary);
```

### _.pullAllWith(array, [values], comparator)

> 使用comoarator方法定义比较方式，去掉comparator中返回true的项

```js
var ary = [1,2,3,4,5];
ret = _.pullAllWith(ary, [2,3], function(val1, val2) {
    return val1 > val2;
});
console.log(ret); // [1,2]
console.log(ary); // [1,2]
```

### _.pullAt(array, [indexes])

> 去掉指定索引的项，其他跟pull一样

### _.remove(array, predicate)

> 为array执行predicate函数，返回数组为predicate返回true的项，并改变原数组为剩余的项

```js
var ary = [1,2,3,4,5];
ret = _.remove(ary, function(val) {
    return val > 3;
});
console.log(ret);
console.log(ary);
```

### _.reverse(array)

> 跟 array.prototype.reverse一样

### _.slice(array, start, end)
 
> 跟 array.prototype.slice一样

### _.sortedIndex(array, value)

> 返回索引，使用二分查找来确认value插入array中的位置，保持原数组的排序

```js
ret = _.sortedIndex([1,2,2,4,5], 3);
console.log(ret); // 3
```

### _.sortedIndexBy(array, value, iteratee)

> 执行sortedIndex之前使用iteratee来处理array的项与value

### _.sortedIndexOf(array, value)

> 与_.indexOf 方法一样，只是会在已经排序的array中进行二分查找，返回第一个出现的位置

### _.sortedLastIndex(array, value)

> 与_.sortedIndexOf一样，只是倒序

### _.sortedLastIndexBy(array, value, iteratee)

> 与_.sortedLastIndex一样，只是在处理之前进行iteratee处理

### _.sortedLastIndexOf(array, value)

> 处理已排序数组array中倒序查找value， 返回索引

### _.sortedUniq(array)

> 对已排序数组array进行去重，返回一个新数组

```js
ret = _.sortedUniq([1,1,2,2,3,3,4,4,5]);
console.log(ret); // [1,2,3,4,5] 
```

### _.sortedUniqBy(array, iteratee)

> _.sortedUniq之前对每项执行iteratee处理

### _.tail(array)

> 返回不包含array第一个项的数组

```js
ret = _.tail([1,2,3]);
console.log(ret); // [2,3]
```

### _.take(array, [n=1])

> 已数组array前n项组成一个新数组返回

```js
ret = _.take([1,2,3,4], 2);
console.log(ret); // [1, 2]
```

### _.takeRight(array, [n=1])

> 反着 _.take 

### _.takeWhile(array, predicate)

> 直到predicate函数返回true之前的项组成一个新数组返回

### _.takeRightWhile(array, predicate)

> 倒序，直到predicate函数返回true之前的项组成一个新数组返回

### _.union([arrays])

> [arrays]的并集

### _.unionBy([arrays], iteratee)

> 并之前先iteratee

### _.unionWith([arrays], [comparator])

> 使用comparator进行并

### _.uniq(array)

> 去重

### _.uniqBy(array, iteratee)

> 使用iteratee处理一下在去重

### _.uniqWith(array, comparator)

> 使用comparator进行去重

### _.unzip(array) 与 _.zip(arrays)

> _.zip从arrays每个数组中按索引抽取为新的子数组组成一个大的数组

> _.unzip与 _.zip执行相反的步骤

```js
ret = _.zip([1,2,3], ['a', 'b','c'], [true, false], [{},{}]);
console.log(ret); // [ [ 1, 'a', true, {} ],[ 2, 'b', false, {} ], [ 3, 'c', undefined,undefined ] ]

ret = _.unzip(ret); 
console.log(ret); // [ [ 1, 2, 3 ],[ 'a', 'b', 'c' ],[ true, false, undefined ],[ {}, {}, undefined ] ]
```

### _.unzipWith(array, iteratee)

> 定义之后的处理方法

```js
ret = _.unzipWith([[1,2,3], [4,5,6]], function(...res) {
    return res.reduce(function(sum, x) {return sum + x;});
});
console.log(ret); // [5, 7, 9]
```

### _.without(array, [values])

> 返回数组，array数组中不属于[values]中的项组成的数组

```js
ret = _.without([1,2,3,4], 1,2);
console.log(ret); // [3,4]
```

### _.xor([arrays])

> 返回一个数组，arrays中的异或部分

```js
ret = _.xor([1,2,3,4], [2,3,4,5]);
console.log(ret);
```

### _.xorBy([arrays], iteratee)

> 执行异或处理之前，执行iteratee处理

### _.xorWith([arrays], comparator)

> 自定义异或的过程

### _.zipObject([props], [values])

> props的项为键， values的项为值，组成对象返回

```js
ret = _.zipObject(['x', 'y'], [1, 2]);
console.log(ret); // {x:1, y:2}
```

### _.zipObjectDeep([props=[]], [values=[]])

> 深度组装，第一个数组中的项定位组合规则

```js
ret = _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
console.log(ret); // {a:{b:[{c:1}, {d:2}]}}
```

### _.zipWith([arrays], iteratee)

> 使用iteratee处理组合的元素

```js
ret = _.zipWith([1, 2], [10, 20], [100, 200], function(a, b, c) {
  return a + b + c;
});
console.log(ret); // [111, 222]
```