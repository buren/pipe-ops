# pipe-ops

Pipe like transformations in JavaScript.

## Pipes

* __must__ implement: `value`, `inject` and `optional` functions.

## Examples

String transformation:

```js
new StringPipe('Hi %name%! Asdf %other_name% and this is').
  optional().
  format('%name%', 'Jacob').
  format('%other_name%', 'Buren').
  truncate(26).
  concat('Read more..').
  surround('<h1>', '</h1>').
  inject(function(value) { return '(:) ' + value }).
  surround('<header>', '</header>').
  value()
// "<header>(:) <h1>Hi Jacob! Asdf Buren and..Read more..</h1></header>"
```

You can also move between different types:

```js
var echo = function(data) { return data + '... ' + data; };

new StringPipe('Jacob,Buren').
  split(',', ArrayPipe).map(function(el) { return '# ' + el + ' ';  }).
  join('', StringPipe).
  inject(echo).
  value()
// "# Jacob # Buren ... # Jacob # Buren"
```
