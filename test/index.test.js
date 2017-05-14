import React from 'react';
import {mount} from 'enzyme';
import {Input, Select, TextArea} from "../src";
import InputComponent from "../src/Input/components/Input";
import SelectComponent from "../src/Input/components/Select";
import TextAreaComponent from "../src/Input/components/TextArea";
import InputContainer from "../src/Input/containers/InputContainer";
import ConfiguredProvider from './util/fakes/ConfiguredProvider';

describe('Exported components', () => {
  it('exports correctly decorated components', () => {
    const exportedComponentWrapper = mount(
      <ConfiguredProvider>
        <div>
          <Input name="group.input"/>
          <Select name="group.select"/>
          <TextArea name="group.textarea"/>
        </div>
      </ConfiguredProvider>
    );
    const exportedInput = exportedComponentWrapper.find('input');
    const exportedSelect = exportedComponentWrapper.find('select');
    const exportedTextArea = exportedComponentWrapper.find('textarea');

    const InternalInput = InputContainer(InputComponent);
    const InternalSelect = InputContainer(SelectComponent);
    const InternalTextArea = InputContainer(TextAreaComponent);
    const internalComponentWrapper = mount(
      <ConfiguredProvider>
        <div>
          <InternalInput name="group.input" />
          <InternalSelect name="group.select"/>
          <InternalTextArea name="group.textarea"/>
        </div>
      </ConfiguredProvider>
    );
    const internalInput = internalComponentWrapper.find('input');
    const internalSelect = internalComponentWrapper.find('select');
    const internalTextArea = internalComponentWrapper.find('textarea');

    expect(exportedInput).toEqual(internalInput);
    expect(exportedSelect).toEqual(internalSelect);
    expect(exportedTextArea).toEqual(internalTextArea);
  });
});

