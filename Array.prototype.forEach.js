if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (function) {
        var array = Object(this),
            length = array.length >>> 0;
            
        if (typeof function !== 'function') {
            throw new TypeError();
        }
        
        for (var i = 0; i < length; i ++) {
            if (array.hasOwnProperty(i)) {
                function.call(arguments[1], array[i], i, array);
            }
        }
        return undefined;
    };
}
