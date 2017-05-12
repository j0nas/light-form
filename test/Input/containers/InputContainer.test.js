import React from 'react';
import {shallow, mount} from 'enzyme';
import InputContainer from "../../../src/Input/containers/InputContainer";
import Input from "../../../src/Input/components/Input";


// TODO verify this:
// TODO container passes onChange
// TODO container correctly validates props

describe('InputContainer', () => {
  it('decorates provided components with an onChange', () => {
    const inputComponent = <input type="text" />;
    const container = mount(inputComponent);

    expect(container.prop('type')).toBe('text');
    expect(container.prop('onChange')).toBeUndefined();

    const containerContainer = InputContainer(<Input name="lol.kek"/>);
    const contain = mount(<containerContainer id="wrapperwrapper" />);
    const ctr = contain.find("#wrapperwrapper");
    const data = ctr;


    expect(data.prop('type')).toBe('text');
    //expect(container.prop('onChange')).toBeUndefined();


    //const shallowContainer = shallow());
    //const inputContainer = <InputContainer/>;
    //expect(containerContainer.prop('type')).toBe('text');
    //expect(shallowContainer.prop('onChange')).toBeUndefined();
  });
});

