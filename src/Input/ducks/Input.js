import set from "lodash.set";

const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export const changeField = (name, value) => ({
    type: UPDATE_INPUT_VALUE,
    name,
    value,
});

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_INPUT_VALUE:
            const shouldUpdateNestedProperty = action.name.indexOf('.') > -1;
            return shouldUpdateNestedProperty
                ? {...set(state, action.name, action.value)}
                : {...state, [action.name]: action.value};

        default:
            return state;
    }
};