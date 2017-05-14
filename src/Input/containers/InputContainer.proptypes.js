const errorMessage = (propName, componentName, customMessage) =>
  (`Invalid property '${propName}' supplied to '${componentName}'. ${customMessage}`);

const validateNameProp = (props, propName, componentName) => {
  if (typeof props[propName] !== 'string') {
    return new Error(errorMessage(propName, componentName, 'Value must be a valid string.'));
  }

  if (!/.+\..+/.test(props[propName])) {
    return new Error(errorMessage(
      propName,
      componentName,
      'Value must contain a dot-delimited namespace. (eg. name="customer.firstname")'
    ));
  }
};

const validateOnChangeProp = (props, propName, componentName) => {
  if (typeof props[propName] !== 'function') {
    return new Error(errorMessage(propName, componentName, 'Value must be a function.'));
  }

  // TODO test that onChange return an event
};

export default {
  name: validateNameProp,
  onChange: validateOnChangeProp,
}
