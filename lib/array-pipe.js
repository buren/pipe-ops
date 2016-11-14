var ArrayPipe = function(raw) {
  var self = { _value: raw };

  self.optional = function(fallback) {
    if (self._value === [] || self._value === undefined || self._value === null) {
      self._value = fallback || [];
    }

    return self;
  };

  self.inject = function(fn) {
    self._value = fn(self._value);

    return self;
  };

  self.join = function(joinString, pipe) {
    return new pipe(self._value.join(joinString));
  }

  self.map = function(transformerFn) {
    self._value = self._value.map(transformerFn);

    return self;
  }

  self.value = function() { return self._value; }

  return self;
};

module.exports = ArrayPipe;
