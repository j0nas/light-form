import { combineReducers } from 'redux';
import reducer from '../../../../src/Input/ducks/Input';

export default combineReducers({
  basic: reducer('basic'),
  nested: reducer('nested'),
  // .. other reducers
});
