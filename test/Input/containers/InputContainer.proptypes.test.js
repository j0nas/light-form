import {validateNameProp} from "../../../src/Input/containers/InputContainer";

describe('InputContainer propTypes', () => {
  it('accepts valid props', () => {
    const validProps = validateNameProp({name: 'validGroup.validName'}, 'name', 'dummyComponent');
    expect(validProps).toBeUndefined();
  });

  it('returns expected error on missing name property', () => {
    const invalidProps = validateNameProp({}, 'name', 'dummyComponent');
    expect(invalidProps).toBeInstanceOf(Error);
    expect(invalidProps.message).toContain('Value must be a valid string.');
  });

  it('returns expected error on invalid name property', () => {
    const invalidProps = validateNameProp({name: 'thisIsNotADotDelimitedString'}, 'name', 'dummyComponent');
    expect(invalidProps).toBeInstanceOf(Error);
    expect(invalidProps.message).toContain('Value must contain a dot-delimited namespace.');
  });
});
