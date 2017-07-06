import reducer from '../../../../src/Input/ducks/Input';

const RESET_FORM = 'RESET_FORM';
const MULTIPLY_VALUES = 'MULTIPLY_VALUES';

export const resetForm = () => ({ type: RESET_FORM });
export const multiplyValues = () => ({ type: MULTIPLY_VALUES });

const resetActionHandler = {
  [RESET_FORM]: () => ({}),
  [MULTIPLY_VALUES]: (state) => {
    const stateCopy = { ...state };
    Object.keys(stateCopy).forEach((key) => {
      stateCopy[key] *= 2;
    });

    return stateCopy;
  },
};

export default reducer('customReducerActions', {}, null, resetActionHandler);
