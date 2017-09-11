var moment = require('./moment');

function l(...rest) {
    console.log.apply(null, rest);
}

// 获得当前时间的moment对象
var ret = moment();
l(ret);

ret = moment('2017-08-12');
l(ret);

ret = moment('2017-08-12', 'YYYY-MM-DD');
l(ret);





