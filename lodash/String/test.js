var _ = require('../lodash')

function l(...rest) {
    console.log.apply(null, rest);
}
//------------------------------------------------------------------------
l(_.camelCase('Foo Bar'));
//------------------------------------------------------------------------
_.endsWith('abc', 'c');
// => true
 
_.endsWith('abc', 'b');
// => false
 
l(_.endsWith('abc', 'b', 2));
//------------------------------------------------------------------------
l(_.truncate('hi-diddly-ho there, neighborino'));
l(_.truncate('hi-diddly-ho there, neighborino', {
    'length': 24,
    'separator': ' '
  }));

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
//------------------------------------------------------------------------