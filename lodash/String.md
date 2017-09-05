# lodash - String

### _.camelCase([string=''])

> 转驼峰命令

```js
l(_.camelCase('Foo Bar')); // fooBar
```

### _.capitalize([string=''])

> 将字符串第一个字母大小，其他小写

### _.deburr([string=''])

> 通过将拉丁字母的补充和拉丁扩展的字母转换为基本的拉丁字母，并将两种符号结合起来。

### _.endsWith([string=''], [target], [position=string.length])

> 检查string是否以target字符串结尾，position指定搜索的位置

```js
_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
_.endsWith('abc', 'b', 2);
// => true
```

### _.escape([string=''])

> 将字符串中的字符“&”、“小于”、“、”、“和”转换为相应的HTML实体

```js
_.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
```

### _.escapeRegExp([string=''])

> 转义RegExp特殊字符“”、“$”、“”。”、“*”、“+”、“?”、“(”、“)“，”，“，”，“，”，“字符串”。

```js
_.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
```

### _.kebabCase([string=''])

> 将字符串转换为 kebab case模式

```js
_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'
```

### _.lowerCase([string=''])

> 将字符串转为以空格分割的的小写字母

```js
_.lowerCase('--Foo-Bar--');
// => 'foo bar'
 
_.lowerCase('fooBar');
// => 'foo bar'
 
_.lowerCase('__FOO_BAR__');
// => 'foo bar'
```

### _.lowerFirst([string=''])

> 将字符串第一个字母转小写字母

### _.pad([string=''], [length=0], [chars=' '])

> 如果string的长度小于length，则string两边填充指定charts平均填充

```js
_.pad('abc', 8);
// => '  abc   '
 
_.pad('abc', 8, '_-');
// => '_-abc_-_'
 
_.pad('abc', 3);
// => 'abc'
```

### _.padEnd([string=''], [length=0], [chars=' '])

> 填充在右边

### _.padEnd([string=''], [length=0], [chars=' '])

> 填充在左边

### _.parseInt(string, [radix=10])

> 同 ES5的parseInt

### _.repeat([string=''], [n=1])

> 重复string n遍

```js
_.repeat('*', 3);
// => '***'
 
_.repeat('abc', 2);
// => 'abcabc'
 
_.repeat('abc', 0);
// => ''
```

### _.replace([string=''], pattern, replacement)

> 同 ES5的String.prototype.replace

### _.snakeCase([string=''])

> 转为snake case 模式

```js
_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
_.snakeCase('--FOO-BAR--');
// => 'foo_bar'
```

### _.split([string=''], separator, [limit])

> 分割字符串， 同 ES5的 split

### _.startCase([string=''])

> 转为start case 模式

```js
_.startCase('--foo-bar--');
// => 'Foo Bar'
 
_.startCase('fooBar');
// => 'Foo Bar'
 
_.startCase('__FOO_BAR__');
// => 'FOO BAR'
```

### _.startsWith([string=''], [target], [position=0])

> 字符串是否已target开头

### _.template([string=''], [options={}])

> 模版

### _.toLower([string=''])

> 小写

### _.toUpper([string=''])

> 大写

### _.trim([string=''], [chars=whitespace])

> 去掉首尾指定的chars

### _.trimEnd([string=''], [chars=whitespace])

> 去掉尾部

### _.trimStart([string=''], [chars=whitespace])

> 去掉首部

### _.truncate([string=''], [options={}])

> 截取过长的字符为省略符

```js
l(_.truncate('hi-diddly-ho there, neighborino')); // hi-diddly-ho there, neighbo...

_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': ' '
});
// => 'hi-diddly-ho there,...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'length': 24,
  'separator': /,? +/
});
// => 'hi-diddly-ho there...'
 
_.truncate('hi-diddly-ho there, neighborino', {
  'omission': ' [...]'
});
// => 'hi-diddly-ho there, neig [...]'
```

### _.unescape([string=''])

> html实体解码为对应的字符

### _.upperCase([string=''])

> 转为大写

```js
_.upperCase('--foo-bar');
// => 'FOO BAR'
 
_.upperCase('fooBar');
// => 'FOO BAR'
 
_.upperCase('__foo_bar__');
// => 'FOO BAR'
```

### _.upperFirst([string=''])

> 将字符串第一个字符转为大写

### _.words([string=''], [pattern])

> 将字符串转为单词的数组

```js
_.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']
 
_.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
```