import React from 'react';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  (<div>
    <label htmlFor="basic.firstname">
      First name
      <Input name="basic.firstname" />
    </label>
    <br />
    <label htmlFor="basic.middlename">
      Middle name
      <Input name="basic.middlename" />
    </label>
    <br />
    <label htmlFor="basic.lastname">
      Last name
      <Input name="basic.lastname" />
    </label>

    <StateAsText nodeName="basic" />
  </div>);
