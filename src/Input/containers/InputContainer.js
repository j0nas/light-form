import PropTypes from "prop-types";
import {connect} from "react-redux";
import Input from "../components/Input";
import {changeField, createBoundType, UPDATE_INPUT_VALUE} from "../ducks/Input";

const getNamespaceOfField = fieldName =>
    fieldName.indexOf('.') > -1
        ? fieldName.split('.')[0]
        : fieldName;

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
        onChange: event => {
            const value = event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

            const namespace = getNamespaceOfField(own.name);
            const fieldHasNamespace =
                window.__LIGHT_FORM__ &&
                window.__LIGHT_FORM__.indexOf(namespace) > -1;
            const type = fieldHasNamespace ?
                createBoundType(namespace)
                : UPDATE_INPUT_VALUE;

            return dispatch.dispatch(changeField(type, own.name, value));
        },
    }),
)(Input);

InputContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default InputContainer;
