import React from 'react';
import { Input, Select, TextArea } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';

export default () =>
  (<div>
    <ExampleDescription route="InputTypes" description="Demonstrates how to use all the different input types" />
    <Input name="inputTypes.text" aria-label="text" placeholder="Text (default)" /><br />
    <Input name="inputTypes.number" aria-label="number" placeholder="Number" type="number" /><br />
    <Input name="inputTypes.email" aria-label="email" placeholder="Supports all W3 types" type="email" /><br />
    <Input name="inputTypes.date" aria-label="date" type="date" /><br />
    <br />
    <fieldset>
      <legend>Radio group</legend>
      <label htmlFor="trueValue">True</label>
      <Input type="radio" name="inputTypes.radio" id="trueValue" value="true" />
      <br />
      <label htmlFor="falseValue">False</label>
      <Input type="radio" name="inputTypes.radio" id="falseValue" value="false" />
    </fieldset>
    <br />
    <TextArea name="inputTypes.textArea" aria-label="textarea" placeholder="Text area" />
    <br />
    <Select name="inputTypes.select" aria-label="textarea">
      <option value="default">Select one</option>
      <option value="one">One</option>
      <option value="two">Two</option>
      <option value="three">Three</option>
    </Select>
    <StateAsText nodeName="inputTypes" />
  </div>);
