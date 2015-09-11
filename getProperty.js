function getProperty(object, property) {
  if (object.hasOwnProperty(property)) {
    return object[property];
  } else if (object.__proto__ !== null) {
    return getProperty(object.__proto__, property);
  }
  return undefined;
}
