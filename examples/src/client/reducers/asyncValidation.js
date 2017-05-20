const VALIDATE_STARTED = 'VALIDATE_STARTED';
const VALIDATE_COMPLETED = 'VALIDATE_COMPLETED';

export const asyncValidationAction = (value, dispatch) => {
  dispatch(({ type: VALIDATE_STARTED }));
  setTimeout(() => dispatch({ type: VALIDATE_COMPLETED, payload: value }), 1000);
};

export default (state = {}, action) => {
  switch (action.type) {
    case VALIDATE_STARTED:
      return ({ ...state, waitngForAsyncResponse: true });

    case VALIDATE_COMPLETED:
      return ({
        ...state,
        waitngForAsyncResponse: false,
        field1Invalid: Boolean(Number(action.payload)),
      });

    default:
      return state;
  }
};
