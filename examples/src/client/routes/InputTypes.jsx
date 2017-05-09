import React from 'react';
import Input from '../../../../src/Input/containers/InputContainer';
import StateAsText from '../components/StateAsText';

export default () =>
  <div>
    <Input name="inputTypes.text" placeholder="Text (default)" />
    <Input name="inputTypes.number" placeholder="Number" type="number" />
    <Input name="inputTypes.email" placeholder="Supports all W3 types" type="email" />
    <Input name="inputTypes.date" type="date" />

    <label htmlFor="trueValue">True</label>
    <Input type="radio" name="inputTypes.radio" id="trueValue" value="true" />
    <br />
    <label htmlFor="falseValue">False</label>
    <Input type="radio" name="inputTypes.radio" id="falseValue" value="false" />

    <StateAsText nodeName="inputTypes" />
  </div>;
