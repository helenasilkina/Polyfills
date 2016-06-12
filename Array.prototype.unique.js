 Array.prototype.unique = function() {
	var uniqueElementsArray = []; 
	for (var i = 0, arrayLength = this.length; i < arrayLength; i++) {
		if (uniqueElementsArray.indexOf(this[i]) === -1) {
		  uniqueElementsArray.push(this[i]);
		}
	}
	return uniqueElementsArray;
}
