import reducer from '../../../../src/Input/ducks/Input';

export const RESET_FORM = 'RESET_FORM';

export const resetForm = () => ({
  type: RESET_FORM,
});

const resetActionHandler = {
  [RESET_FORM]: () => {
    console.log('Resetting state.'); // eslint-disable-line
    return {};
  },
};

export default reducer('customReducerActions', {}, null, resetActionHandler);
