if (!Array.prototype.entries) {
  Array.prototype.entries = function() {
  
    var array = Object(this);
    
    this.startIndex = 0;
        
    this.next = function() {
      	this.value = new Array(this.startIndex, array[this.startIndex]);
	this.startIndex++;
	return this;
    }
    
    return array;
  }
}
