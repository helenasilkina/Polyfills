if (!Array.prototype.map) {
  Array.prototype.map = function(callback) {

    var thisArguments;
    var index = 0;
    var array = Object(this);
    var length = O.length >>> 0;
    var mappedArray = new Array(length);
    var thisArguments = arguments[1];

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
