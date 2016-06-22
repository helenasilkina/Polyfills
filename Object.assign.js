if (!Object.assign) {
  Object.assign = function(target) {
    'use strict';
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var sourceObject = arguments[index];
      if (sourceObject != null) {
        for (var key in sourceObject) {
          if (Object.prototype.hasOwnProperty.call(sourceObject, key)) {
            target[key] = sourceObject[key];
          }
        }
      }
    }
    return target;
  };
}
