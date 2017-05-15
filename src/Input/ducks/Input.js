import dotProp from "dot-prop-immutable";

const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export const changeField = (type, name, value) => ({
    type,
    name,
    value,
});

export const createBoundType = namespace =>
    (UPDATE_INPUT_VALUE + '.' + namespace);

export default (namespace, defaultState, onStateChange) =>
    (state = defaultState || {}, action) => {
        const boundType = createBoundType(namespace);
        switch (action.type) {
            case boundType:
                const fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
                const newState = dotProp.set(state, fieldPathWithoutNamespace, action.value);
                return onStateChange && onStateChange(newState) || newState;

            default:
                return state;
        }
    };