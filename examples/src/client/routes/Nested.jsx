import React from 'react';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

export default () =>
  (<div>
    <Input aria-label="firstname" name="nested.customer.name.first" placeholder="First name" />
    <Input aria-label="middlename" name="nested.customer.name.middle" placeholder="Middle name" />
    <Input aria-label="lastname" name="nested.customer.name.last" placeholder="Last name" />
    <br />
    <Input aria-label="Phone prefix" type="tel" name="nested.customer.phone.prefix" placeholder="Country prefix" />
    <Input aria-label="Cellphone" type="tel" name="nested.customer.phone.numbers.mobile" placeholder="Mobile phone" />
    <Input aria-label="Home phone" type="tel" name="nested.customer.phone.numbers.home" placeholder="Home phone" />

    <StateAsText nodeName="nested" />
  </div>);
