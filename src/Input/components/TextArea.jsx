import React from "react";
import PropTypes from "prop-types";

const TextArea = props =>
    <textarea {...props} />;

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
};

TextArea.defaultProps = {
    type: 'text',
};

export default TextArea;