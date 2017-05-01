import set from "lodash.set";

export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export const changeField = (type, name, value) => ({
    type,
    name,
    value,
});

const calculateNewState = (state, name, value) => {
    const isNestedField = name.indexOf('.') > -1;
    return isNestedField
        ? {...set(state, name, value)}
        : {...state, [name]: value};
};

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_INPUT_VALUE:
            return calculateNewState(state, action.name, action.value);

        default:
            return state;
    }
};

export const createBoundType = namespace =>
    (UPDATE_INPUT_VALUE + '.' + namespace);

export const boundReducer = namespace => {
    if (window) {
        window.__LIGHT_FORM__ = [...(window.__LIGHT_FORM__ || false), namespace];
    } else {
        if (process.env.NODE_ENV !== 'production') {
            console.error("light-form: window is not defined");
        }
    }

    return (state = {}, action) => {
        const boundType = createBoundType(namespace);
        switch (action.type) {
            case boundType:
                const fieldPathWithoutNamespace = action.name.replace(namespace + '.', '');
                return calculateNewState(state, fieldPathWithoutNamespace, action.value);

            default:
                return state;
        }
    };
};