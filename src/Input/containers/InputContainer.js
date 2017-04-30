import PropTypes from "prop-types";
import {connect} from "react-redux";
import Input from "../components/Input";
import {changeField} from "../ducks/Input";

const InputContainer = connect(
        undefined,
        dispatch => ({
            dispatch,
        }),
        (state, dispatch, own) => ({
            // Pass in received props first so props defined here overwrite any preexisting ones.
            ...own,
            ...state,
            value: state[own.name],
            onChange: event =>
                dispatch.dispatch(
                    changeField(
                        own.name,
                        event.target.type === 'checkbox'
                            ? event.target.checked
                            : event.target.value,
                    )),
        }),
    )(Input);

InputContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default InputContainer;
