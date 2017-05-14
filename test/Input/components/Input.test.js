import React from 'react';
import Input from '../../../src/Input/components/Input';
import {shallow, mount} from 'enzyme';

describe('Input component', () => {
  it('renders with type=text as default when no type is specified', () => {
    const input = shallow(<Input name="test.input" id="myInput" />);

    expect(input.props().type).toBe('text');
  });

  it('can be found through class and id selector when mounted', () => {
    const input = mount(<Input name="test.input" id="myInput" className="inputField"/>);
    const mountedComponents = [input.find('.inputField'), input.find('#myInput')];

    expect(mountedComponents.length).toBe(2);
  });

  it('has the passed props as attributes', () => {
    const container = mount(<Input name="test.input" id="myInput" alt="this is my input" disabled />);
    const input = container.find('#myInput');

    expect(input.prop('disabled')).toEqual(true);
    expect(input.prop('alt')).toEqual('this is my input');
    expect(input.prop('thisdoesnotexist')).toBeUndefined();
  });
});

