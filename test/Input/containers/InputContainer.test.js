import React from "react";
import {mount} from "enzyme";
import Input from "../../../src/Input/components/Input";
import InputContainer from "../../../src/Input/containers/InputContainer";
import ConfiguredProvider, {generateStore} from "../../util/fakes/ConfiguredProvider";

const mountComponent = ({name, type, onChange, store} = {}) => {
  const InputContainerComponent = InputContainer(Input);
  return mount(
    <ConfiguredProvider customStore={store}>
      <InputContainerComponent
        name={name || 'test.input'}
        {...(type && {type})}
        {...(onChange && {onChange})}
      />
    </ConfiguredProvider>,
  );
};

describe('InputContainer', () => {
  let store;

  beforeEach(() => store = generateStore());

  it('decorates provided components with an onChange', () => {
    const InputComponent = <Input name='group.field'/>;
    const inputWrapper = mount(InputComponent);

    expect(inputWrapper.find('input').prop('onChange')).toBeUndefined();
    expect(mountComponent().find('input').prop('onChange')).toBeInstanceOf(Function);
  });

  it('dispatches updates when it is changed', () => {
    const input = mountComponent({name: 'test.name', store}).find('input').first();
    input.simulate('change', {target: {name: 'test.name', value: 'test'}});
    expect(store.getState()).toEqual(expect.objectContaining({test: {name: 'test'}}));
  });

  it('returns a boolean when input with type=checkbox is changed', () => {
    const input = mountComponent({name: 'test.checkbox', type: 'checkbox', store}).find('input').first();
    expect(input.prop('checked')).toBeFalsy();

    const mockCheckboxEvent = value =>
      ({target: {name: 'test.checkbox', type: 'checkbox', checked: value}});

    input.simulate('change', mockCheckboxEvent(true));
    expect(store.getState().test.checkbox).toEqual(true);

    input.simulate('change', mockCheckboxEvent(false));
    expect(store.getState().test.checkbox).toEqual(false);
  });

  it('calls custom onChange handlers', () => {
    let onChangeCalled = false;

    function onChange(e) {
      onChangeCalled = true;
      return e;
    }

    const input = mountComponent({name: 'test.name', onChange, store}).find('input').first();
    input.simulate('change', {target: {name: 'test.name', value: 'changed'}});

    expect(onChangeCalled).toBe(true);
    expect(store.getState().test.name).toBe('changed');
  });

  it('decorates provided components with an onChange', () => {
    const radio = mountComponent({name: 'test.radio', type: 'radio', store}).find('input');
    radio.simulate('change', {target: {name: 'test.radio', value: 'changed'}});

    expect(store.getState().test.radio).toBe('changed');
  });
});