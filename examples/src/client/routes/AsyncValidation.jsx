import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

import { asyncValidationAction } from '../reducers/asyncValidation';

const AsyncValidationForm = ({ field1Invalid, field3Disabled, validate }) =>
  (<div>
    <br />
    <label htmlFor="async.field1">Field1*</label>
    <Input name="async.field1" className={field1Invalid ? 'invalid' : ''} />
    <sup>Hint: should not be a number</sup>
    <br />

    <label htmlFor="async.field2">Field2</label>
    <Input name="async.field2" />

    <label htmlFor="async.field3">Field3</label>
    <Input name="async.field3" disabled={field3Disabled} className={field3Disabled ? 'invalid' : ''} />
    <sup>Hint: enabled when Field2 &gt; 10</sup>
    <br />

    <button onClick={validate}>Save</button>
    <StateAsText nodeName="async" />
    <StateAsText nodeName="asyncValidation" />
  </div>);

AsyncValidationForm.propTypes = {
  field1Invalid: PropTypes.bool,
  field3Disabled: PropTypes.bool,
  validate: PropTypes.func.isRequired,
};

AsyncValidationForm.defaultProps = {
  field1Invalid: false,
  field3Disabled: false,
};

export default connect(
  state => ({
    field1: state.async.field1,
    field1Invalid: state.asyncValidation.field1Invalid,
    field3Disabled: state.async.field2 < 10,
  }),
  dispatch => ({
    validate: value => asyncValidationAction(value, dispatch),
  }),
  (state, dispatch) => ({
    validate: () => dispatch.validate(state.field1),
    field1Invalid: state.field1Invalid,
    field3Disabled: state.field3Disabled,
  }),
)(AsyncValidationForm);
