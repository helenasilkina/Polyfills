if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (function) {
        var array = Object(this);
        var length = array.length >>> 0;
        var thisArguments = arguments[1];
        
        for (var i = 0; i < length; i ++) {
            if (array.hasOwnProperty(i)) {
                function.call(thisArguments, array[i], i, array);
            }
        }
        return undefined;
    };
}
