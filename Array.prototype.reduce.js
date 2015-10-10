if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback) {
    'use strict';
    
    var array = Object(this);
    var length = array.length >>> 0;
    var index = 0;
    var value;
    var thisArguments = arguments[1];
        
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
