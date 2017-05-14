import React from 'react';
import currencyFormatter from 'currency-formatter';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

const onChange = (event) => {
  const eventCopy = { ...event };
  eventCopy.target.value = event.target.value + (event.target.value[event.target.value.length - 1] || '');
  console.log('Intercepted event, modifying value to:', eventCopy.target.value); // eslint-disable-line
  return eventCopy;
};

const formatCurrency = (event) => {
  const eventCopy = { ...event };
  eventCopy.target.value = currencyFormatter.format(eventCopy.target.value, { locale: 'en-US', precision: 0 });
  return eventCopy;
};

export default () =>
  <div>
    <Input name="interceptOnChange.firstname" placeholder="First name" onChange={onChange} />
    <Input name="interceptOnChange.lastname" placeholder="Last name" onChange={onChange} />
    <br />
    <Input name="interceptOnChange.amountOwed" placeholder="Amount owed" onChange={formatCurrency} />
    <StateAsText nodeName="interceptOnChange" />
  </div>;
