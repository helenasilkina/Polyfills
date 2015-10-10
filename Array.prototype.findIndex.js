if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(callback) {

    var array = Object(this);
    var length = array.length >>> 0;
    var thisArguments = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = array[i];
      if (callback.call(thisArguments, value, i, array)) {
        return i;
      }
    }
    
    return -1;
  };
}
