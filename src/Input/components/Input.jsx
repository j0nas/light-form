import React from "react";
import PropTypes from "prop-types";

const Input = props =>
    <input {...props} />;

Input.propTypes = {
    name: PropTypes.string.isRequired,
};

Input.defaultProps = {
    type: 'text',
};

export default Input;