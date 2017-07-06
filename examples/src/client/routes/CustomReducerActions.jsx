import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';
import { resetForm, multiplyValues } from '../reducers/customReducerActions';

const CustomReducerActionsForm = ({ reset, multiply }) =>
  (<div>
    <ExampleDescription
      route="CustomReducerActions"
      description="Demonstrates triggering custom actions in reducer"
    />
    <Input
      name="customReducerActions.firstNumber"
      type="number"
      aria-label="First number"
      placeholder="First number"
    />
    <Input
      name="customReducerActions.secondNumber"
      type="number"
      aria-label="Second number"
      placeholder="Second number"
    />
    <div><button onClick={multiply}>Multiply values</button></div>
    <div><button onClick={reset}>Clear form</button></div>
    <StateAsText nodeName="customReducerActions" />
  </div>);

CustomReducerActionsForm.propTypes = {
  reset: PropTypes.func.isRequired,
  multiply: PropTypes.func.isRequired,
};

export default connect(
  null,
  dispatch => ({
    reset: () => dispatch(resetForm()),
    multiply: () => dispatch(multiplyValues()),
  }),
)(CustomReducerActionsForm);
