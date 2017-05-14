import propTypes from "../../../src/Input/containers/InputContainer.proptypes";

describe('InputContainer propTypes', () => {
  it('accepts valid props', () => {
    const validNameProp = propTypes.name({name: 'validGroup.validName'}, 'name', 'dummyComponent');
    expect(validNameProp).toBeUndefined();

    const validOnChangeProp = propTypes.onChange({onChange: e => e}, 'onChange', 'dummyComponent');
    expect(validOnChangeProp).toBeUndefined();
  });

  it('returns expected error on missing name property', () => {
    const invalidProps = propTypes.name({}, 'name', 'dummyComponent');
    expect(invalidProps).toBeInstanceOf(Error);
    expect(invalidProps.message).toContain('Value must be a valid string.');
  });

  it('returns expected error on invalid name property', () => {
    const invalidProps = propTypes.name({name: 'thisIsNotADotDelimitedString'}, 'name', 'dummyComponent');
    expect(invalidProps).toBeInstanceOf(Error);
    expect(invalidProps.message).toContain('Value must contain a dot-delimited namespace.');
  });

  it('returns expected error on invalid onChange property if present', () => {
    const invalidProps = propTypes.onChange({onCHange: 'thisIsNotAFunction'}, 'onChange', 'dummyComponent');
    expect(invalidProps).toBeInstanceOf(Error);
    expect(invalidProps.message).toContain('Value must be a function.');
  });
});
