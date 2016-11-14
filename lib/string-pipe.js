var StringPipe = function(raw) {
  var self = { _value: raw };

  self.inject = function(fn) {
    self._value = fn(self._value);

    return self;
  };

  self.split = function(splitString, pipe) {
    return new pipe(self._value.split(splitString));
  };

  self.optional = function(fallback) {
    if (self._value === '' || self._value === undefined || self._value === null) {
      self._value = fallback || '';
    }

    return self;
  };

  self.truncate = function(maxLength, overflowMark) {
    var overflow = overflowMark || '..';
    if (self._value.length < maxLength) {
      overflow = '';
    }

    self._value = self._value.substring(0, (maxLength - overflow.length)) + overflow;
    return self;
  };

  self.concat = function(string) {
    self._value = self._value.concat(string);

    return self;
  }

  self.surround = function(start, end) {
    self._value = start + self._value + end;

    return self;
  }

  self.format = function(name, value) {
    var regex = new RegExp(name, 'g');
    self._value = self._value.replace(regex, value);

    return self;
  };

  self.value = function() { return self._value; }

  return self;
};

module.exports = StringPipe;
