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
    expect(mount(<Input name='group.field'/>).find('input').prop('onChange')).toBeUndefined();
    expect(mountComponent().find('input').prop('onChange')).toBeInstanceOf(Function);
  });

  it('dispatches updates when it is changed', () => {
    const input = mountComponent({store}).find('input').first();
    input.simulate('change', {target: {name: 'test.input', value: 'test'}});
    expect(store.getState()).toEqual(expect.objectContaining({test: {input: 'test'}}));
  });

  it('returns a boolean when input with type=checkbox is changed', () => {
    const input = mountComponent({type: 'checkbox', store}).find('input');
    expect(input.prop('checked')).toBeFalsy();

    const mockCheckboxEvent = value =>
      ({target: {name: 'test.input', type: 'checkbox', checked: value}});

    input.simulate('change', mockCheckboxEvent(true));
    expect(store.getState().test.input).toEqual(true);

    input.simulate('change', mockCheckboxEvent(false));
    expect(store.getState().test.input).toEqual(false);
  });

  it('calls custom onChange handlers', () => {
    let onChangeCalled = false;

    function onChange(e) {
      onChangeCalled = true;
      return e;
    }

    const input = mountComponent({onChange, store}).find('input').first();
    input.simulate('change', {target: {name: 'test.input', value: 'changed'}});

    expect(onChangeCalled).toBe(true);
    expect(store.getState().test.input).toBe('changed');
  });

  it('decorates provided components with an onChange', () => {
    const radio = mountComponent({type: 'radio', store}).find('input');
    radio.simulate('change', {target: {name: 'test.input', value: 'changed'}});

    expect(store.getState().test.input).toBe('changed');
  });
});