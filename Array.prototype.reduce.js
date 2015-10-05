if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback) {
    'use strict';
    
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    
    var array = Object(this), 
        length = array.length >>> 0, 
        index = 0, 
        value;
        
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (index < length && !(index in array)) {
        index++; 
      }
      if (index >= length) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = array[index++];
    }
    
    for (; index < length; index++) {
      if (index in array) {
        value = callback(value, array[index], index, array);
      }
    }
    
    return value;
  };
}
