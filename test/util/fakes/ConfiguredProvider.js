import React from "react";
import PropTypes from "prop-types";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import reducer from "../../../src/Input/ducks/Input";

const reducers = combineReducers({
  test: reducer('test'),
});

export const generateStore = () =>
  (createStore(reducers));

const ConfiguredProvider = ({children, customStore}) =>
  <Provider store={customStore || generateStore()} children={children} />;

ConfiguredProvider.propTypes = {
  children: PropTypes.node.isRequired,
  customStore: PropTypes.object,
};

ConfiguredProvider.defaultProps = {
  customStore: undefined,
};

export default ConfiguredProvider;