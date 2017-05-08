import React from 'react';
import Input from '../../../../src/Input/containers/InputContainer';
import StateAsText from '../components/StateAsText';

export default () =>
  <div>
    <Input name="defaultState.firstname" placeholder="First name" />
    <Input name="defaultState.middlename" placeholder="Middle name" />
    <Input name="defaultState.lastname" placeholder="Last name" />
    <br />
    <StateAsText nodeName="defaultState" />
  </div>;
