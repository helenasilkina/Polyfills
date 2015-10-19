if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement) {
    'use strict';
    var array = Object(this);
    var length = array.length >>> 0;
    var currentElement;
    
    if (length === 0) {
      return false;
    }
    var fromIndex = parseInt(arguments[1]) || 0;
    var index = (fromIndex >= 0) ? fromIndex : (length + fromIndex) > 0 ? (length + fromIndex) : 0;

    while (index < length) {
      currentElement = array[index];
      if (searchElement === currentElement) {
        return true;
      }
      index++;
    }
    
    return false;
  };
}
