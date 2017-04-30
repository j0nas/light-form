export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';

export const changeField = (name, value) => ({
    type: UPDATE_INPUT_VALUE,
    name,
    value,
});

export default (state = {}, action) => {
    switch (action.type) {
        case UPDATE_INPUT_VALUE:
            return {...state, [action.name]: action.value};

        default:
            return state;
    }
};