//  Some ways to dublicate object in javascript

/*
1) var duplicateObject = JSON.parse(JSON.stringify(sourceObject));
2) var duplicateObject = Object.create(Object.getPrototypeOf(sourceObject));
*/

// in ECMAScript 2015 
/*
3) const duplicateObject = {...sourceObject};
4) var sourceObject = { a: 1 };
   var duplicateObject =  Object.assign( {}, sourceObject);

*/

Object.prototype.dublicate = function() {
  var sourceObject = this;

  if (!Object.prototype.assign) {
    return JSON.parse(JSON.stringify(sourceObject))
  } else {
    return Object.assign( {}, sourceObject);
  }
}
