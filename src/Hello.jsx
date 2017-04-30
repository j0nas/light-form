import React from "react";
import PropTypes from "prop-types";

const Hello = ({world}) => <div></div>;

Hello.propTypes = {
    world: PropTypes.string,
};

Hello.defaultProps = {
    world: '',
};

export default Hello;