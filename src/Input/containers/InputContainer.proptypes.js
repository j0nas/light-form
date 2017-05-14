const validateNameProp = (props, propName, componentName) => {
  const error = "Invalid property 'name' supplied to '" + componentName + "'. ";
  if (typeof props[propName] !== 'string') {
    return new Error(error + "Value must be a valid string.");
  }

  if (!/.+\..+/.test(props[propName])) {
    return new Error(error + "Value must contain a dot-delimited namespace. (eg. name=\"customer.firstname\")");
  }
};

export default {
  name: validateNameProp,
}
