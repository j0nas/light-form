import React from 'react';
import currencyFormatter from 'currency-formatter';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';

const formatCurrency = (event) => {
  const eventCopy = { ...event };
  eventCopy.target.value = currencyFormatter.format(eventCopy.target.value, { locale: 'en-US', precision: 0 });
  return eventCopy;
};

export default () =>
  (<div>
    <ExampleDescription
      route="InterceptOnChange"
      description="Demonstrates intercepting and modifying the onChange event before passing it on"
    />
    <Input
      name="interceptOnChange.amountOwed"
      aria-label="Amount owed"
      placeholder="Amount owed"
      onChange={formatCurrency}
    />
    <StateAsText nodeName="interceptOnChange" />
  </div>);
