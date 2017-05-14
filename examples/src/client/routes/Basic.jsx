import React from 'react';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  <div>
    <Input name="basic.firstname" placeholder="First name" />
    <Input name="basic.middlename" placeholder="Middle name" />
    <Input name="basic.lastname" placeholder="Last name" />

    <StateAsText nodeName="basic" />
  </div>;
