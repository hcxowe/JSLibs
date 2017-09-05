# lodash - Lang

### _.castArray(*)

> 如果传入的不是数组，则转换为数组

### _.clone(value)

> 拷贝value，浅拷贝

### _.cloneDeep(value)

> 深拷贝value

### _.cloneDeepWith(value, customizer)

> 同.cloneDeep, 使用customizer定义拷贝方法

### _.cloneWith(value, customizer)

> 同.clone, 使用customizer定义拷贝方法

### _.conformsTo(object, source)

> 检查object是否满足source定义的 属性 满足的条件

```js
var object = { 'a': 1, 'b': 2 };
 
_.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
_.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```

### _.eq(value, other)

> 比较 相等

### _.gt(value, other)

> value 是否大于 other

### _.gte(value, other)

> value 大于等于 other

### _.isArguments(value)

> 检查 value 是否是一个参数对象

### _.isArray(value)

### _.isArrayBuffer(value)

### _.isArrayLike(value)

### _.isArrayLikeObject(value)

> value是对象 && value是类数组

### _.isBoolean(value)

### _.isBuffer(value)

### _.isDate(value)

### _.isElement(value)

### _.isEmpty(value)

### _.isEqual(value, other)

> 深度对比两个参数是否相同

### _.isEqualWith(value, other, [customizer])

### _.isError(value)

### _.isFinite(value)

### _.isFunction(value)

### _.isInteger(value)

### _.isLength(value)

### _.isMap(value)

### _.isMatch(object, source)

> object 是否满足 source 指定的条件

```js
var object = { 'a': 1, 'b': 2 };
 
_.isMatch(object, { 'b': 2 });
// => true
 
_.isMatch(object, { 'b': 1 });
// => false
```

### _.isMatchWith(object, source, [customizer])

### _.isNaN(value)

### _.isNative(value)

### _.isNil(value)

> 是否为null或者未定义

### _.isNull(value)

> 是否为null

### _.isNumber(value)

### _.isObject(value)

### _.isPlainObject(value)

> 是否是一个简单对象

### _.isRegExp(value)

### _.isSafeInteger(value)

### _.isSet(value)

### _.isString(value)

### _.isSymbol(value)

### _.isTypedArray(value)

### _.isUndefined(value)

### _.isWeakMap(value)

### _.isWeakSet(value)

### _.lt(value, other)

### _.lte(value, other)

### _.toArray(value)

### _.toFinite(value)

### _.toInteger(value)

### _.toLength(value)

### _.toNumber(value)

### _.toPlainObject(value)

### _.toSafeInteger(value)

### _.toString(value)

