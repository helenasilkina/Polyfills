if (!Array.prototype.map) {
  Array.prototype.map = function(callback, callbackArguments) {

    var thisArguments;
    var index = 0;
    var array = Object(this);
    var length = O.length >>> 0;
    var mappedArray = new Array(length);

    if (arguments.length > 1) {
      thisArguments = callbackArguments;
    }

    while (index < length) {
      var value, 
          mappedValue;
      if (index in array) {
        value = array[index];
        mappedValue = callback.call(thisArguments, value, index, array);
        mappedArray[index] = mappedValue;
      }
      index++;
    }

    return mappedArray;
  };
}
