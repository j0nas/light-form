import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';

const emailValidationForm = ({ valid }) =>
  (<div>
    <ExampleDescription
      route="OnStateChange"
      description="Demonstrates reacting to dispatched event with onStateChange reducer hook (reducers/index.js)"
    />
    <Input
      name="onStateChange.email"
      aria-label="Valid email adress"
      placeholder="Valid email adress"
      className={valid ? 'valid' : 'invalid'}
    />
    <StateAsText nodeName="onStateChange" />
  </div>);

emailValidationForm.propTypes = {
  valid: PropTypes.bool,
};

emailValidationForm.defaultProps = {
  valid: false,
};


export default connect(state => ({ valid: state.onStateChange.valid }))(emailValidationForm);
