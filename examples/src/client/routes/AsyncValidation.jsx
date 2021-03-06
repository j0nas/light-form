import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';

import { asyncValidationAction } from '../reducers/asyncValidation';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';

const description = 'Demonstrates synchronous and asynchronous validation. ' +
    'Async validation of Field1 is triggered when pressing "Save".';

const AsyncValidationForm = ({ field1Invalid, field3Disabled, validate }) =>
  (<div>
    <ExampleDescription route="AsyncValidation" description={description} />
    <label htmlFor="async.field1">
      Field1*
      <Input name="async.field1" className={field1Invalid ? 'invalid' : ''} />
    </label>
    <div className="hint">Hint: should not be a number</div>
    <br />

    <label htmlFor="async.field2">
      Field2
      <Input name="async.field2" />
    </label>
    <br />

    <label htmlFor="async.field3">
      Field3
      <Input name="async.field3" disabled={field3Disabled} className={field3Disabled ? 'invalid' : ''} />
    </label>
    <div className="hint">Hint: enabled when Field2 &gt; 10</div>
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
    field3Disabled: state.async.field2 <= 10,
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
