# lodash - Function

### _.after(n, func)

>  返回一个函数，当函数执行n次时执行func

```js
var ret = _.after(2, function() {
    console.log('done');
});

ret();
ret(); // done
```

### _.before(n, func)

>  返回一个函数，当函数执行n次(不包括第n次）之前执行func

```js
var ret = _.before(3, function() {
    console.log('done');
});

ret(); // done
ret(); // done
ret();
```

### _.ary(func, [n=func.length])

> 返回一个函数，只接受n个参数调用func

```js
ret = _.ary(parseInt, 1);
ret = ret("3", 2);
console.log(parseInt('111', 2)); // 7
console.log(ret); // 3
```

### _.bind(func, thisArg, [partials])

> 返回一个绑定的函数，func绑定到thisArg，参数partials

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
 
var object = { 'user': 'fred' };
 
var bound = _.bind(greet, object, 'hi');
ret = bound('!');
console.log(ret); // hi fred!
```

### _.bindKey(object, key, [partials])

> 返回一个函数，object.key为一个方法，传入partials参数，当object.key被修改时，绑定的方法也会做相应变更

### _.curry(func, [arity=func.length])

> 函数柯里化，多个参数可分开传入, 直到传入的参数达到指定数量

```js
function abc(a,b,c) {
    return a + b + c;
}

ret = _.curry(abc, 3);
var result = ret(1)(2)(3);
console.log(result); // 6

result = ret(1,2,3);
console.log(result); // 6

result = ret(1)(2,3);
console.log(result); // 6

result = ret(1)(_,3)(2);
console.log(result); // 6

result = ret(1)(2)(3, 4);
console.log(result); // 6
```

### _.curryRight(func, [arity=func.length])

> 柯里化从右到左

### _.debounce(func, [wait=0], [options={leading, maxWait, trailing}])

> 等待wait时间为止未在调用则执行func，options中可以设置最大等待时间-不管你不是还在调用都执行一次func，用在频繁触发事件时使用，如果change，resize

```js
jQuery(element).on('click', _.debounce(sendMail, 300, {
    'leading': true,
    'trailing': false
}));
```

### _.defer(func, [args])

> func延时到当前调用栈末尾调用

```js
(function() {
    _.defer(console.log, 'over');
    console.log('before');
}());
// before
// over
```

### _.delay(func, wait, [args])

> 在延时wait之后调用func

```js
_.delay(console.log, 1000, 'end');
// 1000ms 之后输出 end
```

### _.flip(func)

> 创建一个参数颠倒的函数

### _.memoize(func, [resolver])

 > 创建一个带记忆功能的函数

```js
var object = { 'a': 1, 'b': 2 };
var other = { 'c': 3, 'd': 4 };

var values = _.memoize(_.values);
values(object);
// => [1, 2]
    
values(other);
// => [3, 4]

object.a = 2;
values(object);
// => [1, 2]
    
// Modify the result cache.
values.cache.set(object, ['a', 'b']);
values(object);
// => ['a', 'b']

// Replace `_.memoize.Cache`.
_.memoize.Cache = WeakMap;
```

### _.negate(predicate)

> 创建predicate函数的对立面函数

### _.once(func)

> 创建一个函数，只能调用一次func，以后每次调用都返回第一次的值

```js
var initialize = _.once(function(n) {return n;});
console.log(initialize(1)); // 1
console.log(initialize(3)); // 1
```

### _.overArgs(func, [transforms])

> 使用transforms对参数进行转换在调用func

```js
function doubled(n) {
  return n * 2;
}
 
function square(n) {
  return n * n;
}
 
var func = _.overArgs(function(x, y) {
  return [x, y];
}, [square, doubled]);
 
func(9, 3);
// => [81, 6]
 
func(10, 5);
// => [100, 10]
```

### _.partial(func, [partials])

> 相当于柯里化函数

```js
function greet(greeting, name) {
  return greeting + ' ' + name;
}
 
var sayHelloTo = _.partial(greet, 'hello');
sayHelloTo('fred');
// => 'hello fred'
 
// Partially applied with placeholders.
var greetFred = _.partial(greet, _, 'fred');
greetFred('hi');
// => 'hi fred'
```

### _.partialRight(func, [partials])

> 倒序 partial

### _.rearg(func, indexes)

> 指定func的方法传入进去的参数根据 indexs 指定的顺序传入

```js
var rearged = _.rearg(function(a, b, c) {
  return [a, b, c];
}, [2, 0, 1]);
 
rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
```

### _.rest(func, [start=func.length-1])

> 返回一个函数，将传入这个函数的不定参数当作一个参数传入func的最后一个参数

```js
var say = _.rest(function(what, names) {
  return what + ' ' + _.initial(names).join(', ') +
    (_.size(names) > 1 ? ', & ' : '') + _.last(names);
});
 
say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
```

### _.spread(func, [start=0])

> 返回一个函数，将func的参数列表转为为一个参数数组模式进行调用

```js
var say = _.spread(function(who, what) {
  return who + ' says ' + what;
});
 
say(['fred', 'hello']);
// => 'fred says hello'
 
var numbers = Promise.all([
  Promise.resolve(40),
  Promise.resolve(36)
]);
 
numbers.then(_.spread(function(x, y) {
  return x + y;
}));
// => a Promise of 76
```

### _.throttle(func, [wait=0], [options={}])

> 返回一个节流函数，只在wait时间段内只执行一次

### _.unary(func)

> 返回一个函数只接受一个参数，忽略其他参数

### _.wrap(value, [wrapper=identity])

> 包装器

```js
var p = _.wrap(_.escape, function(func, text) {
  return '<p>' + func(text) + '</p>';
});
 
p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
```