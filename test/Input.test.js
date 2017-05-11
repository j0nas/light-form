import React from 'react';
import Input from '../src/Input/components/Input';
import {shallow} from 'enzyme'

describe('Input component', () => {
  it('renders with type=text as default when no type is specified', () => {
    const input = shallow(<Input name="test.input" id="myInput" />);
    expect(input.props().type).toBe('text');
  });
});

