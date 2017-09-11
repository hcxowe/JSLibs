# Moment

一个日期处理类库

### 创建moment对象

```js
moment();

moment('2017-08-12');

moment('2017-08-12', 'YYYY-MM-DD');

moment(['2017', '10', '23']);

// 更多
```

### 获取momemt对象的单独值

```js
var moment = moment();

moment.day(); // 周几
moment.date(); // 几号
moment.month(); // 多少月 - 1
moment.year(); // 年
moment.quarter(); // 第几季度
moment.week();
moment.hour();
moment.minute();
moment.second();
moment.millisecond();
```

### 操作moment

```js
moment.set('year', 2010)
moment.set('second', 10)

moment.add(1, 'months');
moment.subtract(1, 'days')
```

### 展示moment

```js
moment.format('YYYY-MM-DD HH:mm:ss');
moment.format('X'); // 时间戳字符串
``` 
