# lodash - Object

### _.assign(object, [source])

> 将源对象的可枚举字符串的键值分配给目标对象。源对象从左到右应用。后续的资源会覆盖以前的资源的属性分配。

```js
var a = { x: 1, y: 2 };
function B() {
    this.x = 2;
    this.z = 4;
}

B.prototype.u = 6;

var b = new B();
var ret = _.assign(a, b);
console.log(ret); // { x: 2, y: 2, z: 4 }
```

### _.assignIn(object, [sources])

> 同 _.assign， 它会包括prototype链上的属性

```js
var a = { x: 1, y: 2 };
function B() {
    this.x = 2;
    this.z = 4;
}

B.prototype.u = 6;

var b = new B();
var ret = _.assignIn(a, b);
console.log(ret); // { x: 2, y: 2, z: 4, u: 6 }
```

### _.assignInWith(object, sources, [customizer])

> 自定义组合方式

### _.assignWith(object, sources, [customizer])

> 指定不可枚举的组合方式

### _.at(object, [paths])

> 返回object指定path的值组成的数组

```js
var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
ret = _.at(object, ['a[0].b.c', 'a[1]']);
console.log(ret); // [3,4]
```

### _.create(prototype, [properties])

> 创建一个继承prototype的对象，propertoes分配给创建的对象

```js
function Shape() {
    this.x = 0;
    this.y = 0;
  }
   
  function Circle() {
    Shape.call(this);
  }
   
  Circle.prototype = _.create(Shape.prototype, {
    'constructor': Circle
  });
   
  var circle = new Circle;
  console.log(circle instanceof Circle); // true
  console.log(circle instanceof Shape); // true
```

### _.defaults(object, [sources])

> 组合多个对象，当属性已经存在了就忽略之后对象中的属性，该方法会改变object

```js
a = { x:1, y:2 };
b = { x:2, y:4, z:5 }
ret = _.defaults(a, b);
L(ret); // { x: 1, y: 2, z: 5 }
L(a); // { x: 1, y: 2, z: 5 }
```

### _.defaultsDeep(object, [sources])

> _.defaults 的递归版

```js
ret = _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
L(ret); // { 'a': { 'b': 2, 'c': 3 } }
```

### _.findKey(object, predicate)

> object 中查找第一个满足predicate的项

### _.findLastKey(object, predicate)

> 倒序 findKey

### _.forIn(object, iteratee)

> 遍历对象，包含自身及继承属性，return false 结束遍历

```js
function Foo() {
    this.a = 1;
    this.b = 2;
}

Foo.prototype.c = 3;

_.forIn(new Foo, function(value, key) {
    console.log(key);
}); // a b c
```

### _.forInRight(object, iteratee)

> 倒序版  _forIn

### _.forOwn(object, iteratee)

> 不包含继承的属性版的 _forIn

### _.forOwnRight(object, iteratee)

> 倒序的 _.forOwn

### _.functions(object)

### _.functionsIn(object)

### _.get(object, path, [defaultValue])

> 获取对象指定路径的值，如果值未定义则使用默认值

```js
var object = { 'a': [{ 'b': { 'c': 3 } }] };

L(_.get(object, 'a[0].b.c')); // 3
L(_.get(object, ['a', '0', 'b', 'c'])); // 3
L(_.get(object, 'a.b.c', 'default')); // default
```

### _.has(object, path)

> object是否包含指定的path

### _.hasIn(object, path)

> 路径可以包含继承

```js
var object = _.create({ 'a': _.create({ 'b': 2 }) });
 
_.hasIn(object, 'a'); // true
_.hasIn(object, 'a.b'); // true
_.hasIn(object, ['a', 'b']); // true
```

### _.invert(object)

> 颠倒object的键与值，如果有重复的将会被覆盖

```js
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
L(_.invert(object)); // { '1': 'c', '2': 'b' }
```

### _.invertBy(object, iteratee)

> 指定object的值在颠倒之后的iteratee处理

```js
var object = { 'a': 1, 'b': 2, 'c': 1 };
 
_.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }
 
_.invertBy(object, function(value) {
  return 'group' + value;
});
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
```

### _.invoke(object, path, [args])

> 调用object指定path下的方法，传入args参数

```js
var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
_.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```

### _.keys(object)

> 获取object的键组成的数组

### _.keysIn(object)

> 包含继承属性

### _.mapKeys(object, iteratee)

> 遍历object通过iteratee修改键

### _.mapValues(object, iteratee)

> 遍历object通过iteratee修改值

### _.merge(object, [sources])

> 合并对象，相同属性值覆盖，递归合并

```js
var object = {
    'a': [{ 'b': 2, 'c': 33 }, { 'd': 4 }]
};
   
var other = {
    'a': [{ 'c': 3 }, { 'e': 5 }],
    'aa': {x:1,y:2}
};

L(_.merge(object, other)); 
// { a: [ { b: 2, c: 3 }, { d: 4, e: 5 } ], aa: { x: 1, y: 2 } }
```

### _.mergeWith(object, sources, customizer)

> 指定合并规则

```js
function customizer(objValue, srcValue) {
  if (_.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
 
_.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
```

### _.omit(object, [paths])

> 返回object忽略掉paths指定的属性

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omit(object, ['a', 'c']);
// => { 'b': '2' }
```

### _.omitBy(object, predicate)

> 指定忽略函数

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.omitBy(object, _.isNumber);
// => { 'b': '2' }
```

### _.pick(object, [paths])

> 选择object指定paths的属性组成对象返回

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
```

### _.pickBy(object, predicate)

> 指定选择函数

```js
var object = { 'a': 1, 'b': '2', 'c': 3 };
 
_.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
```

### _.result(object, path, [defaultValue])

> 返回指定路径下的属性的值，如果解析的值是一个函数，那么它就会被它的父对象的绑定调用，结果会被返回。

```js
var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
 
_.result(object, 'a[0].b.c1');
// => 3
 
_.result(object, 'a[0].b.c2');
// => 4
 
_.result(object, 'a[0].b.c3', 'default');
// => 'default'
 
_.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'
```

### _.set(object, path, value)

> 设置object指定path的属性的值

### _.setWith(object, path, value, [customizer])

> 指定customizer方式来指定值

```js
var object = {};
 
_.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }
```

### _.toPairs(object)

> 将object的键值对转换为[key, value]为元素的数组

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.toPairs(new Foo);
// => [['a', 1], ['b', 2]]
```

### _.toPairsIn(object)

> 支持原型的toPairs

### _.transform(object, iteratee, [accumulator])

> 与_.reduce相似，它可以使用iteratee函数来迭代object来得到一个最后结果,iteratee中返回false则终止迭代，直接返回结果

```js
_.transform([2, 3, 4], function(result, n) {
  result.push(n *= n);
  return n % 2 == 0;
}, []);
// => [4, 9]
 
_.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
  (result[value] || (result[value] = [])).push(key);
}, {});
// => { '1': ['a', 'c'], '2': ['b'] }
```

### _.unset(object, path)

> 删除object指定path上的属性

### _.update(object, path, updater)

> 更新object指定path上的属性值，通过updater的返回值来更新

### _.updateWith(object, path, updater, [customizer])

```js
var object = {};
 
_.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }
```

### _.values(object)

> 创建一个数组，包含自身属性值

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)
 
_.values('hi');
// => ['h', 'i']
```

### _.valuesIn(object)

> 创建一个数组，包含自身和继承的可枚举的属性值

```js
function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
_.valuesIn(new Foo);
// => [1, 2, 3] 
```