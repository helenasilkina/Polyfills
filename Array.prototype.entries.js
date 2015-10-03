/*
* Tests with:
* var arr = ['a', 'b', 'c'];
* var eArr = arr.entries();
* 
* console.log(eArr.next().value); // [0, 'a']
* console.log(eArr.next().value); // [1, 'b']
* console.log(eArr.next().value); // [2, 'c']
*/


if (!Array.prototype.entries) {
  Array.prototype.entries = function() {
     var array = Object(this),
        startIndex = 0;
        
    this.next = function() {
		var value = array[startIndex];
      startIndex++;
      return this;
    }
    
    return array;
  }
}
