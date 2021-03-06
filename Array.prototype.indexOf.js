if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {
    var index;
    var array = Object(this);
    var length = array.length >>> 0;
    var index = +fromIndex || 0;

    if (length === 0 || index >= length) {
      return -1;
    }

    k = Math.max((index >= 0 ? index : length - Math.abs(index)), 0);

    while (index < length) {
      if (index in array && array[index] === searchElement) {
        return index;
      }
      index++;
    }
    return -1;
  };
}
