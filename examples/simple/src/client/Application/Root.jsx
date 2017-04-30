import React from 'react';
import Input from '../../../../../src/Input/containers/InputContainer';
import './Application.scss';

const Root = () =>
  <div>
    <Input className="input" name="firstName" placeholder="First name" />
    <Input className="input" name="middleName" placeholder="Middle name" />
    <Input className="input" name="lastName" placeholder="Last name" />
  </div>;

export default Root;
