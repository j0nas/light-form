import PropTypes from "prop-types";
import {connect} from "react-redux";
import Input from "../components/Input";
import {changeField} from "../ducks/Input";

const InputContainer = props =>
    connect(
        state => ({
            value: state[props.name],
        }),
        dispatch => ({
            onChange: event =>
                dispatch(
                    changeField(
                        name,
                        event.target.type === 'checkbox'
                            ? event.target.checked
                            : event.target.value,
                    )),
        }),
        (state, dispatch, own) => ({
            // Pass in received props first so props defined here overwrite any preexisting ones.
            ...own,
            ...state,
            ...dispatch,
        }),
    )(Input);

Input.propTypes = {
    name: PropTypes.string.isRequired,
};

export default InputContainer;
