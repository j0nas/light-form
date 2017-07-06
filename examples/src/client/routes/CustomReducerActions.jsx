import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input } from '../../../../src';
import StateAsText from '../components/StateAsText';
import ExampleDescription from '../components/ExampleDescription/ExampleDescription';
import { resetForm } from '../reducers/resetForm';

const CustomReducerActionsForm = ({ reset }) =>
  (<div>
    <ExampleDescription
      route="CustomReducerActions"
      description="Demonstrates triggering custom actions in reducer"
    />
    <Input name="customReducerActions.firstname" aria-label="Firstname" placeholder="Firstname" />
    <Input name="customReducerActions.lastname" aria-label="Lastname" placeholder="Lastname" />
    <button onClick={reset}>Clear form</button>
    <StateAsText nodeName="customReducerActions" />
  </div>);

CustomReducerActionsForm.propTypes = {
  reset: PropTypes.func.isRequired,
};

export default connect(
    null,
    dispatch => ({
      reset: () => dispatch(resetForm()),
    }),
)(CustomReducerActionsForm);
