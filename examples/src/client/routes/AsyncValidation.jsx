import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

const emailValidationForm = ({ valid }) =>
  (<div>
    <label htmlFor="async.field1">Field1*</label>
    <Input name="async.field1" className={valid ? 'valid' : 'invalid'} />

    <StateAsText nodeName="onStateChange" />
  </div>);

emailValidationForm.propTypes = {
  valid: PropTypes.bool,
};

emailValidationForm.defaultProps = {
  valid: false,
};


export default connect(state => ({ valid: state.onStateChange.valid }))(emailValidationForm);
