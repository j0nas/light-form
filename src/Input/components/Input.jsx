import React from "react";
import PropTypes from "prop-types";

const Input = props =>
    <input {...props} />;

Input.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string.isRequired,
};

export default Input;