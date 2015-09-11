if (document.documentElement.firstElementChild === undefined) { 

  Object.defineProperty(Element.prototype, 'firstElementChild', {
    get: function() {
      var el = this.firstChild;
      do {
        if (el.nodeType === 1) {
          return el;
        }
        el = el.nextSibling;
      } while (el);

      return null;
    }
  });
}
