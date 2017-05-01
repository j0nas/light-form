import PropTypes from "prop-types";
import {connect} from "react-redux";
import get from "lodash.get";
import Input from "../components/Input";
import {changeField, createBoundType, UPDATE_INPUT_VALUE} from "../ducks/Input";

const getNamespaceOfField = fieldName =>
    fieldName.indexOf('.') > -1
        ? fieldName.split('.')[0]
        : fieldName;

const InputContainer = connect(
        state => state,
        dispatch => ({
            dispatch,
        }),
    (state, dispatch, own) => {
        const namespaceOfField = getNamespaceOfField(own.name);
        const hasNamespace = window.__LIGHT_FORM__.indexOf(namespaceOfField);

        // FIXME we want to flip this and prefix w/default ns if no ns is found
        // FIXME this means we need to have a way to get the default ns

        const name = (hasNamespace ? '' : namespaceOfField + '.') + own.name;

        const value2 = get(state, name);
        console.log("value", name);
        return ({
            // Pass in received props first so props defined here overwrite any preexisting ones.
            ...own,
            ...state,
            value: value2, // FIXME use lodash.get to retreive correct state info
            onChange: event => {
                const value = event.target.type === 'checkbox'
                    ? event.target.checked
                    : event.target.value;

                const namespace = getNamespaceOfField(own.name);
                const fieldHasNamespace =
                    window.__LIGHT_FORM__ &&
                    window.__LIGHT_FORM__.indexOf(namespace) > -1;
                const type = fieldHasNamespace
                    ? createBoundType(namespace)
                    : UPDATE_INPUT_VALUE;

                return dispatch.dispatch(changeField(type, own.name, value));
            },
        });
    },
)(Input);

InputContainer.propTypes = {
    name: PropTypes.string.isRequired,
};

export default InputContainer;
