import PropTypes from "prop-types";
import {connect} from "react-redux";
import dotProp from "dot-prop-immutable";
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
        value: own.name && dotProp.get(state, own.name)|| '',
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
    name: (props, propName, componentName) => {
        const error = "Invalid property 'name' supplied to '" + componentName + "'. ";
        if (typeof props[propName] !== 'string') {
            return new Error(error + "Value must be a valid string.");
        }

        if (!/.+\..+/.test(props[propName])) {
            return new Error(error + "Value must contain a dot-delimited namespace. (eg. name=\"customer.firstname\")");
        }
    },
};

export default InputContainer;
