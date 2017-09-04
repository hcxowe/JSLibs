var _ = require('../lodash')

// -----------------------------------------------------------------------------
var ret = _.countBy([2.3, 2.1, 3.4, 4.3], Math.floor);
console.log(ret);
// -----------------------------------------------------------------------------
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
ret = _.every(cols);
console.log(ret);
ret = _.every(cols, function(item) {return item.age > 27;});
console.log(ret);
ret = _.every(cols, { name: 'hcx', active: true });
console.log(ret);
ret = _.every(cols, ['active', false]);
console.log(ret);
ret = _.every(cols, 'active');
console.log(ret);
// -----------------------------------------------------------------------------
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
console.log(ret);
// -----------------------------------------------------------------------------
ret = _.flatMap([1, 2], function(item) { return [item + 1, item + 5]});
console.log(ret);
// -----------------------------------------------------------------------------
ret = _.groupBy([2.1, 2.2, 3.1,3.2], Math.floor);
console.log(ret);
// -----------------------------------------------------------------------------
cols = [[5, 1, 7], [3, 2, 1]];
ret = _.invokeMap(cols, 'sort');
console.log(ret); 
ret.push([1]);
console.log(cols); 
// -----------------------------------------------------------------------------
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
console.log(ret); 
// -----------------------------------------------------------------------------
function square(n) {
    return n * n;
}
   
ret = _.map([4, 8], square);
console.log(ret);
   
ret = _.map({ 'a': 4, 'b': 8 }, square);
console.log(ret);
   
var users = [
    { 'user': 'barney' },
    { 'user': 'fred' }
];
   
ret = _.map(users, 'user');
console.log(ret);
// -----------------------------------------------------------------------------
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 34 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 36 }
];
   

ret = _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
console.log(ret);
// -----------------------------------------------------------------------------
var users = [
    { 'user': 'barney',  'age': 36, 'active': false },
    { 'user': 'fred',    'age': 40, 'active': true },
    { 'user': 'pebbles', 'age': 1,  'active': false }
  ];
   
ret = _.partition(users, function(o) { return o.active; });
console.log(ret);
  
_.partition(users, { 'age': 1, 'active': false });
console.log(ret);

_.partition(users, ['active', false]);
console.log(ret);

_.partition(users, 'active');
console.log(ret);
// -----------------------------------------------------------------------------
ret = _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
    (result[value] || (result[value] = [])).push(key);
    return result;
}, {});
console.log(ret);
// -----------------------------------------------------------------------------
var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
  ];
   
ret = _.sortBy(users, [function(o) { return o.user; }]);
console.log(ret);

ret = _.sortBy(users, ['user', 'age']);
console.log(ret);
// -----------------------------------------------------------------------------