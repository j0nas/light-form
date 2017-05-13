import React from "react";
import {mount} from "enzyme";
import {Input as ExportedInput} from "../../../src";
import Input from "../../../src/Input/components/Input";
import InputContainer from "../../../src/Input/containers/InputContainer";
import ConfiguredProvider, {store} from "../../util/fakes/ConfiguredProvider";

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

  it('dispatches updates when it is changed', () => {
    const wrapper = mount(
      <ConfiguredProvider customStore={store}>
        <ExportedInput name="test.name"/>
      </ConfiguredProvider>,
    );

    const input = wrapper.find('input').first();
    input.simulate('change', {target: {name: 'test.name', value: 'test'}});
    expect(store.getState()).toEqual(expect.objectContaining({test: {name: 'test'}}));
  });

  it('returns a boolean when input with type=checkbox is changed', () => {
    const wrapper = mount(
      <ConfiguredProvider customStore={store}>
        <ExportedInput name="test.checkbox" type="checkbox"/>
      </ConfiguredProvider>,
    );

    const input = wrapper.find('input').first();
    expect(input.prop('checked')).toBeFalsy();

    const mockCheckboxEvent = value =>
      ({target: {name: 'test.checkbox', type:'checkbox', checked: value}});

    input.simulate('change', mockCheckboxEvent(true));
    expect(store.getState().test.checkbox).toEqual(true);

    input.simulate('change', mockCheckboxEvent(false));
    expect(store.getState().test.checkbox).toEqual(false);
  });
});