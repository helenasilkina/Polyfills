/*
To test:

var array1 = [1,2,3];
var array2 = [4,5,6];
var array3 = [7,8,9];
console.log(array1.multipleConcat(array1, array2, array3)); // [1, 2, 3, 4, 5, 6, 7, 8, 9];
*/

Array.prototype.multipleConcat = function() {
    var initialArray = arguments[0];
    if (arguments.length > 0) {
      for (var i = 1, arrayCount = arguments.length; i < arrayCount; i++ ) {
        initialArray.push.apply(initialArray, arguments[i]);
      }
      return initialArray;
    }
};
