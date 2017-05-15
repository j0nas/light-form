import React from 'react';
import { Input, Select, TextArea } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  (<div>
    <p>
      <Input name="inputTypes.text" placeholder="Text (default)" />
      <Input name="inputTypes.number" placeholder="Number" type="number" />
      <Input name="inputTypes.email" placeholder="Supports all W3 types" type="email" />
      <Input name="inputTypes.date" type="date" />
    </p>
    <p>
      <label htmlFor="trueValue">True</label>
      <Input type="radio" name="inputTypes.radio" id="trueValue" value="true" />
      <br />
      <label htmlFor="falseValue">False</label>
      <Input type="radio" name="inputTypes.radio" id="falseValue" value="false" />
    </p>
    <p>
      <TextArea name="inputTypes.textArea" placeholder="Text area" />
    </p>
    <p>
      <Select name="inputTypes.select">
        <option value="default">Select one</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </Select>
    </p>
    <StateAsText nodeName="inputTypes" />
  </div>);
