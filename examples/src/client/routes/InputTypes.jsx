import React from 'react';
import Input from '../../../../src/Input/containers/InputContainer';
import StateAsText from '../components/StateAsText';

export default () =>
  <div>
    <Input name="inputTypes.text" placeholder="Text (default)" />
    <Input name="inputTypes.number" placeholder="Number" type="number" />
    <Input name="inputTypes.email" placeholder="Supports all W3 types" type="email" />
    <Input name="inputTypes.date" type="date" />

    <label htmlFor="male">True</label>
    <Input type="radio" name="inputTypes.radio" id="true" value="true" />
    <br />
    <label htmlFor="female">False</label>
    <Input type="radio" name="inputTypes.radio" id="false" value="false" />

    <StateAsText nodeName="inputTypes" />
  </div>;
