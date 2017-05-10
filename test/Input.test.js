import React from 'react';
import {mount} from 'enzyme';
import {Input} from '../src';

test('basic test', () => {
  expect(1 === 1).toBe(true);
});

describe('Input component', function () {
  it('renders an Input with no type specified as a text input', () => {
    const wrapper = mount(<Input name="test.input" id="myInput" />);
    const input = wrapper.find('#myInput');
    expect(input.type()).toBe('text');
  });
});
