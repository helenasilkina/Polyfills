if (!document.documentElement.children) {
  Element.prototype.__defineGetter__('children', function() {
    var children = [];
    for (var i = this.firstChild; i != null; i = i.nextSibling) {
      if (i.nodeType === 1) {
        children.push(i);
      }
    }
    return children;
  });
}
