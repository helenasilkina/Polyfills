if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this !== null && typeof predicate === 'function') {
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;
  
      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
    }
    return undefined;
  };
}
