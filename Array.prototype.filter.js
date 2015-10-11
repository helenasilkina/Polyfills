if (!Array.prototype.filter) {
  Array.prototype.filter = function(callback) {
    'use strict';

    var array = Object(this);
    var length = array.length >>> 0;
    var filteredArray = [];
    var thisArgument = arguments[1];
    
    for (var i = 0; i < length; i++) {
      if (i in array) {
        var value = t[i];
        if (callback.call(thisArgument, value, i, array)) {
          filteredArray.push(val);
        }
      }
    }

    return filteredArray;
  };
}
