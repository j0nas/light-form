import { CHANGE_INPUT_VALUE } from '../types';

const initialState = {
  inputValue: 0,
};

export default (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case CHANGE_INPUT_VALUE:
      return Object.assign({}, state, { inputValue: action.inputValue });

    default:
      return state;
  }
};
