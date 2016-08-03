/* 
To test:

var array = [1,2,3,4,5,6,7,8,9];
console.log(array.shuffle()); // something like this [1, 2, 6, 4, 3, 5, 9, 8, 7]

*/

Array.prototype.shuffle = function() {
  var array = Object(this);
  return array.sort(function() {
    return Math.random() - 0.5;
  });
};
