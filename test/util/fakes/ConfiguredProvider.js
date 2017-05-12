import React from "react";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "../../../src/Input/ducks/Input";

const store = createStore(reducer);

export default children =>
  <Provider children={children} store={store} />