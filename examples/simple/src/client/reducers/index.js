import { combineReducers } from 'redux';
import reducer from '../../../../../src/Input/ducks/Input';

export default combineReducers({
  customer: reducer('customer'),
  address: reducer('address'),
  // .. other reducers
});
