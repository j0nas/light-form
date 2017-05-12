import React from 'react';
import TextArea from '../../../src/Input/components/TextArea';
import {mount} from 'enzyme';

describe('TextArea component', () => {
  it('can be found through class and id selector when mounted', () => {
    const input = mount(<TextArea name="test.textarea" id="myTextArea" className="textAreaField"/>);
    const mountedComponents = [input.find('.textAreaField'), input.find('#myTextArea')];

    expect(mountedComponents.length).toBe(2);
  });

  it('has the passed props as attributes', () => {
    const container = mount(<TextArea name="test.textarea" id="myTextArea" alt="this is my textarea" disabled />);
    const input = container.find('#myTextArea');

    expect(input.prop('disabled')).toEqual(true);
    expect(input.prop('alt')).toEqual('this is my textarea');
    expect(input.prop('thisdoesnotexist')).toBeUndefined();
  });
});

