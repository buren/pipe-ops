var Pipes = require('./lib/pipe-ops.js');
var ArrayPipe = Pipes.ArrayPipe;
var StringPipe = Pipes.StringPipe;

// String transformation
var output1 = new StringPipe('Hi %name%! Mesa %other_name% and this is').
  optional().
  format('%name%', 'Jacob').
  format('%other_name%', 'Buren').
  truncate(26).
  concat('Read more..').
  surround('<h1>', '</h1>').
  transform(function(value) { return '(: ' + value + ' :)' }).
  surround('<header>', '</header>').
  value()

console.log(output1);

var echo = function(data) { return data + '... ' + data; };

// Move between types
var output2 = new StringPipe('Jacob,Buren').
  split(',', ArrayPipe).map(function(el) { return '# ' + el + ' ';  }).
  join('', StringPipe).
  inject(echo).
  value()

console.log(output2);
