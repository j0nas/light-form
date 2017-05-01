import React from 'react';
import Input from '../../../../../src/Input/containers/InputContainer';
import './Application.scss';

const Root = () =>
  <div>
    <Input className="input" name="name.first" placeholder="First name" />
    <Input className="input" name="name.middle" placeholder="Middle name" />
    <Input className="input" name="name.last" placeholder="Last name" />

    <Input className="input" name="phoneNumber" type="number" placeholder="Phone number" />
    <br />

    <Input className="input" name="address.firstLine" placeholder="Address 1" />
    <Input className="input" name="address.secondLine" placeholder="Address 2" />
  </div>;

export default Root;
