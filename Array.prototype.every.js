if (!Array.prototype.every) {
  Array.prototype.every = function(callbackFunction) {
    
    var index = 0;
    var array = Object(this);
    var length = array.length >>> 0;
    var thisArguments = arguments[1];

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
