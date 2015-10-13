if (!Array.from) {
  Array.from = (function () {
    return function from(arrayLike) {
      var C = this;
      var items = Object(arrayLike);
      var len = items.length >>> 0;
      var A = (typeof C === 'function') ? Object(new C(len)) : new Array(len);
      var k = 0;
      var kValue;
      
      while (k < len) {
        kValue = items[k];
        if (arguments[1]) {
          A[k] = typeof arguments[2] === 'undefined' ? mapFn(kValue, k) : arguments[1].call(arguments[2], kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      
      A.length = len;
      return A;
    };
  }());
}
