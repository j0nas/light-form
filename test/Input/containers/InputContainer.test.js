import React from 'react';
import {mount} from 'enzyme';
import Input from "../../../src/Input/components/Input";
import InputContainer from "../../../src/Input/containers/InputContainer";
import ConfiguredProvider from '../../util/fakes/ConfiguredProvider';

describe('InputContainer', () => {
  it('decorates provided components with an onChange', () => {
    const InputComponent = <Input name='group.field'/>;
    const inputWrapper = mount(InputComponent);

    expect(inputWrapper.find('input').prop('onChange')).toBeUndefined();

    const InputContainerComponent = InputContainer(Input);
    const containerWrapper = mount(
      <ConfiguredProvider>
        <InputContainerComponent name="group.name"/>
      </ConfiguredProvider>
    );

    expect(containerWrapper.find('input').prop('onChange')).not.toBeUndefined();
  });
});

