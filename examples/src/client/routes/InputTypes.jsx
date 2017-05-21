import React from 'react';
import { Input, Select, TextArea } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  (<div>
    <p>
      <Input name="inputTypes.text" aria-label="text" placeholder="Text (default)" /><br />
      <Input name="inputTypes.number" aria-label="number" placeholder="Number" type="number" /><br />
      <Input name="inputTypes.email" aria-label="email" placeholder="Supports all W3 types" type="email" /><br />
      <Input name="inputTypes.date" aria-label="date" type="date" /><br />
    </p>
    <p>
      <fieldset>
        <legend>Radio group</legend>
        <label htmlFor="trueValue">True</label>
        <Input type="radio" name="inputTypes.radio" id="trueValue" value="true" />
        <br />
        <label htmlFor="falseValue">False</label>
        <Input type="radio" name="inputTypes.radio" id="falseValue" value="false" />
      </fieldset>
    </p>
    <p>
      <TextArea name="inputTypes.textArea" aria-label="textarea" placeholder="Text area" />
    </p>
    <p>
      <Select name="inputTypes.select" aria-label="textarea">
        <option value="default">Select one</option>
        <option value="one">One</option>
        <option value="two">Two</option>
        <option value="three">Three</option>
      </Select>
    </p>
    <StateAsText nodeName="inputTypes" />
  </div>);
