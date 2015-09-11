HTMLElement.prototype.hasClass = function(class) {
  return new RegExp("(^|\\s)" + class + "(\\s|$)").test(this.className);
};
