var _ = require('../lodash')

//-----------------------------------------------------------------------------
var ret = _.after(2, function() {
    console.log('done');
});

ret();
ret();
//-----------------------------------------------------------------------------
ret = _.ary(parseInt, 1);
ret = ret("3", 2);
console.log(parseInt('111', 2));
console.log(ret);
//-----------------------------------------------------------------------------
ret = _.before(3, function() {
    console.log('done');
});

ret();
ret();
ret();
//-----------------------------------------------------------------------------
function abc(a,b,c) {
    return a + b + c;
}

ret = _.curry(abc, 3);
var result = ret(1)(2)(3);
console.log(result);

result = ret(1,2,3);
console.log(result);

result = ret(1)(2,3);
console.log(result);

result = ret(1)(_,3)(2);
console.log(result);

result = ret(1)(2)(3, 4);
console.log(result);
//-----------------------------------------------------------------------------
(function() {
    _.defer(console.log, 'over');
    console.log('before');
}());
//-----------------------------------------------------------------------------
var initialize = _.once(function(n) {return n;});
console.log(initialize(1));
console.log(initialize(3));
//-----------------------------------------------------------------------------