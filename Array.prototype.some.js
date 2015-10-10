if (!Array.prototype.some) {
  Array.prototype.some = function(callback, callbackArguments) {
    'use strict';
    var array = Object(this);
    var length = t.length >>> 0;
    var thisArguments = arguments[1];
    
    for (var i = 0; i < length; i++) {
      if (i in array && callback.call(thisArguments, array[i], i, array)) {
        return true;
      }
    }
    
    return false;
  };
}
