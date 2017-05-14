import React from 'react';
import Select from '../../../src/Input/components/Select';
import {shallow, mount} from 'enzyme';

describe('Select component', () => {
  it('accepts children', () => {
    const select = shallow(
      <Select name="test.select" id="mySelect">
        <option value="value">text</option>
      </Select>
    );

    expect(select.props().children).toEqual(<option value="value">text</option>);
  });

  it('can be found through class and id selector when mounted', () => {
    const input = mount(<Select name="test.select" id="mySelect" className="selectField"/>);
    const mountedComponents = [input.find('.selectField'), input.find('#mySelect')];

    expect(mountedComponents.length).toBe(2);
  });

  it('has the passed props as attributes', () => {
    const container = mount(<Select name="test.select" id="mySelect" alt="this is my select" disabled />);
    const input = container.find('#mySelect');

    expect(input.prop('disabled')).toEqual(true);
    expect(input.prop('alt')).toEqual('this is my select');
    expect(input.prop('thisdoesnotexist')).toBeUndefined();
  });
});

