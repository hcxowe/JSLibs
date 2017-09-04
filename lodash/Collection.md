# Lodash - Collection

### _.countBy(collection, iteratee)

> 返回一个对象， 统计colleaction中的项进行iteratee处理之后相同项出现的次数

```js
var ret = _.countBy([2.3, 2.1, 3.4, 4.3], Math.floor);
console.log(ret); // {'2': 2, '3':1, '4':1}

var ret = _.countBy(['one', 'two', 'three'], 'length');
console.log(ret); // { '3': 2, '5': 1 }
```

### _.every(collection, predicate)

> 返回布尔值，如果collection每项都通过predicate指定的方式返回true， 否则返回false

```js
var cols = [{
    name: 'hcx',
    age: 28,
    active: false
},
{
    name: 'fxm',
    age: 27,
    active: false
}];

// 默认对每项进行boolean化处理
ret = _.every(cols);
console.log(ret); // true

// 每项通过指定函数判断
ret = _.every(cols, function(item) {return item.age > 27;});
console.log(ret); // false

// 每项是否满足指定的项
ret = _.every(cols, { name: 'hcx', active: true });
console.log(ret); // false

// 判断每项中'active'的值是否为false
ret = _.every(cols, ['active', false]);
console.log(ret); // true

// 判断每项active的值
ret = _.every(cols, 'active');
console.log(ret); // false
```

### _.filter(collection, predicate)

> 返回一个新数组，返回满足predicate的项，predicate验证方式与every一样

```js
cols = [{
    name: 'hcx',
    age: 28,
    active: true
},
{
    name: 'fxm',
    age: 27,
    active: false
}];
ret = _.filter(cols, function(item) { return item.active;});
console.log(ret); // [ { name: 'hcx', age: 28, active: true } ]
```

### _.find(collection, predicate, fromIndex)

> 返回一个项，返回predicate验证成功的第一个项，可以指定开始位置

### _.findLast(collection, predicate, fromIndex)

> 倒序_.find

### _.flatMap(collection, iteratee)

> 返回一个新数组，每项传入iteratee并返回所有iteratee处理的结果组成的数组，去一层纬

```js
ret = _.flatMap([1, 2], function(item) { return [item + 1, item + 5]});
console.log(ret); // [2,6,3,7]
```

### _.flatMapDeep(collection, iteratee)

> 执行flatMap的操作，结果一纬化

###  _.flatMapDepth(collection, iteratee, depath)

> 执行flatMap操作，结果可以指定去纬的层数

### _.forEach(collection, iteratee)

> 遍历colleaction指定iteratee方法

###  _forEachRight(collection, iteratee)

> 从右开始 forEach

### _.groupBy(collection, iteratee)

> 返回新数组，使用iteratee对colleaction进行处理，统计结果相同的项

```js
ret = _.groupBy([2.1, 2.2, 3.1,3.2], Math.floor);
console.log(ret); // { '2': [ 2.1, 2.2 ], '3': [ 3.1, 3.2 ] }
```

### _.includes(collection, value, [fromIndex=0])

> 返回布尔值， colleaction是否包含value

### _.invokeMap(collection, path, [args])

> 返回修改后的数组，该方法会修改原数组，对collection每项执行path方法

```js
cols = [[5, 1, 7], [3, 2, 1]];
ret = _.invokeMap(cols, 'sort');
console.log(ret); // [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
ret.push([1]);
console.log(cols); // [ [ 1, 5, 7 ], [ 1, 2, 3 ] ]
```

### _.keyBy(collection, iteratee)

>  返回一个新的collection， 对每项执行iteratee，将结果作为返回数组的key，将原来每项作为值，组成一个心得colleaction

```js
cols = [{
    name: 'hcx',
    age: 28,
    active: true
},
{
    name: 'fxm',
    age: 27,
    active: false   
}];
ret = _.keyBy(cols, function(item) {return item.name;});
console.log(ret);  // { hcx: { name: 'hcx', age: 28, active: true }, fxm: { name: 'fxm', age: 27, active: false } }
```

### _.map(collection, iteratee)

> 返回新集合， 对collection每项执行iteratee操作

```js
function square(n) {
    return n * n;
}
   
ret = _.map([4, 8], square);
console.log(ret); // [16, 64]
   
ret = _.map({ 'a': 4, 'b': 8 }, square);
console.log(ret); // [16, 64] 不能确保顺序
   
var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];
   
ret = _.map(users, 'user');
console.log(ret); // [ 'barney', 'fred' ]
```

### _.orderBy(collection, [iteratees], [orders])

> 返回排序后的新数组，对collection的 iteratees 指定 排序方式orders

```js
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
];
   k

ret = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(ret);
/*[ { user: 'barney', age: 36 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 48 },
  { user: 'fred', age: 40 } ] */
```

### _.partition(collection, predicate)

> 对collection通过predicate指定方式分组，返回新数组

```js
var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
   
ret = _.partition(users, function(o) { return o.active; });
console.log(ret);
/*
[ [ { user: 'fred', age: 40, active: true } ],
  [ { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false } ] ]
*/
  
_.partition(users, { 'age': 1, 'active': false });
console.log(ret);
/*
[ [ { user: 'fred', age: 40, active: true } ],
  [ { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false } ] ]
*/

_.partition(users, ['active', false]);
console.log(ret);
/*
[ [ { user: 'fred', age: 40, active: true } ],
  [ { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false } ] ]
*/

_.partition(users, 'active');
console.log(ret);
/*
[ [ { user: 'fred', age: 40, active: true } ],
  [ { user: 'barney', age: 36, active: false },
    { user: 'pebbles', age: 1, active: false } ] ]
*/
```

### _.reduce(collection, iteratee, [accumulator])

> 对collection执行每项执行iteratee，以accumulator为初始值进行计算出一个结果

```js
ret = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});
console.log(ret); // { '1': [ 'a', 'c' ], '2': [ 'b' ] }
```


### _.reduceRight(collection, iteratee, [accumulator])

> 从右开始reduce

### _.reject(collection, predicate)

> 返回新集合，包含collection不满足predicate的项，与filter进行相反的操作

### _.sample(collection)

> 从collection中返回一个随机的项

### _.sampleSize(collection, [n=1])

> 从collection中返回n个随机的项

### _.shuffle(collection)

> 随机重排collection

### _.size(collection)

> 返回collection的项个数

### _.some(collection, predicate)

> 返回布尔值，只要有一个项满足predicate

### _.sortBy(collection, [iteratees])

> 返回新集合，通过iteratees指定排序方式对collection进行排序

```js
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
ret = _.sortBy(users, [function(o) { return o.user; }]);
console.log(ret);
/*
[ { user: 'barney', age: 36 },
  { user: 'barney', age: 34 },
  { user: 'fred', age: 48 },
  { user: 'fred', age: 40 } ]
*/

ret = _.sortBy(users, ['user', 'age']);
console.log(ret);
/*
[ { user: 'barney', age: 34 },
  { user: 'barney', age: 36 },
  { user: 'fred', age: 40 },
  { user: 'fred', age: 48 } ]
*/
```
