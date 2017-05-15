import { combineReducers } from 'redux';
import { validate } from 'email-validator';
import reducer from '../../../../src/Input/ducks/Input';

const defaultState = {
  firstname: 'Jonas',
  lastname: 'Jensen',
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
  // .. other reducers
});
