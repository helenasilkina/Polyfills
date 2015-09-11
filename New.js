function New (Function, arguments) {
  var object = {'__proto__' : F.prototype};
  Function.apply(object, arguments);
  return object;
}
