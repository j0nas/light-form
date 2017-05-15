import React from 'react';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  (<div>
    <Input name="nested.customer.name.first" placeholder="First name" />
    <Input name="nested.customer.name.middle" placeholder="Middle name" />
    <Input name="nested.customer.name.last" placeholder="Last name" />
    <br />
    <Input type="tel" name="nested.customer.phone.prefix" placeholder="Country prefix" />
    <Input type="tel" name="nested.customer.phone.numbers.mobile" placeholder="Mobile phone" />
    <Input type="tel" name="nested.customer.phone.numbers.home" placeholder="Home phone" />

    <StateAsText nodeName="nested" />
  </div>);
