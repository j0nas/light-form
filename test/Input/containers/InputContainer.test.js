import React from "react";
import {mount} from "enzyme";
import Input from "../../../src/Input/components/Input";
import InputContainer, {validateNameProp} from "../../../src/Input/containers/InputContainer";
import ConfiguredProvider from "../../util/fakes/ConfiguredProvider";

describe('InputContainer', () => {
  it('decorates provided components with an onChange', () => {
    const InputComponent = <Input name='group.field'/>;
    const inputWrapper = mount(InputComponent);

    expect(inputWrapper.find('input').prop('onChange')).toBeUndefined();

    const InputContainerComponent = InputContainer(Input);
    const containerWrapper = mount(
      <ConfiguredProvider>
        <InputContainerComponent name="group.name"/>
      </ConfiguredProvider>,
    );

    expect(containerWrapper.find('input').prop('onChange')).not.toBeUndefined();
  });

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