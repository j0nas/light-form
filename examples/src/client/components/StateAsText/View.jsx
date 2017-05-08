import React from 'react';
import PropTypes from 'prop-types';
import JSONPretty from 'react-json-pretty';

const StateAsText = ({ state, nodeName }) =>
  <div>
    <h1>state.{nodeName}</h1>
    <JSONPretty json={state} />
  </div>;

StateAsText.propTypes = {
  state: PropTypes.object.isRequired, // eslint-disable-line
  nodeName: PropTypes.string.isRequired,
};

export default StateAsText;
