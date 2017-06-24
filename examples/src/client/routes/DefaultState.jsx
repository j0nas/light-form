import React from 'react';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';

export default () =>
  (<div>
    <ExampleDescription route="DefaultState" description="Demonstrates initializing form with default values/state" />
    <Input name="defaultState.firstname" aria-label="First name" placeholder="First name" />
    <Input name="defaultState.middlename" aria-label="Middle name" placeholder="Middle name" />
    <Input name="defaultState.lastname" aria-label="Last name" placeholder="Last name" />
    <br />
    <StateAsText nodeName="defaultState" />
  </div>);
