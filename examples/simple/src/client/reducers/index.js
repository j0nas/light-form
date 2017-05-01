import { combineReducers } from 'redux';
import customer, { boundReducer } from '../../../../../src/Input/ducks/Input';

export default combineReducers({
  customer,
  address: boundReducer('address'),
  // .. other reducers
});
