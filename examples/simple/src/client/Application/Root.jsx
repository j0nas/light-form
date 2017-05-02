import React from 'react';
import Input from '../../../../../src/Input/containers/InputContainer';
import './Application.scss';

const Root = () =>
  <div>
    <Input className="input" name="customer.name.first" placeholder="First name" />
    <Input className="input" name="customer.name.middle" placeholder="Middle name" />
    <Input className="input" name="customer.name.last" placeholder="Last name" />
    <br />

    <Input className="input" name="customer.phone.prefix" type="number" placeholder="Phone prefix" />
    <Input className="input" name="customer.phone.number.mobile" type="number" placeholder="Mobile number" />
    <br />

    <Input className="input" name="address.firstLine" placeholder="Address 1" />
    <Input className="input" name="address.secondLine" placeholder="Address 2" />
  </div>;

export default Root;
