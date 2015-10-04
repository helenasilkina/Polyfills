if (!Array.prototype.every) {
  Array.prototype.every = function(callbackFunction, callbackArguments) {
    
    var index = 0;
    var array = Object(this);
    var length = array.length >>> 0;

    if (arguments.length > 1) {
      var thisArguments = callbackArguments;
    }

    while (index < length) {
      var value;
      if (index in array) {
        value = array[index];
        var testResult = callbackFunction.call(thisArguments, value, index, array);
        if (!testResult) {
          return false;
        }
      }
      index++;
    }
    return true;
  };
}
