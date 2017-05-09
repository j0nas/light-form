import React from "react";
import PropTypes from "prop-types";

const TextArea = props =>
    <textarea {...props} />;

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
};

export default TextArea;