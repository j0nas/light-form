import PropTypes from "prop-types";
import {connect} from "react-redux";
import dotProp from "dot-prop";
import Input from "../components/Input";
import {changeField, createBoundType} from "../ducks/Input";

const getNamespaceOfField = fieldName =>
    fieldName.indexOf('.') > -1
        ? fieldName.split('.')[0]
        : fieldName;

const InputContainer = connect(
        state => state,
        dispatch => ({
            dispatch,
        }),
    (state, dispatch, own) => ({
        // Pass in received props first so defined props overwrite any preexisting ones.
        ...own,
        value: dotProp.get(state, own.name, ''),
        onChange: event => {
            const value = event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

            const namespace = getNamespaceOfField(own.name);
            const type = createBoundType(namespace);
            return dispatch.dispatch(changeField(type, own.name, value));
        },
    }),
)(Input);

InputContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default InputContainer;
