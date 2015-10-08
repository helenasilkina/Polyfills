if (!Array.prototype.some) {
  Array.prototype.some = function(callback) {
    'use strict';
    var array = Object(this);
    var length = t.length >>> 0;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    
    for (var i = 0; i < length; i++) {
      if (i in array && callback.call(thisArg, array[i], i, array)) {
        return true;
      }
    }
    
    return false;
  };
}
