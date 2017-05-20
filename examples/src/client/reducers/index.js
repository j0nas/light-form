import { combineReducers } from 'redux';
import { validate } from 'email-validator';
import reducer from '../../../../src/Input/ducks/Input';
import asyncValidation from './asyncValidation';

const defaultState = {
  firstname: 'Jonas',
  lastname: 'Jensen',
};

const asyncDefaultState = {
  field1: 'default',
  field2: 4,
  field3: 10,
};

const onStateChange = state =>
  ({
    ...state,
    valid: validate(state.email),
  });

export default combineReducers({
  basic: reducer('basic'),
  inputTypes: reducer('inputTypes'),
  nested: reducer('nested'),
  defaultState: reducer('defaultState', defaultState),
  interceptOnChange: reducer('interceptOnChange'),
  onStateChange: reducer('onStateChange', {}, onStateChange),
  async: reducer('async', asyncDefaultState),
  asyncValidation,
  // .. other reducers
});
