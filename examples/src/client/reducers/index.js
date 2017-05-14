import { combineReducers } from 'redux';
import reducer from '../../../../src/Input/ducks/Input';

const defaultState = {
  firstname: 'Jonas',
  lastname: 'Jensen',
};

export default combineReducers({
  basic: reducer('basic'),
  inputTypes: reducer('inputTypes'),
  nested: reducer('nested'),
  defaultState: reducer('defaultState', defaultState),
  interceptOnChange: reducer('interceptOnChange'),
  // .. other reducers
});
