import React from "react";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import reducer from "../../../src/Input/ducks/Input";

const reducers = combineReducers({
  test: reducer('test'),
});
const store = createStore(reducers);

export default ({children}) =>
  <Provider store={store} children={children} />;