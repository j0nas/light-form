import dotProp from "dot-prop";
import objectAssign from "object-assign";

const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export const changeField = (type, name, value) => ({
    type,
    name,
    value,
});

const calculateNewState = (state, name, value) => {
    const stateCopy = objectAssign({}, state);
    dotProp.set(stateCopy, name, value);
    return stateCopy;
};

export const createBoundType = namespace =>
    (UPDATE_INPUT_VALUE + '.' + namespace);

export default namespace =>
    (state = {}, action) => {
        const boundType = createBoundType(namespace);
        switch (action.type) {
            case boundType:
                const fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
                return calculateNewState(state, fieldPathWithoutNamespace, action.value);

            default:
                return state;
        }
    };